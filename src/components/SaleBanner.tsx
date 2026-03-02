import Image from "next/image";

export default function SaleBanner() {
    return (
        <section className="relative overflow-hidden my-20">
            <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600" />

            <div className="relative section-container text-white py-20 text-center">
                <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">
                    Новогодняя Распродажа
                </h2>

                <p className="text-xl mb-8">Скидки до 50%</p>

                <button className="bg-green-700 px-8 py-4 rounded-xl text-lg hover:bg-green-800 transition shadow-xl">
                    Получить скидку
                </button>
            </div>
        </section>
    );
}