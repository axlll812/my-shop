"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="soft-card overflow-hidden group">
            <Link href={`/product/${product.id}`} className="block relative">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />

                {/* иконка избранного */}
                <div
                    onClick={(e) => {
                        e.preventDefault();
                        // TODO: handle favorite logic
                    }}
                    className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-2 shadow cursor-pointer hover:bg-red-50 transition z-10"
                >
                    ❤️
                </div>
            </Link>

            <div className="p-6">
                <Link href={`/product/${product.id}`}>
                    <h3 className="font-semibold text-lg mb-2 hover:text-red-700 transition">
                        {product.name}
                    </h3>
                </Link>

                <p className="text-red-700 font-bold text-xl mb-4">
                    {product.price} €
                </p>

                <AddToCartButton product={product} />
            </div>
        </div>
    );
}