"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Cart() {
    const { cart, removeFromCart, total } = useCart();

    return (
        <div className="cart">
            <h2>Корзина</h2>

            {cart.map((item, index) => (
                <div key={index}>
                    <Link href={`/product/${item.id}`}>
                        {item.name}
                    </Link> — {item.price} €
                    <button onClick={() => removeFromCart(index)}>
                        ❌
                    </button>
                </div>
            ))}

            <h3>Итого: {total.toFixed(2)} €</h3>
        </div>
    );
}