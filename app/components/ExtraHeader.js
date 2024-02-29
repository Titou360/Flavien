'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ClockIcon from '../../public/assets/img/icons/horloge.svg';
import DelivryIcon from '../../public/assets/img/icons/panier-repas.png';
import data from '../../public/data.json';
import { FacebookIcon, InstagramIcon } from './Icons';
import LanguageChanger from './LanguageChanger';
import Modal from "./Modal.js"

const timingData = data.timeSchedule;

const ExtraHeader = () => {
  const { t } = useTranslation();
  const [modalContent, setModalContent] = useState('');

  const handleModalOpen = (content) => {
    setModalContent(content);
  };

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
        <Link href="#" className="flex selection:justify-center place-items-center ">
          <Image src={ClockIcon} alt="Icône d'un coktail" className="w-6 mr-2" />
          <p className="uppercase">{t('Hours')}</p>
        </Link>

        <div className="flex justify-center place-items-center ">
          <Link href="#" className="flex flex-row flex-nowrap">
            <Image src={DelivryIcon} alt="Icône d'un sac de livraison" className="w-6 mr-2" />
            <p className="uppercase">{t('Delivery')}</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ExtraHeader;
