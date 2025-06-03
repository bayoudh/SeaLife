"use client";

import Link from "next/link";


export default function Footer() {


  return (
    <>
     {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-10 text-sm text-center text-gray-600">
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          <Link href="about" className="hover:underline">About Us</Link>
          <Link href="contact" className="hover:underline">Contact</Link>
          <Link href="faq" className="hover:underline">FAQ</Link>
          <Link href="terms" className="hover:underline">Terms of Service</Link>
          <Link href="privacy" className="hover:underline">Privacy Policy</Link>
        </div>
        <p>&copy;2025 SeaLife. All rights reserved.</p>
      </footer>
    
    </>
  );
}
