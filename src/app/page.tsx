import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductsSection from "@/components/ProductsSection";
import SaleBanner from "@/components/SaleBanner";
// import Reviews from "@/components/Reviews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f5efe6] text-[#3b2a1a]">
      <Header />
      <Hero />
      <Features />
      <ProductsSection />
      <SaleBanner />
      {/* <Reviews /> */}
      <Newsletter />
      <Footer />
    </main>
  );
}