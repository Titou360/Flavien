'use client';
import HamburgerMenu from './HamburgerMenu.js';
import Logo from './Logo.js';

import Image from 'next/image';
import HeroPicture from '../../public/assets/img/hero.jpg';
import BookTable from './BookTable';
import MouseScroll from './ui/MouseScroll';
import Link from 'next/link.js';

const ExtraHeader = () => {
  return (
    <header className="relative w-full h-screen">
      <nav id="extraHeader" className="w-full flex flex-row items-center p-4 bg-transparant dark:bg-black fixed top-0 left-0 z-50">
        {/* Logo positioned fixed to the top left */}
        <div className="fixed top-5 left-5">
          <Link href="/">
            <Logo width={150} height={150} href="/" />
          </Link>
        </div>
      </nav>
      {/* Hamburger Menu stays in the top right */}
      <HamburgerMenu />

      <Image
        src={HeroPicture}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Photo-restaurant-café-de-la-place-brocas-les-landes"
        style="fill"
        priority={true}
      />
      {/* Next line making a gradient over the preview pic */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-100"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className=" w-full italic text-lg text-center text-white">
          Au cœur de Brocas, dans les Landes, un lieu chaleureux où la communauté se retrouve pour partager des moments inoubliables autour de repas
          savoureux et de boissons rafraîchissantes. <br /> Plus qu&apos;un simple bar-restaurant, c&apos;est le point de rencontre incontournable des habitants
          et des visiteurs. <br /> Nous vous souhaitons la bienvenue au 
        </p>
        <h1 className="font-effect-outline text-8xl lg:text-6xl font-Quick text-center mt-8 mb-12 bold">Café de la Place</h1>

        <BookTable />
      </div>

      <MouseScroll />
    </header>
  );
};

export default ExtraHeader;
