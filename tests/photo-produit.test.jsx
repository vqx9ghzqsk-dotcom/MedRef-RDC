import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PhotoProduit } from '../src/ui/components/Produits.jsx';

describe('PhotoProduit', () => {
  it('identifies the generic illustration when no exact package photo is available', () => {
    const { container } = render(<PhotoProduit produit={{ nom_commercial: 'Produit sans photo' }} />);

    expect(
      screen.getByRole('img', {
        name: 'Illustration générique pour Produit sans photo ; emballage non représenté',
      }),
    ).toBeInTheDocument();
    expect(container.querySelector('.produit-photo-mention')).toHaveTextContent(/Illustration générique/);
    expect(container.querySelector('.produit-photo-mention')).toHaveTextContent(/emballage non représenté/);
    expect(container.querySelector('img')).toBeNull();
  });

  it('falls back to a clearly labeled illustration if the photo cannot be loaded', () => {
    render(
      <PhotoProduit
        produit={{ nom_commercial: 'Produit test', photo_url: '/medias/produits/test/boite.webp' }}
      />,
    );

    fireEvent.error(screen.getByRole('img', { name: 'Conditionnement de Produit test' }));

    expect(
      screen.getByRole('img', {
        name: 'Illustration générique pour Produit test ; emballage non représenté',
      }),
    ).toBeInTheDocument();
  });
});
