import { act, cleanup, renderHook, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AuthProvider } from '../src/ui/context/auth.jsx';
import { ServicesProvider } from '../src/ui/context/services.jsx';
import { PrescriptionsProvider, usePrescriptions } from '../src/ui/hooks/usePrescriptions.js';

const user = { id: 17, nom: 'Dr Test' };

function createWrapper() {
  const api = {
    me: vi.fn(async () => user),
    prescriptions: vi.fn(async () => []),
    syncPrescriptions: vi.fn(async () => ({ results: [], data: [] })),
  };
  const repo = {
    list: vi.fn(async () => []),
    pending: vi.fn(async () => []),
    applyServerState: vi.fn(async () => {}),
  };
  const tokenStore = {
    getToken: () => 'session',
    getUser: () => user,
    setUser: vi.fn(),
    clear: vi.fn(),
  };
  const services = { api, repo, tokenStore, onSessionExpired: () => () => {} };
  const wrapper = ({ children }) => (
    <ServicesProvider services={services}>
      <AuthProvider>
        <PrescriptionsProvider>{children}</PrescriptionsProvider>
      </AuthProvider>
    </ServicesProvider>
  );
  return { api, wrapper };
}

afterEach(() => {
  cleanup();
});

describe('reprise des prescriptions hors ligne', () => {
  it('resynchronise au retour dans l’application sans lancer plusieurs requêtes', async () => {
    Object.defineProperty(navigator, 'onLine', { configurable: true, value: true });
    Object.defineProperty(document, 'visibilityState', { configurable: true, value: 'visible' });
    const { api, wrapper } = createWrapper();
    renderHook(() => usePrescriptions(), { wrapper });

    await waitFor(() => expect(api.prescriptions).toHaveBeenCalledTimes(1));
    api.prescriptions.mockClear();

    await act(async () => {
      window.dispatchEvent(new Event('pageshow'));
      window.dispatchEvent(new Event('focus'));
      document.dispatchEvent(new Event('visibilitychange'));
      await new Promise((resolve) => setTimeout(resolve, 300));
    });

    expect(api.prescriptions).toHaveBeenCalledTimes(1);
  });
});
