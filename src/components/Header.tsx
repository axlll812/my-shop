"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
    const { cart } = useCart();

    return (
        <header className="bg-[#f5efe6] border-b border-[#e5d8c3]">
            <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                <Link href="/" className="flex items-center gap-3">
                    <span className="text-2xl">🎄</span>
                    <span className="font-bold text-lg">
                        Магазин <span className="text-red-700">Ёлочных Игрушек</span>
                    </span>
                </Link>

                <nav className="hidden md:flex gap-8 font-medium">
                    <Link href="/catalog">Каталог</Link>
                    <Link href="/about">О нас</Link>
                    <Link href="/delivery">Доставка</Link>
                    <Link href="/contacts">Контакты</Link>
                </nav>

                <Link href="/cart" className="relative cursor-pointer hover:scale-110 transition-transform">
                    🛒
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                            {cart.length}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    );
}