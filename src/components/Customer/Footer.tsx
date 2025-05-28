"use client";


export default function Footer() {


  return (
    <>
     {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-10 text-sm text-center text-gray-600">
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
        <p>&copy;2024 AquaLife. All rights reserved.</p>
      </footer>
    
    </>
  );
}
