import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DeliveryPage() {
    return (
        <main className="bg-[#f5efe6] text-[#3b2a1a] min-h-screen flex flex-col">
            <Header />

            <section className="py-16 flex-grow">
                <div className="max-w-4xl mx-auto px-6 text-center mb-10">
                    <h1 className="text-4xl font-bold text-red-800">Доставка и оплата</h1>
                    <p className="mt-4 text-[#6d5b4a]">Мы заботимся о том, чтобы ваши подарки были доставлены вовремя и в сохранности.</p>
                </div>

                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e5d8c3]">
                        <div className="text-4xl text-red-600 mb-4">🚚</div>
                        <h2 className="text-2xl font-bold mb-4">Способы доставки</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 font-bold">✓</span>
                                <div>
                                    <h3 className="font-semibold">Курьерская доставка по городу</h3>
                                    <p className="text-sm text-[#6d5b4a]">Доставка до вашей двери в течение 1-2 дней. Бесплатно при заказе от 3000₽.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 font-bold">✓</span>
                                <div>
                                    <h3 className="font-semibold">Пункты выдачи СДЭК и Boxberry</h3>
                                    <p className="text-sm text-[#6d5b4a]">Более 500 пунктов по всей стране. Срок доставки 3-7 дней.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 font-bold">✓</span>
                                <div>
                                    <h3 className="font-semibold">Почта России</h3>
                                    <p className="text-sm text-[#6d5b4a]">Доставка в самые отдаленные уголки страны.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e5d8c3]">
                        <div className="text-4xl text-yellow-600 mb-4">💳</div>
                        <h2 className="text-2xl font-bold mb-4">Способы оплаты</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 font-bold">✓</span>
                                <div>
                                    <h3 className="font-semibold">Банковской картой онлайн</h3>
                                    <p className="text-sm text-[#6d5b4a]">Безопасная оплата через шлюз вашего банка (SberPay, Tinkoff Pay, и др.)</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 font-bold">✓</span>
                                <div>
                                    <h3 className="font-semibold">Система Быстрых Платежей (СБП)</h3>
                                    <p className="text-sm text-[#6d5b4a]">Мгновенная оплата по QR-коду.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 font-bold">✓</span>
                                <div>
                                    <h3 className="font-semibold">Оплата при получении</h3>
                                    <p className="text-sm text-[#6d5b4a]">Доступна при доставке курьером или в пунктах выдачи СДЭК.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6 bg-red-50 p-8 rounded-2xl border border-red-100 text-center">
                    <h3 className="text-xl font-bold text-red-900 mb-2">Особые условия упаковки</h3>
                    <p className="text-red-800">Все хрупкие стеклянные изделия упаковываются вручную в несколько слоев противоударной пленки и жесткую картонную коробку. Мы гарантируем целостность товара при доставке!</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
