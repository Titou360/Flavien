import Link from 'next/link';
import { useState } from 'react';
import DarkModeSwitcher from './DarkModeSwitcher';
import LanguageChanger from './LanguageChanger';
import SocialNetwork from './SocialNetwork';

// Code to customize the link inside the navbar
const CustomLink = ({ href, title, className = '', toggleMenu }) => {
  return (
    <Link href={href} className={`${className} relative group font-Oakes uppercase text-3xl bold text-black dark:text-white`} onClick={toggleMenu}>
      {title}
    </Link>
  );
};

const Navigation = ({ toggleMenu }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="flex flex-col justify-start gap-4">
      <ul className="text-left">
        <li
          className={`px-4 py-4 hover:bg-cafeAlmond dark:hover:bg-gray-600 cursor-pointer transition-opacity duration-300 ${
            hoveredLink === 'Accueil' || hoveredLink === null ? 'opacity-100' : 'opacity-50'
          }`}
          onMouseEnter={() => setHoveredLink('Accueil')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <CustomLink href="/" title="Accueil" toggleMenu={toggleMenu} />
        </li>
        <li
          className={`px-4 py-4 hover:bg-cafeAlmond dark:hover:bg-gray-600 cursor-pointer transition-opacity duration-300 ${
            hoveredLink === 'À Propos' || hoveredLink === null ? 'opacity-100' : 'opacity-50'
          }`}
          onMouseEnter={() => setHoveredLink('À Propos')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <CustomLink href="/#about" title="À Propos" toggleMenu={toggleMenu} />
        </li>
        <li
          className={`px-4 py-4 hover:bg-cafeAlmond dark:hover:bg-gray-600 cursor-pointer transition-opacity duration-300 ${
            hoveredLink === 'Services' || hoveredLink === null ? 'opacity-100' : 'opacity-50'
          }`}
          onMouseEnter={() => setHoveredLink('Services')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <CustomLink href="/#services" title="Services" toggleMenu={toggleMenu} />
        </li>
        <li
          className={`px-4 py-4 hover:bg-cafeAlmond dark:hover:bg-gray-600 cursor-pointer transition-opacity duration-300 ${
            hoveredLink === 'Offres du moment' || hoveredLink === null ? 'opacity-100' : 'opacity-50'
          }`}
          onMouseEnter={() => setHoveredLink('Offres du moment')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <CustomLink href="/#dailychange" title="Offres du moment" toggleMenu={toggleMenu} />
        </li>
        <li
          className={`px-4 py-4 hover:bg-cafeAlmond dark:hover:bg-gray-600 cursor-pointer transition-opacity duration-300 ${
            hoveredLink === 'Notre carte' || hoveredLink === null ? 'opacity-100' : 'opacity-50'
          }`}
          onMouseEnter={() => setHoveredLink('Notre carte')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <CustomLink href="/#menus" title="La carte" toggleMenu={toggleMenu} />
        </li>
        <li
          className={`px-4 py-4 hover:bg-cafeAlmond dark:hover:bg-gray-600 cursor-pointer transition-opacity duration-300 ${
            hoveredLink === 'Contact' || hoveredLink === null ? 'opacity-100' : 'opacity-50'
          }`}
          onMouseEnter={() => setHoveredLink('Contact')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <CustomLink href="/#contact" title="Contact" toggleMenu={toggleMenu} />
        </li>
      </ul>
      <div className="flex flex-row gap-6 items-center justify-start pl-3">
        <DarkModeSwitcher />
        <SocialNetwork color="hover:fill-cafeGold" />
      </div>
      <div className="flex items-center justify-start mt-4 pl-3">
        <LanguageChanger />
      </div>
    </div>
  );
};
 

export default Navigation;
