import Link from "next/link";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function CatalogPage() {
    return (
        <main className="bg-[#f5efe6] text-[#3b2a1a] min-h-screen flex flex-col">
            <Header />
            
            <section className="py-16 flex-grow">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex justify-between items-center mb-10">
                        <h1 className="text-4xl font-bold">Каталог</h1>
                        <p className="text-[#6d5b4a]">Найдено {products.length} товаров</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
