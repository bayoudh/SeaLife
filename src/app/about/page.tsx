import Footer from "@/components/Customer/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#1D3557] mb-4">About SeaLife</h1>
        <p className="text-lg text-gray-600">
          At SeaLife, we believe aquarium ownership should be as immersive, smart, and effortless as the underwater worlds we help you create.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">Our Vision</h2>
          <p className="text-gray-700">
            We are redefining aquatic experiences through sustainable innovation, elegant design, and smart technology. From first-time hobbyists to seasoned aquarists, we empower everyone to build thriving aquatic ecosystems with ease.
          </p>
        </div>
        <Image
          src="/images/about-vision.jpg"
          alt="SeaLife Smart Aquarium"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <Image
          src="/images/about-innovation.jpg"
          alt="SeaLife Innovation"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">What Sets Us Apart</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Smart aquariums with automated monitoring & maintenance</li>
            <li>Eco-friendly systems & responsibly sourced aquatic life</li>
            <li>Elegant, minimalist aquarium design for any space</li>
            <li>Expert support, guidance, and community engagement</li>
          </ul>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">Join the SeaLife Community</h2>
        <p className="text-gray-700 mb-6">
          Whether you're enhancing your home, office, or business, SeaLife offers a world of wonder beneath the surface. Discover how our innovation brings your underwater vision to life.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#4FC3F7] text-white px-6 py-3 rounded-full hover:bg-[#1D3557] transition"
        >
          Get in Touch
        </a>
      </section>
        <Footer/>
    </main>
  
  );
}
