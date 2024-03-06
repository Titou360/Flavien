"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-5/6 md:w-full m-auto h-auto bg-gray-700 rounded-t-lg flex flex-row md:flex-col justify-between place-items-center px-10 pt-2 md:gap-3">
      <div className="w-1/3 md:w-full md:order-2 relative flex flex-col font-Quick text-xl text-white gap-0">
        <h4 className='text-2xl'>Restez connectés !</h4>
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
        <motion.a
          href="#"
          className="hover:underline"
          tabIndex="0"
          aria-label="Access to Facebook Page"
          target="_blank"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          Instagram
        </motion.a>
      </div>

      <div className="w-1/3 md:w-full md:order-1 flex flex-col justify-center place-items-center text-white gap-2">
        <Logo width={90} height={90} />
        <Link href="mailto:" className=''>info@cafedelaplace.com</Link>
        <Link href="tel:05.58.58.58.58">05.58.58.58.58</Link>
      </div>

      <div className="w-1/3 md:w-full md:order-3 flex text-white text-xs"> TEST</div>
    </footer>
  );
};

export default Footer;
