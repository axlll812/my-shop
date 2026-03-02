"use client";

import Image from "next/image";
import Link from "next/link";
export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Фон */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero/hero-bg.png')" }}
            />

            {/* затемнение */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

            <div className="relative section-container py-28 text-white">
                <h1 className="text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
                    Создайте волшебство <br /> на Новый Год!
                </h1>

                <p className="text-xl mb-8 opacity-90">
                    Авторские ёлочные игрушки для вашего праздника
                </p>

                <Link href="/catalog">
                    <button className="bg-green-700 hover:bg-green-800 px-8 py-4 rounded-xl shadow-xl text-lg transition transform hover:scale-105">
                        Перейти в каталог
                    </button>
                </Link>
            </div>
        </section>
    );
}