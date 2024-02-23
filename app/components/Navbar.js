'use client';
import Link from 'next/link';
import BookTable from "./BookTable"

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-center items-center place-items-center gap-3 text-white uppercase font-Quick text-lg">
      <Link href="/" className="underline underline-offset-2">
        Accueil
      </Link>
      <Link href="#About_us">À Propos</Link>
      <Link href="#Services">Services</Link>
      <Link href="#Menus">Nos cartes</Link>
      <Link href="#Contact_us">Contact</Link>
     <BookTable />
    </nav>
  );
};

export default Navbar;
