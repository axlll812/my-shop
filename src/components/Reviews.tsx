import Image from "next/image";

export default function Reviews() {
    return (
        <section className="py-20">
            <div className="section-container">
                <h2 className="text-4xl font-bold text-center mb-14">
                    Что говорят о нас
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="soft-card p-8 flex gap-6 items-center">
                        <Image
                            src="/images/reviews/review1.png"
                            alt=""
                            width={120}
                            height={120}
                            className="rounded-full"
                        />
                        <div>
                            <p className="mb-2">
                                Прекрасные игрушки! Очень довольна покупкой.
                            </p>
                            ⭐⭐⭐⭐⭐
                        </div>
                    </div>

                    <div className="soft-card p-8 flex gap-6 items-center">
                        <Image
                            src="/images/reviews/review2.png"
                            alt=""
                            width={120}
                            height={120}
                            className="rounded-full"
                        />
                        <div>
                            <p className="mb-2">
                                Быстрая доставка и отличное качество.
                            </p>
                            ⭐⭐⭐⭐⭐
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}