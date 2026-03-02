"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import Link from "next/link";

export default function AddToCartButton({ product }: { product: Product }) {
    const { cart, addToCart } = useCart();
    const inCart = cart.some((item) => item.id === product.id);

    if (inCart) {
        return (
            <Link
                href="/cart"
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg shadow-md transition transform active:scale-95"
            >
                ✓ В корзине
            </Link>
        );
    }

    return (
        <button
            onClick={() => addToCart(product)}
            className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg shadow-md transition transform active:scale-95"
        >
            В корзину
        </button>
    );
}
