"use client"
import { useState } from 'react';
import { sealifeData } from '@/data/sealife';
import { Sealife } from '@/types/sealife';
import type { NextPage } from 'next';
import Image from 'next/image';

const SealifePage: NextPage = () => {
  const [selectedSpecies, setSelectedSpecies] = useState<Sealife | null>(null);

  const getStatusColor = (status: string): string => {
    const colors: Record<string, string> = {
      'Endangered': 'text-red-600',
      'Vulnerable': 'text-orange-600',
      'Least Concern': 'text-green-600',
      'Varies by species': 'text-yellow-600',
    };
    return colors[status] || 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient">
      {/* Header */}
      <header className="bg-gradient from-ocean  text-white py-16 px-4 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-500 animate-fade-in">
            🌊 Marine Life Encyclopedia
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Discover the fascinating creatures of our oceans
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sealifeData.map((species) => (
            <div key={species.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 
           hover:shadow-xl hover:-translate-y-1 group cursor-pointer" onClick={() => setSelectedSpecies(species)}>
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={species.imageUrl}
                  alt={species.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full 
           text-sm font-semibold text-gray-800 shadow-md">
                  {species.conservationStatus}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  {species.name}
                </h2>
                <p className="text-sm text-gray-500 italic mb-3">
                  {species.scientificName}
                </p>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {species.description}
                </p>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSpecies(species);
                  }}
                  className="bg-gradient from-ocean  text-cyan-400 font-bold py-2 px-6 rounded-full 
           hover:opacity-90 transition-all duration-300 transform hover:scale-105 w-full group-hover:shadow-lg"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedSpecies && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setSelectedSpecies(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedSpecies.imageUrl}
                alt={selectedSpecies.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedSpecies(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full 
                         flex items-center justify-center pb-1 text-2xl text-gray-600 hover:text-gray-900 
                         transition-colors shadow-lg"
                aria-label="Close modal"
              >
                ×
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient from-black/80  p-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {selectedSpecies.name}
                </h2>
                <p className="text-lg text-gray-200 italic">
                  {selectedSpecies.scientificName}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {selectedSpecies.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Habitat */}
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-ocean mb-2 flex items-center">
                    <span className="mr-2">🌍</span> Habitat
                  </h3>
                  <p className="text-gray-700">{selectedSpecies.habitat}</p>
                </div>

                {/* Diet */}
                <div className="bg-green-50 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-green-600 mb-2 flex items-center">
                    <span className="mr-2">🍽️</span> Diet
                  </h3>
                  <p className="text-gray-700">{selectedSpecies.diet}</p>
                </div>

                {/* Conservation Status */}
                <div className="bg-yellow-50 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-yellow-600 mb-2 flex items-center">
                    <span className="mr-2">⚠️</span> Conservation Status
                  </h3>
                  <p className={`font-semibold ${getStatusColor(selectedSpecies.conservationStatus)}`}>
                    {selectedSpecies.conservationStatus}
                  </p>
                </div>

                {/* Fun Fact */}
                <div className="bg-purple-50 p-4 rounded-xl md:col-span-2">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2 flex items-center">
                    <span className="mr-2">✨</span> Fun Fact
                  </h3>
                  <p className="text-gray-700">{selectedSpecies.funFact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SealifePage;