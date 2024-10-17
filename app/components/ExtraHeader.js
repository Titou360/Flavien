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
      <nav id="extraHeader" className="relative w-full flex flex-row items-center dark:bg-black top-0 left-0 z-50">
        {/* Logo visible sur mobile (ne suit pas le défilement) */}
        <div className="absolute top-5 left-5 z-30 hidden lg:block">
          <Link href="/">
            <Logo width={80} height={80} />
          </Link>
        </div>
        {/* Logo visible sur grand écran (ne suit pas le défilement) */}
        <div className="absolute top-5 left-5 z-30 lg:hidden">
          <Link href="/">
            <Logo width={150} height={150} />
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

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:min-w-80 lg:px-4">
        <p className="w-full italic text-lg text-center text-white md:text-sm">
          Au cœur de Brocas, dans les Landes, un lieu chaleureux où la communauté se retrouve pour partager des moments inoubliables autour de repas
          savoureux et de boissons rafraîchissantes. <br /> Plus qu&apos;un simple bar-restaurant, c&apos;est le point de rencontre incontournable des
          habitants et des visiteurs. <br /> Nous vous souhaitons la bienvenue au
        </p>
        <h1 className="lg:min-w-80 font-effect-outline text-8xl lg:text-5xl font-Quick text-center my-12 bold">Café de la Place</h1>

        <BookTable />
      </div>

      <MouseScroll />
    </header>
  );
};

export default ExtraHeader;
