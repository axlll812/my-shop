"use client";

import { useCart } from "@/context/CartContext";

export default function Cart() {
    const { cart, removeFromCart, total } = useCart();

    return (
        <div className="cart">
            <h2>Корзина</h2>

            {cart.map((item, index) => (
                <div key={index}>
                    {item.name} — {item.price} €
                    <button onClick={() => removeFromCart(index)}>
                        ❌
                    </button>
                </div>
            ))}

            <h3>Итого: {total.toFixed(2)} €</h3>
        </div>
    );
}