"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  price: number;
  images: string[];
  inStock: number;
  category: string;
}

const products: Product[] = [
  {
    _id: "1",
    name: "SeaLife Diving Mask",
    price: 39.99,
    images: ["https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg"],
    inStock: 12,
    category: "Diving",
  },
  {
    _id: "2",
    name: "Underwater Camera Pro",
    price: 299.99,
    images: ["https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg"],
    inStock: 5,
    category: "Cameras",
  },
  {
    _id: "3",
    name: "Waterproof Dry Bag 20L",
    price: 24.99,
    images: ["https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg"],
    inStock: 0,
    category: "Accessories",
  },
  {
    _id: "4",
    name: "SeaLife LED Dive Light",
    price: 59.99,
    images: ["https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg"],
    inStock: 8,
    category: "Lighting",
  },
];

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...products
  .map((p) => p.category)
  .filter((value, index, self) => self.indexOf(value) === index)];


  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12  ">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products match your filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product._id}
              href={`/products/${product._id}`}
              className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white"
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-4 space-y-2">
                <h2 className="font-semibold text-lg truncate">
                  {product.name}
                </h2>

                <p className="text-blue-600 font-bold">
                  ${product.price.toFixed(2)}
                </p>

                <p
                  className={`text-sm font-medium ${
                    product.inStock > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {product.inStock > 0 ? "In stock" : "Out of stock"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
