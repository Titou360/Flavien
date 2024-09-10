"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-gray-700 rounded-t-lg flex flex-row md:flex-col justify-between items-center px-10 pt-2 md:gap-3 font-Quick">
      <div className="w-1/3 md:w-full md:order-2 relative flex flex-col text-xl text-white gap-0">
        <h2 className="text-2xl">Restez connectés !</h2>
        <motion.a
          href="#"
          className="hover:underline"
          tabIndex="0"
          aria-label="Access to Facebook Page"
          target="_blank"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          Facebook
        </motion.a>
      </div>

      <div className="w-1/3 md:w-full md:order-1 flex flex-col justify-center place-items-center text-white gap-2">
        <Logo width={90} height={90} />
      </div>

      <div className="w-1/3 md:w-full md:order-3 flex flex-col items-end text-white text-xl ">
        <Link href="mailto:">info@cafedelaplace.com</Link>
        <Link href="tel:0033547871549">05.47.87.15.49</Link>
      </div>
    </footer>
  );
};

export default Footer;
