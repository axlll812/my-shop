"use client";

import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const { addToCart } = useCart();

    return (
        <div className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
            <button onClick={() => addToCart(product)}>
                В корзину
            </button>
        </div>
    );
}