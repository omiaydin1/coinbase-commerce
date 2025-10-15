import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import OnchainStoreItem from './OnchainStoreItem';

const mockProduct = {
  id: '1',
  name: 'Sample Product',
  price: 19.99,
  image: 'https://example.com/image.jpg',
};

vi.mock('./QuantityInput', () => {
  return {
    default: ({ productId }: { productId: string }) => (
      <input data-testid={`quantity-input-${productId}`} />
    ),
  };
});

vi.mock('next/image', () => {
  return {
    default: ({
      src,
      alt,
      width,
      height,
    }: {
      src: string;
      alt: string;
      width: number;
      height: number;
    }) => <img src={src} alt={alt} width={width} height={height} />,
  };
});

describe('OnchainStoreItem', () => {
  it('should render product information correctly', () => {
    render(<OnchainStoreItem {...mockProduct} />);

    expect(screen.getByText('Sample Product')).toBeInTheDocument();
    expect(screen.getByText('19.99 USDC')).toBeInTheDocument();
    const imageElement = screen.getByAltText('123');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockProduct.image);
    expect(imageElement).toHaveAttribute('width', '400');
    expect(imageElement).toHaveAttribute('height', '400');
    expect(screen.getByTestId('quantity-input-1')).toBeInTheDocument();
  });
});
