import '@testing-library/jest-dom/vitest';
import 'fake-indexeddb/auto';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

vi.mock('../src/ui/components/ForetFond.jsx', () => ({ Foret: () => null }));
window.scrollTo = vi.fn();

afterEach(() => cleanup());
