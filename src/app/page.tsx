import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <main className="bg-[#F5F1E8] text-gray-800">

      {/* HERO */}
      <section className="bg-[#8B1E1E] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Создайте волшебство
              <br />
              на Новый Год 🎄
            </h1>

            <p className="text-lg text-white/80 mb-8">
              Авторские ёлочные игрушки для вашего идеального праздника
            </p>

            <div className="flex gap-4">
              <button className="bg-[#2E6B3F] hover:bg-green-800 transition px-6 py-3 rounded-xl text-lg font-medium shadow-lg">
                В каталог
              </button>

              <button className="border border-white px-6 py-3 rounded-xl text-lg">
                Подробнее
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center text-6xl">
              🎁
            </div>
          </div>

        </div>
      </section>


      {/* FEATURES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-4xl mb-4">🖐️</div>
            <h3 className="text-xl font-semibold mb-2">Ручная работа</h3>
            <p className="text-gray-600">
              Каждая игрушка создаётся с любовью и вниманием к деталям
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
            <p className="text-gray-600">
              Доставим к празднику точно в срок
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
            <p className="text-gray-600">
              Только проверенные материалы и премиальное исполнение
            </p>
          </div>

        </div>
      </section>


      {/* PRODUCTS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Популярные товары
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>


      {/* SALE BANNER */}
      <section className="bg-[#8B1E1E] text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Новогодняя распродажа 🎅
        </h2>
        <p className="text-lg mb-8 text-white/80">
          Скидки до 50% на избранные украшения
        </p>
        <button className="bg-[#2E6B3F] px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-green-800 transition">
          Смотреть акции
        </button>
      </section>


      {/* CART */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Cart />
        </div>
      </section>

    </main>
  );
}