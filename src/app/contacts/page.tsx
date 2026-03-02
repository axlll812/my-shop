import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactsPage() {
    return (
        <main className="bg-[#f5efe6] text-[#3b2a1a] min-h-screen flex flex-col">
            <Header />

            <section className="py-16 flex-grow">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-10 text-center text-red-800">Контакты</h1>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e5d8c3]">
                            <h2 className="text-2xl font-bold mb-6 text-[#4a3a2a]">Свяжитесь с нами</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-2xl mt-1">📍</div>
                                    <div>
                                        <h3 className="font-bold">Наш адрес:</h3>
                                        <p className="text-[#6d5b4a]">г. Москва, ул. Праздничная, д. 25, офис 12</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-2xl mt-1">📞</div>
                                    <div>
                                        <h3 className="font-bold">Телефон:</h3>
                                        <p className="text-[#6d5b4a] font-medium">+7 (900) 123-45-67</p>
                                        <p className="text-xs text-[#a08b76]">Пн-Пт: 10:00 - 19:00</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-2xl mt-1">✉️</div>
                                    <div>
                                        <h3 className="font-bold">Email:</h3>
                                        <p className="text-red-700 font-medium">hello@newyearshop.ru</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="text-2xl mt-1">📱</div>
                                    <div>
                                        <h3 className="font-bold">Наши социальные сети:</h3>
                                        <div className="flex gap-4 mt-2">
                                            <span className="text-sm bg-[#f5efe6] px-3 py-1 rounded-full text-red-700 cursor-pointer hover:bg-red-50">Telegram</span>
                                            <span className="text-sm bg-[#f5efe6] px-3 py-1 rounded-full text-red-700 cursor-pointer hover:bg-red-50">VKontakte</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pt-6 border-t border-[#e5d8c3]">
                                <h3 className="font-bold mb-4">Написать нам в один клик:</h3>
                                <button className="w-full bg-[#3b2a1a] text-[#f5efe6] py-3 rounded-xl font-bold hover:bg-[#4a3a2a] transition-all">
                                    Открыть форму обратной связи
                                </button>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-full min-h-[400px] bg-[#e5d8c3] rounded-2xl overflow-hidden flex flex-col items-center justify-center relative shadow-inner border border-[#d5c8b3]">
                            <div className="text-6xl mb-4">📍</div>
                            <p className="text-lg font-bold text-[#4a3a2a]">Интерактивная карта</p>
                            <p className="text-sm text-[#8a7a6a] mt-2">Здесь будет карта проезда</p>

                            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl text-xs">
                                <b>Как добраться:</b><br />
                                5 минут от метро "Снежная"<br />
                                Бесплатная парковка для клиентов
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
