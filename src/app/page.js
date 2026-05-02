
import Image from "next/image";
import Banner from "../components/Banner";
import FeaturedBook from "../components/FeatureBook";

export default function Home() {
  return (
    <div>
       <Banner></Banner>
       <FeaturedBook></FeaturedBook>
    </div>
  );
}
