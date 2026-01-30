"use client";

import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const navLinks = [
  {
    title: 'Electronics',
    href: '/electronics',
    subcategories: [
      { title: 'Phones', href: '/electronics/phones' },
      { title: 'Laptops', href: '/electronics/laptops' },
    ],
  },
  {
    title: 'Clothing',
    href: '/clothing',
    subcategories: [
      { title: 'Men', href: '/clothing/men' },
      { title: 'Women', href: '/clothing/women' },
    ],
  },
];
  return (
    <>
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 flex items-center space-x-1"
          >
            <Image
              src="/image/logo/logo.png" 
              width={100}
              height={100}
              alt="logo"
              className="h-30 w-30 object-contain p-2"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4 text-sm text-gray-700 font-semibold">
            <Link href="/" className="hover:text-deepsky ">Home</Link>
            <Link href="/shop" className="hover:text-deepsky ">Shop</Link>
            <Link href="/community" className="hover:text-deepsky ">Community</Link>
            <Link href="/learn" className="hover:text-deepsky ">Learn</Link>
          </div>
        </div>

        {/* Middle: Search */}
        <div className="relative w-64 hidden sm:block ">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-sky-700" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-full border border-none rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-sky-700 text-sky-700"
          />
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-3 font-semibold">
          <button className="bg-sky-950 hover:bg-deepsky  text-white px-8 py-2 rounded-md text-sm ">
            Sell
          </button>
          <button className="border border-none hover:bg-deepsky hover:text-white text-gray-800 px-4 py-2 rounded-md text-sm ">
            Sign up
          </button>
        </div>
      </div>
    </nav>
   <nav className="w-full bg-white shadow-sm border-b flex justify-center">
  <ul className="flex space-x-6 p-4 relative z-10">
    {navLinks.map((cat) => (
      <li key={cat.title} className="relative group">
        <Link href={cat.href} className="hover:text-blue-600">
          {cat.title}
        </Link>

        {cat.subcategories?.length > 0 && (
          <ul className="absolute left-0 top-full mt-1 w-48 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200">
            {cat.subcategories.map((sub) => (
              <li key={sub.title}>
                <Link
                  href={sub.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {sub.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
</nav>

    </>  
);
}
