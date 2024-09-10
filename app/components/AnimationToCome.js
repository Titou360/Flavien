'use client';
import { useState } from 'react';
import data from '../../public/animationsData.json';
import Image from 'next/image';

const Slider = () => {
  const { slider } = data; // Récupération des données du slider depuis le fichier JSON
  const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre l'image affichée

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slider.length - 1 ? 0 : prevIndex + 1));
  };

  // Fonction pour revenir à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slider.length - 1 : prevIndex - 1));
  };

  // Fonction pour sélectionner directement une image via les dots
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Flèche gauche */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full z-10"
      >
        &#10094;
      </button>

      {/* Affichage de l'image du slider */}
      {slider.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            layout="fill" // Utilisez `layout="fill"` pour occuper tout l'espace parent
            objectFit="cover" // Pour obtenir l'effet "object-cover"
            className="pointer-events-none"
          />
          {/* <a
            href={slide.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-5 left-5 bg-white bg-opacity-75 text-black py-1 px-4 rounded-lg"
          >
            {slide.title}
          </a> */}
        </div>
      ))}

      {/* Flèche droite */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full z-10"
      >
        &#10095;
      </button>

      {/* Dots de pagination */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slider.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gradient-to-r from-orange-600 to-orange-500' : 'bg-white'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
