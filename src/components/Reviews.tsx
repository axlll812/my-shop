import Image from "next/image";

export default function Offer() {
    return (
        <section className="py-20">
            <div className="section-container">
                <h2 className="text-4xl font-bold text-center mb-14">
                    Наше предложение
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    <p className="mb-2">
                        Тут напишем что мы предлагаем.
                    </p>
                </div>
            </div>
        </section >
    );
}