import Image from "next/image";

export default function SaleBanner() {
    return (
        <section className="relative overflow-hidden mt-20">
            {/* Фоновый градиент */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-700 to-red-500" />
            {/* Лёгкий тёмный overlay для контраста */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Декоративный blur-элемент */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="relative section-container text-white py-24 text-center">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-xl">
                    Новогодняя Распродажа
                </h2>
                <p className="text-xl md:text-2xl mb-10 text-white/90">
                    Скидки до <span className="font-bold">50%</span> только до конца месяца
                </p>
                <button className="bg-green-600 px-10 py-4 rounded-2xl text-lg font-semibold 
                       hover:bg-green-700 active:scale-95 
                       transition-all duration-300 shadow-2xl">
                    Получить скидку
                </button>
            </div>
        </section>
    );
}















// <section className="relative overflow-hidden my-20">
//     <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600" />

//     <div className="relative section-container text-white py-20 text-center">
//         <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">
//             Новогодняя Распродажа
//         </h2>

//         <p className="text-xl mb-8">Скидки до 50%</p>

//         <button className="bg-green-700 px-8 py-4 rounded-xl text-lg hover:bg-green-800 transition shadow-xl">
//             Получить скидку
//         </button>
//     </div>
// </section>