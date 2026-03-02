import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        notFound();
    }

    return (
        <main className="bg-[#f5efe6] text-[#3b2a1a] min-h-screen flex flex-col">
            <Header />

            <section className="py-16 flex-grow">
                <div className="max-w-6xl mx-auto px-6">
                    <Link href="/catalog" className="text-[#6d5b4a] hover:text-[#3b2a1a] transition mb-8 inline-block">
                        &larr; Вернуться в каталог
                    </Link>

                    <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-sm">
                        <div className="relative aspect-square rounded-2xl overflow-hidden soft-card flex items-center justify-center p-8 bg-[#f5efe6]/50">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={500}
                                height={500}
                                className="object-contain hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="flex flex-col justify-center">
                            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                            <p className="text-3xl text-red-700 font-bold mb-6">{product.price} €</p>

                            <div className="mb-8 text-[#6d5b4a] leading-relaxed">
                                <p>
                                    Прекрасный {product.name.toLowerCase()} для украшения вашего дома.
                                    Идеально подойдет для создания праздничной атмосферы и уюта.
                                </p>
                                <ul className="list-disc list-inside mt-4 space-y-2">
                                    <li>Материал: Высококачественное стекло/пластик</li>
                                    <li>Высокая прочность и долговечность</li>
                                    <li>Уникальный дизайн</li>
                                </ul>
                            </div>

                            <div className="w-full max-w-xs">
                                <AddToCartButton product={product} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}
