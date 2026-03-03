export default function Features() {
    return (
        <section className="bg-[#f5efe6] py-10 border-y border-black/10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center px-6">
                <div>
                    <div className="text-3xl mb-2">❤️</div>
                    <h3 className="font-semibold">Ручная работа</h3>
                    <p className="text-sm text-gray-600">Эксклюзивные изделия</p>
                </div>

                <div>
                    <div className="text-3xl mb-2">🚚</div>
                    <h3 className="font-semibold">Быстрая доставка</h3>
                    <p className="text-sm text-gray-600">По всей России</p>
                </div>

                <div>
                    <div className="text-3xl mb-2">🛡</div>
                    <h3 className="font-semibold">Гарантия качества</h3>
                    <p className="text-sm text-gray-600">100% надёжность</p>
                </div>
            </div>
        </section>
    );
}