import Image from "next/image";

export default function ProductCard({ product }: any) {
    return (
        <div className="soft-card overflow-hidden group">
            <div className="relative">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />

                {/* иконка избранного */}
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-2 shadow">
                    ❤️
                </div>
            </div>

            <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                    {product.name}
                </h3>

                <p className="text-red-700 font-bold text-xl mb-4">
                    {product.price} €
                </p>

                <button className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg shadow-md transition">
                    В корзину
                </button>
            </div>
        </div>
    );
}