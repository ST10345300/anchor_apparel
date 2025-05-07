import { useState } from "react";
import Image from "next/image";

// Dummy cart state management (for now, it won't persist)
const useCart = () => {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  return {
    cart,
    addToCart,
  };
};

export default function Home() {
  const { addToCart } = useCart();
  const products = [
    { id: 1, src: "/003 Realistic Oversized T-Shirt Mockups - BLACK 2026.png", alt: "T-shirt Mockup 1" },
    { id: 2, src: "/004 Realistic Oversized T-Shirt Mockups - BLACK 2026.png", alt: "T-shirt Mockup 2" },
    { id: 3, src: "/005 Realistic Oversized T-Shirt Mockups - BLACK 2026.png", alt: "T-shirt Mockup 3" },
    { id: 4, src: "/006 Realistic Oversized T-Shirt Mockups - BLACK 2026.png", alt: "T-shirt Mockup 4" },
    { id: 5, src: "/007 Realistic Oversized T-Shirt Mockups - BLACK 2026.png", alt: "T-shirt Mockup 5" },
    { id: 6, src: "/06 Realistic Oversized T-Shirt Mockups - BLACK 2026.png", alt: "T-shirt Mockup 6" },
    { id: 7, src: "/003 Realistic Oversized T-Shirt Mockups - BLACK 2026.png", alt: "T-shirt Mockup 7" },
    { id: 8, src: "/004 Realistic Oversized T-Shirt Mockups - BLACK 2026.png", alt: "T-shirt Mockup 8" },
    { id: 9, src: "/005 Realistic Oversized T-Shirt Mockups - BLACK 2026.png", alt: "T-shirt Mockup 9" },
    { id: 10, src: "/006 Realistic Oversized T-Shirt Mockups - BLACK 2026.png", alt: "T-shirt Mockup 10" },
  ];

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-gray-100">
      <main className="flex flex-col gap-10 items-center text-center">
        <h1 className="text-4xl font-semibold text-black">BLACK 2026 T-Shirt Collection</h1>
        <p className="text-lg text-gray-700 mb-8">Check out our exclusive oversized t-shirt designs, now available for R399.99 each.</p>

        {/* Image grid for t-shirt mockups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <Image
                src={product.src}
                alt={product.alt}
                width={300}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="mt-4 text-xl font-semibold text-black">R399.99</p>
              <button
                onClick={() => addToCart(product.id)}
                className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-12">
          <p className="text-xl text-gray-700">
            Items in Cart: <strong>{useCart().cart.length}</strong>
          </p>
          {useCart().cart.length > 0 && (
            <a
              href="#checkout"
              className="mt-4 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </a>
          )}
        </div>
      </main>

      <footer className="mt-20 text-center text-gray-600">
        <p>&copy; 2026 BLACK Clothing. All rights reserved.</p>
      </footer>
    </div>
  );
}
