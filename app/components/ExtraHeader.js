'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CocktailIcon from '../../public/assets/img/icons/cocktail.svg';
import DelivryIcon from '../../public/assets/img/icons/panier-repas.png';
import { FacebookIcon, InstagramIcon } from './Icons';
import Link from 'next/link';

const ExtraHeader = () => {
  return (
    <nav id="extraHeader" className="bg-white flex flex-row justify-between py-3">
      <div className="flex flex-row gap-2 ml-2">
        <motion.a
          tabIndex="0"
          aria-label="Translate in French"
          href="#"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          🇫🇷
        </motion.a>
        <motion.a
          tabIndex="0"
          aria-label="Translate in English"
          href="#"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          🇬🇧
        </motion.a>

        <motion.a
          tabIndex="0"
          aria-label="Join us on Instagram"
          href="#"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <InstagramIcon />
        </motion.a>

        <motion.a
          tabIndex="0"
          aria-label="Join us on Facebook"
          href="#"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <FacebookIcon />
        </motion.a>
      </div>
      <div className="flex flex-row gap-6 mr-2">
        <div className="flex selection:justify-center place-items-center ">
          <Link href="#" className="flex flex-row flex-nowrap">
            <Image src={CocktailIcon} alt="Icône d'un coktail" className="w-6" />
            <p className="uppercase">HAPPY HOUR</p>
          </Link>
        </div>

        <div className="flex justify-center place-items-center ">
          <Link href="#" className="flex flex-row flex-nowrap">
            <Image src={DelivryIcon} alt="Icône d'un coktail" className="w-6" />
            <p className="uppercase">Livraison</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ExtraHeader;
