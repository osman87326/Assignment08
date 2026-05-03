import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden">
      
      {/* Top Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand Section */}
          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Book Nest Logo"
                width={60}
                height={60}
                className="object-contain dark:brightness-200"
              />

              <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">
                Book Nest
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
              Browse our collection of Story, Tech, and Science books.
              Find your next great read today.
            </p>

          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-5 uppercase tracking-wide">
              Product
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">

              <li>
                <Link
                  href="/all-books"
                  className="hover:text-black dark:hover:text-white transition duration-200"
                >
                  All Books
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="hover:text-black dark:hover:text-white transition duration-200"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  href="/new-arrivals"
                  className="hover:text-black dark:hover:text-white transition duration-200"
                >
                  New Arrivals
                </Link>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-5 uppercase tracking-wide">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">

              <li>
                <Link
                  href="/about"
                  className="hover:text-black dark:hover:text-white transition duration-200"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-black dark:hover:text-white transition duration-200"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="hover:text-black dark:hover:text-white transition duration-200"
                >
                  Terms
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="hover:text-black dark:hover:text-white transition duration-200"
                >
                  Privacy Policy
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-5 uppercase tracking-wide">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>Email: kaziosman873@gmail.com</li>
              <li>Phone: +880 1871211687</li>
              <li>Location: Dhaka, Bangladesh</li>
            </ul>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm">

              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              >
                Facebook
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              >
                Instagram
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              >
                Twitter
              </Link>

            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-5">

            <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-wide">
              Start Creating
            </h3>

            <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
              Read more. Learn more. Live more.
            </p>

            <Link
              href="/register"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full
              bg-black text-white dark:bg-white dark:text-black
              text-sm font-medium transition-all duration-300
              hover:scale-105 hover:shadow-lg hover:shadow-black/10
              dark:hover:shadow-white/10"
            >
              Get Started
            </Link>

          </div>

        </div>

        {/* Bottom Footer */}
<div className="mt-10 border-t border-black/10 pt-6">

  <div className="flex flex-col md:flex-row items-center justify-between gap-6">

    {/* Left */}
    <p className="text-sm md:text-base font-medium text-black dark:text-white text-center md:text-left">
      ©2026 Book Nest. All rights reserved.
    </p>

    {/* Center Logo */}
    <div className="flex items-center justify-center">
      <Image
        src="/images/logo.png"
        alt="Book Nest Logo"
        width={55}
        height={55}
        className="object-contain dark:brightness-200"
      />
    </div>

    {/* Right */}
    <div className="flex items-center gap-6 text-sm md:text-base font-medium text-black dark:text-white">

      <Link
        href="/privacy"
        className="hover:opacity-70 transition"
      >
        Privacy Policy.
      </Link>

      <Link
        href="/terms"
        className="hover:opacity-70 transition"
      >
        Terms of Use.
      </Link>

    </div>

  </div>

</div>

    </div>
  </footer>
  );
};

export default Footer;