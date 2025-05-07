'use client';

import { useState } from 'react';
import Image from 'next/image';

type Product = {
  id: number;
  src: string;
  alt: string;
};

const products: Product[] = [
  { id: 1, src: '/003 Realistic Oversized T-Shirt Mockups - BLACK 2026.png', alt: 'T-shirt 1' },
  { id: 2, src: '/004 Realistic Oversized T-Shirt Mockups - BLACK 2026.png', alt: 'T-shirt 2' },
  { id: 3, src: '/005 Realistic Oversized T-Shirt Mockups - BLACK 2026.png', alt: 'T-shirt 3' },
  { id: 4, src: '/006 Realistic Oversized T-Shirt Mockups - BLACK 2026.png', alt: 'T-shirt 4' },
  { id: 5, src: '/007 Realistic Oversized T-Shirt Mockups - BLACK 2026.png', alt: 'T-shirt 5' },
  { id: 6, src: '/06 Realistic Oversized T-Shirt Mockups - BLACK 2026.png', alt: 'T-shirt 6' },
  { id: 7, src: '/003 Realistic Oversized T-Shirt Mockups - BLACK 2026.png', alt: 'T-shirt 7' },
  { id: 8, src: '/004 Realistic Oversized T-Shirt Mockups - BLACK 2026.png', alt: 'T-shirt 8' },
  { id: 9, src: '/005 Realistic Oversized T-Shirt Mockups - BLACK 2026.png', alt: 'T-shirt 9' },
  { id: 10, src: '/006 Realistic Oversized T-Shirt Mockups - BLACK 2026.png', alt: 'T-shirt 10' },
];

export default function Home() {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  return (
    <div className="min-h-screen bg-white text-black px-4 py-8 sm:px-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">BLACK 2026 Collection</h1>
        <p className="text-gray-600 text-lg">Oversized T-Shirts · R399.99 each</p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4 transition hover:shadow-lg"
          >
            <Image
              src={product.src}
              alt={product.alt}
              width={300}
              height={300}
              className="object-cover rounded-md"
            />
            <p className="mt-4 text-xl font-medium">R399.99</p>
            <button
              onClick={() => addToCart(product.id)}
              className="mt-3 w-full py-2 px-4 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </main>

      <section className="mt-12 text-center">
        <p className="text-lg">
          🛒 Items in Cart: <strong>{cart.length}</strong>
        </p>
        {cart.length > 0 && (
          <button className="mt-4 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>
        )}
      </section>

      <footer className="mt-16 text-center text-sm text-gray-500">
        &copy; 2026 BLACK. All rights reserved.
      </footer>
    </div>
  );
}

