import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="bg-[#f5efe6] text-[#3b2a1a] min-h-screen flex flex-col">
            <Header />

            <section className="py-16 flex-grow">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-8 text-center text-red-800">О нашем магазине</h1>

                    <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e5d8c3]">
                            <h2 className="text-2xl font-semibold mb-4 text-[#4a3a2a]">Наша История</h2>
                            <p className="mb-4 leading-relaxed">
                                Мы начали свой путь в 2015 году как небольшая семейная мастерская. Нашей мечтой было вернуть ту самую атмосферу праздника, которую мы все чувствовали в детстве, когда доставали из коробок хрупкие стеклянные игрушки.
                            </p>
                            <p className="leading-relaxed">
                                Сегодня наш магазин — это место, где традиции встречаются с современным мастерством. Каждая игрушка в нашем каталоге отобрана вручную или создана нашими мастерами.
                            </p>
                        </div>
                        <div className="relative aspect-square bg-[#e5d8c3] rounded-2xl overflow-hidden flex items-center justify-center text-6xl shadow-inner">
                            ✨🎄✨
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-[#e5d8c3] mb-12">
                        <h2 className="text-2xl font-semibold mb-6 text-center text-[#4a3a2a]">Почему выбирают нас?</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-3xl mb-3">🎨</div>
                                <h3 className="font-bold mb-2">Ручная работа</h3>
                                <p className="text-sm">Многие наши изделия расписаны художниками вручную.</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-3">🛡️</div>
                                <h3 className="font-bold mb-2">Качество</h3>
                                <p className="text-sm">Используем только безопасные и долговечные материалы.</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-3">📦</div>
                                <h3 className="font-bold mb-2">Бережная упаковка</h3>
                                <p className="text-sm">Ваши заказы доедут в целости и сохранности.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center italic text-[#6d5b4a]">
                        "Мы верим, что каждая ёлочная игрушка — это не просто украшение, а маленькая история, которая передается из поколения в поколение."
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
