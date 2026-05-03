import Banner from "../components/Banner";
import FeaturedBook from "../components/FeatureBook";

import Categories from "../components/Categories";
import WhyChooseUs from "../components/WhyChooseUs";

import { ToastContainer } from "react-toastify";

import NewsMarquee from "@/components/Marquee";

export default function Home() {
  return (
    <div>

      <Banner />

      <NewsMarquee/>

      <FeaturedBook />

      <Categories />

      <WhyChooseUs />

      <ToastContainer />

    </div>
  );
}
