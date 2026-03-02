"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
    const { cart, removeFromCart, total } = useCart();

    return (
        <main className="bg-[#f5efe6] text-[#3b2a1a] min-h-screen flex flex-col">
            <Header />

            <section className="py-16 flex-grow">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-10 text-center text-red-800">Ваша корзина</h1>

                    {cart.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-[#e5d8c3]">
                            <div className="text-6xl mb-6">🛒</div>
                            <p className="text-xl text-[#6d5b4a] mb-8">В корзине пока пусто</p>
                            <Link href="/catalog">
                                <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-xl transition shadow-lg">
                                    Перейти в каталог
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Items List */}
                            <div className="lg:col-span-2 space-y-4">
                                {cart.map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-[#e5d8c3] flex items-center gap-4">
                                        <Link href={`/product/${item.id}`} className="relative w-24 h-24 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0 block hover:opacity-80 transition-opacity">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </Link>
                                        <div className="flex-grow">
                                            <Link href={`/product/${item.id}`}>
                                                <h3 className="font-bold text-lg hover:text-red-700 transition-colors">{item.name}</h3>
                                            </Link>
                                            <p className="text-red-700 font-semibold">{item.price} €</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(index)}
                                            className="text-gray-400 hover:text-red-600 transition p-2"
                                            title="Удалить"
                                        >
                                            <span className="text-xl">❌</span>
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Summary */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e5d8c3] h-fit sticky top-8">
                                <h2 className="text-2xl font-bold mb-6">Итого</h2>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between border-b border-[#e5d8c3] pb-2">
                                        <span>Товары:</span>
                                        <span>{cart.length} шт.</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-xl text-red-800 pt-2">
                                        <span>К оплате:</span>
                                        <span>{total.toFixed(2)} €</span>
                                    </div>
                                </div>
                                <button className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-bold shadow-xl transition transform hover:scale-[1.02]">
                                    Оформить заказ
                                </button>
                                <p className="text-xs text-center text-[#9a8b7a] mt-4 italic">
                                    * Будет применена бесплатная доставка от 3000₽
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
