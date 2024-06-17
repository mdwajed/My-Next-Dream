"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "About",
      path: "/about",
    },
  ];
  const handler = () => {
    router.push("/login");
  };
  return (
    <nav className="bg-red-900 px-8 py-4 text-white flex justify-between items-center">
      <h2>My Next Dream</h2>
      <ul className="flex justify-between items-center gap-6">
        {links.map((link) => (
          <Link
            className={`${pathName === link.path && "text-yellow-400"}`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <button
        onClick={handler}
        className="bg-white text-black px-2 rounded-lg py-1"
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;
