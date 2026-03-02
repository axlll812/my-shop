import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#8b1e1e] text-white py-8 text-center text-sm font-light">
            <div className="mb-4 flex justify-center gap-4">
                <Link href="/catalog" className="hover:underline">Каталог</Link>
                <span>·</span>
                <Link href="/about" className="hover:underline">О нас</Link>
                <span>·</span>
                <Link href="/delivery" className="hover:underline">Доставка</Link>
                <span>·</span>
                <Link href="/contacts" className="hover:underline">Контакты</Link>
            </div>
            <div className="opacity-70">
                © 2024 Магазин Ёлочных Игрушек
            </div>
        </footer>
    );
}