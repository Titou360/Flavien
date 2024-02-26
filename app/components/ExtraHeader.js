'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CocktailIcon from '../../public/assets/img/icons/cocktail.svg';
import DelivryIcon from '../../public/assets/img/icons/panier-repas.png';
import { FacebookIcon, InstagramIcon } from './Icons';
import { useTranslation } from 'react-i18next';
import LanguageChanger from "./LanguageChanger"

const ExtraHeader = () => {
  const { t } = useTranslation();

  return (
    <nav id="extraHeader" className="w-5/6 mx-auto flex flex-row justify-between py-3">
      <div className="flex flex-row gap-2 ml-2">
        <LanguageChanger />

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
            <p className="uppercase">{t('Hours')}</p>
          </Link>
        </div>

        <div className="flex justify-center place-items-center ">
          <Link href="#" className="flex flex-row flex-nowrap">
            <Image src={DelivryIcon} alt="Icône d'un coktail" className="w-6" />
            <p className="uppercase">{t('Delivery')}</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ExtraHeader;
