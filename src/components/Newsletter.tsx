export default function Newsletter() {
    return (
        <section className="bg-gradient-to-r from-red-800 to-red-600 text-white py-20">
            <div className="section-container text-center">
                <h3 className="text-3xl mb-8">
                    Подписывайтесь на наши новости
                </h3>

                <div className="flex justify-center">
                    <div className="flex bg-white rounded-xl overflow-hidden shadow-lg">
                        <input
                            type="email"
                            placeholder="Введите ваш email"
                            className="px-6 py-3 text-black w-72 outline-none"
                        />
                        <button className="bg-green-700 px-6 hover:bg-green-800 transition">
                            Подписаться
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}