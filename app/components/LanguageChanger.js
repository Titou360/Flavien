'use client';

import i18nConfig from '@/i18nConfig';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import FranceFlag from "../../public/assets/img/icons/france.svg"
import UKFlag from "../../public/assets/img/icons/uk.svg"

import { motion } from 'framer-motion';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale) => {

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    let newPathname = currentPathname;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      newPathname ='/' + newLocale + currentPathname;
    } else {
      newPathname = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
    }

    router.push(newPathname);
  };

  return (
    <>
      <motion.a
        tabIndex="0"
        aria-label="Translate in French"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6 mr-3 cursor-pointer"
        onClick={() => handleChange('fr')}
      >
        🇫🇷
      </motion.a>
      <motion.a
        tabIndex="0"
        aria-label="Translate in English"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6 mr-3 cursor-pointer"
        onClick={() => handleChange('en')}
      >
        🇬🇧
      </motion.a>
    </>
  );
}
