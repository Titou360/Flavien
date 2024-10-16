'use client';

import i18nConfig from '@/i18nConfig';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

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
      newPathname = '/' + newLocale + currentPathname;
    } else {
      newPathname = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
    }

    router.push(newPathname);
  };

  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      <motion.a
        tabIndex="0"
        aria-label="Traduire en Français"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-8 h-8 cursor-pointer dark:text-white hover:text-cafeGold hover:underline hover:underline-offset-4"
        onClick={() => handleChange('fr')}
      >
        FR
      </motion.a>

      {/* Separator */}
      <span className="text-black dark:text-white mx-4">|</span>

      <motion.a
        tabIndex="0"
        aria-label="Translate in English"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-8 h-8 cursor-pointer dark:text-white hover:text-cafeGold hover:underline hover:underline-offset-4"
        onClick={() => handleChange('en')}
      >
        EN
      </motion.a>
    </div>
  );
}
