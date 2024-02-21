'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
      <motion.a className="border border-solid px-2 backdrop-blur-md rounded-lg cursor-pointer" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
        Réserver une table
      </motion.a>
    </nav>
  );
};

export default Navbar;
