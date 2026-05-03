'use client';

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      
      {/* LEFT */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-books">All Books</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/profile">Profile</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl">
          Book Nest
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-books">All Books</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-3">

        {!user ? (
          <Link href="/signin" className="btn">
            Log In
          </Link>
        ) : (
          <>
            {/* Logout button */}
            <button
              className="btn"
              onClick={() => authClient.signOut()}
            >
              Log Out
            </button>

            {/* Avatar */}
            <Avatar>
              <Avatar.Image
                alt={user?.name || "User"}
                src={user?.image || "/default-avatar.png"}
              />
              <Avatar.Fallback>
                {user?.name?.[0] || "U"}
              </Avatar.Fallback>
            </Avatar>
          </>
        )}

      </div>
    </div>
  );
};

export default Navbar;