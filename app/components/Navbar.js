'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BookTable from './BookTable';
import ExtraHeaderDeliveryHours from './ExtraHeaderDeliveryHours';
import SocialNetwork from './SocialNetwork';

const CustomLink = ({ href, title, className = '' }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
      h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  // const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    toggle();
    setIsOpen(!isOpen);
  };

  return (
    <Link legacyBehavior href={href}>
      <a className={`${className} relative group text-light dark:text-dark my-2 `} onClick={handleClick}>
        {title}
        <span
          className={`
            h-[2px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
          `}
        >
          &nbsp;
        </span>
      </a>
    </Link>
  );
};

const Navbar = () => {
  // const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-light p-2 font-medium flex items-center justify-center relative">
      <button
        aria-label="button hamburger menu"
        className="fixed z-10 p-4 top-5 right-5 flex-col justify-center items-center hidden bg-white rounded-full lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-black transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-black transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-black transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className="flex flex-row justify-center items-center place-items-center gap-3 text-white uppercase font-Quick text-lg lg:hidden">
        <nav>
          <CustomLink href="/" className="mr-4dark:text-light" title={t('Navbar:Home')} />
          <CustomLink href="#Services" className="mx-4dark:text-light" title={t('Navbar:Services')} />
          <CustomLink href="#Menus" className="mx-4dark:text-light" title={t('Navbar:Menus')} />
          <CustomLink href="#Contact_us" className="ml-4dark:text-light" title="Contact" />
        </nav>
        <BookTable />

        <div className="flex flex-row ">
          {/* <button
            aria-label="button dark mode"
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className="ml-3 flex items-center justify-center rounded-full p-1"
          >
            {mode === 'dark' ? <SunIcon className={'fill-primary'} /> : <MoonIcon className={'fill-dark'} />}
          </button> */}
        </div>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opcacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[75vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg bg-white py-32"
        >
          <nav className="flex flex-col items-center justify-center ">
            <CustomMobileLink href="/" className=" text-black" title={t('Navbar:Home')} toggle={handleClick} />
            <CustomMobileLink href="#Services" className=" text-black" title={t('Navbar:Services')} toggle={handleClick} />
            <CustomMobileLink href="#Menus" className=" text-dark" title={t('Navbar:Menus')} toggle={handleClick} />
            <CustomMobileLink href="#Contact_us" className="text-black" title="Contact" toggle={handleClick} />
          </nav>
          <div className="flex flex-row justify-center items-center mt-2">
            <nav className="flex flex-col items-center place-content-center justify-center flex-nowrap gap-6">
              <ExtraHeaderDeliveryHours toggle={handleClick} />

              <SocialNetwork toggle={handleClick} />

              {/* <button
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                className="ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1"
              >
                {mode === 'dark' ? (
                  <SunIcon className={'fill-primary w-6 mr-3 sm:mx-1'} />
                ) : (
                  <MoonIcon className={'fill-dark lg:fill-light w-6 mr-3 sm:mx-1'} />
                )}
              </button> */}
            </nav>
          </div>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%] "></div>
    </header>
  );
};

export default Navbar;
