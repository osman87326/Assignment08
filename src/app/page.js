
import Image from "next/image";
import Banner from "../components/Banner";
import FeaturedBook from "../components/FeatureBook";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
       <Banner></Banner>
       <FeaturedBook></FeaturedBook>
       <ToastContainer></ToastContainer>
    </div>
  );
}
