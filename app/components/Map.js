'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GMapPic from '../../public/assets/img/icons/carte.png';
import wazePic from '../../public/assets/img/icons/waze.png';

const latitude = 44.04421545064293;
const longitude = -0.5360549779704035;

function openWaze() {
  // Coordonnées géographiques de l'emplacement

  // Générer l'URL pour Waze avec les coordonnées
  const wazeUrl = `https://www.waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;

  // Ouvrir le lien dans une nouvelle fenêtre
  window.open(wazeUrl, '_blank');
}

const Map = () => {
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <>
      <div className="w-[90%] justify-center mx-auto lg:w-full lg:px-2 flex lg:order-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.9032720412156!2d-0.5360818!3d44.044053500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55cbc4c66f0e91%3A0xd6b78361f271c301!2sLe%20Caf%C3%A9%20de%20la%20place!5e0!3m2!1sfr!2sfr!4v1710159788533!5m2!1sfr!2sfr"
          width="1200"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte géographique du restaurant"
        ></iframe>
      </div>
      <div className="hidden lg:flex w-1/4 flex-col justify-center items-center lg:w-full lg:flex-row lg:gap-10 lg:justify-center lg:place-items-center lg:item-center lg:order-1 lg:mb-8">
        <p>Liens GPS :</p>
        <motion.a
          href={googleMapsUrl}
          tabIndex="0"
          aria-label="Accéder à Google Maps"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <Image src={GMapPic} alt="Logo de Google Maps" />
        </motion.a>
        <motion.a
          tabIndex="0"
          aria-label="Accéder à Waze"
          target="_blank"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={openWaze}
          className="w-6"
        >
          <Image src={wazePic} alt="Logo de Waze" />
        </motion.a>
      </div>
    </>
  );
};

export default Map;
