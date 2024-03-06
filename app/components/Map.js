"use client"
import Image from 'next/image';
import mapPicture from '../../public/assets/img/Map/Map.PNG';
import { motion } from 'framer-motion';


const Map = () => {
  return (
    <div className="w-5/6 md:w-full my-10 flex flex-col justify-center">
      <div className="relative">
        <h2 className="uppercase text-4xl p-6 relative">RETROUVER ?</h2>
        <span className="absolute -top-6 left-0 m-4 font-Kristi text-5xl text-black/60 capitalize">
          Comment <span className="normal-case">nous</span>
        </span>
      </div>

      <div className="flex flex-row md:flex-col gap-10 md:gap-2">
        <Image
          src={mapPicture}
          alt="Capture d'écran de la carte"
          className="w-3/4 md:w-screen md:m-0 md:p-0 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
        />
        <div className="w-1/4 md:w-screen md:m-auto">
          <motion.a
            href="https://maps.app.goo.gl/jgW8R3P9bdiR5MMEA"
            tabIndex="0"
            aria-label="Accéder à Google Maps"
            target="_blank"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            Google Maps
          </motion.a>
          <motion.a
            href="44.0441922859558, -0.5360925317668931"
            tabIndex="0"
            aria-label="Accéder à Google Maps"
            target="_blank"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            GPS
          </motion.a>
          <motion.a
            href="https://maps.app.goo.gl/jgW8R3P9bdiR5MMEA"
            tabIndex="0"
            aria-label="Accéder à Google Maps"
            target="_blank"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            Google Maps
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Map;
