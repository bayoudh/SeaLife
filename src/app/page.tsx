import Image from 'next/image';
import Footer from '@/components/Customer/Footer'
const featuredFish = [
  { name: 'Betta Fish', desc: 'Vibrant and unique', src: '/images/betta.jpg' },
  { name: 'Neon Tetras', desc: 'Peaceful community fish', src: '/images/neon.jpg' },
  { name: 'Angelfish', desc: 'Elegant and graceful', src: '/images/angel.jpg' },
  { name: 'Goldfish', desc: 'Classic aquarium favorite', src: '/images/goldfish.jpg' },
];

const popularProducts = [
  { name: 'Aquarium Starter Kit', desc: 'Everything you need to start', src: '/images/starter.jpg' },
  { name: 'Fish Food', desc: 'Nutritious food for healthy fish', src: '/images/food.jpg' },
  { name: 'Aquarium Decorations', desc: 'Enhance your aquarium’s beauty', src: '/images/decor.jpg' },
  { name: 'Water Conditioner', desc: 'Maintain water quality', src: '/images/water.jpg' },
];

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-900 text-white py-12 px-4 max-w-6xl mx-auto rounded-md ">
        <div className="absolute inset-0">
          <Image src="/images/hero.jpg" alt="Underwater scene" layout="fill" objectFit="cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover the underwater world</h1>
          <p className="mb-6 text-lg">Explore a wide variety of aquatic life and products for your aquarium.</p>
          <button className="bg-sky-950 hover:bg-sky-400 text-white px-6 py-3 rounded-md font-semibold">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Fish */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Featured Fish</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredFish.map((fish, index) => (
            <div key={index} className="text-center">
              <div className="w-full h-48 relative mb-2">
                <Image src={fish.src} alt={fish.name} layout="fill" objectFit="cover" className="rounded-md" />
              </div>
              <p className="font-semibold">{fish.name}</p>
              <p className="text-sm text-gray-500">{fish.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Popular Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {popularProducts.map((product, index) => (
            <div key={index} className="text-center">
              <div className="w-full h-48 relative mb-2">
                <Image src={product.src} alt={product.name} layout="fill" objectFit="cover" className="rounded-md" />
              </div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm text-gray-500">{product.desc}</p>
            </div>
          ))}
        </div>
      </section>
          <Footer/>
     
    </div>
  );
}
