import Navbar from "@global/Navbar";
import HomeBanner from "@local/home/home-banner";
import Product from "@local/home/home-product";
import HomeSubscribe from "@local/home/home-subscribe";

export default function Home() {
  return (
    <main className="w-full max-h-[847px] mb-96 bg-[#1E2832] bg-opacity-5">
      <div className="">
        <HomeBanner />
      </div>

      <div className="bg-white pt-20">
        <HomeSubscribe />
        <Product />
      </div>
    </main>
  );
}
