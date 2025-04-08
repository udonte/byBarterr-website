import Subscribe from "@/components/Faq/Subscribe";
import Categories from "@/components/landing/Categories";
import Deals from "@/components/landing/Deals";
import Hero from "@/components/landing/Hero";
import HotDeals from "@/components/landing/HotDeals";
import Showcase from "@/components/landing/Showcase";
import Swap from "@/components/landing/Swap";

const Home = () => {
  return (
    <div>
      <Hero />
      <Swap />
      <Categories />
      <Showcase />
      <Deals />
      <HotDeals />
      <Subscribe />
    </div>
  );
};

export default Home;
