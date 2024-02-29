'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import BookTable from './BookTable';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="flex flex-row justify-center items-center place-items-center gap-3 text-white uppercase font-Quick text-lg">
      <Link href="/" className="underline underline-offset-2">
        {t('Home')}
      </Link>
      <Link href="#About_us">{t('Navbar:About')}</Link>
      <Link href="#Services">{t('Navbar:Services')}</Link>
      <Link href="#Menus">{t('Navbar:Menus')}</Link>
      <Link href="#Contact_us">Contact</Link>
      <BookTable />
    </nav>
  );
};

export default Navbar;
