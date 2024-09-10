'use client';
import Image from 'next/image';
import HeroPicture from '../../public/assets/img/hero.jpg';
import BookTable from './BookTable';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      <header className="relative w-full m-auto h-screen lg:w-full">
        <Image
          src={HeroPicture}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Photo-restaurant-café-de-la-place-brocas"
          style="fill"
          priority={true}
        />
        {/* Next line making a gradient over the preview pic */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <BookTable />
        </div>

        <div className="hidden lg:block z-20 ">
          <Logo width={90} height={20} className="absolute top-5 left-5" style="fill" priority={true} />
        </div>
        <div className="lg:hidden z-20">
          <Logo width={180} height={40} className="absolute top-5 left-5" style="fill" priority={true} />
        </div>

        <div className="absolute lg:hidden w-1/2 mx-auto top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-auto bg-black/60 lg:bg-inherit">
          <Navbar />
        </div>
        <div className="absolute hidden lg:flex">
          <Navbar />
        </div>
        <div className="lg:hidden absolute bottom-10 left-50 w-full z-50">
          <div className="mouse_scroll">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="m_scroll_arrows unu"></span>
              <span className="m_scroll_arrows doi"></span>
              <span className="m_scroll_arrows trei"></span>
            </div>
          </div>
        </div>
      </header>
      <div className="flex justify-center place-items-center flex-col my-20">
        <h1 className="text-Quick text-6xl lg:text-4xl font-Quick lg:text-center my-4 dark:text-white ">Le Café de la Place</h1>
        <p className=" w-5/6 italic text-s text-center dark:text-white">
          Situé au cœur de Brocas dans les Landes, Le Café de la Place est un lieu central pour la communauté locale, offrant un espace de rencontre
          et de convivialité autour de boissons et de repas. Son rôle vital dans la vie sociale du village en fait un lieu incontournable pour les
          habitants et les visiteurs.
        </p>
      </div>
    </>
  );
};

export default Header;
