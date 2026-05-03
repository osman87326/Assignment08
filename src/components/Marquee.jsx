"use client";

import Marquee from "react-fast-marquee";



const NewsMarquee = () => {
  return (
    <div className="bg-black text-white py-3">

      <Marquee pauseOnHover speed={60}>
         New Arrivals: Atomic Habits |
        Harry Potter Collection |
        Clean Code |
        The Alchemist |
        Special Discount on Memberships |
        Buy 2 Get 1 Free This Week |
      </Marquee>

    </div>
  );
};

export default NewsMarquee;