import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductsSection() {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Популярные товары
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}