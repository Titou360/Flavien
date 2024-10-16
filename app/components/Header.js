'use client';
import Image from 'next/image';
import HeroPicture from '../../public/assets/img/hero.jpg';
import BookTable from './BookTable';
import MouseScroll from './ui/MouseScroll';

const Header = () => {
  return (
    <>
      <header className="relative w-full m-auto h-screen lg:w-full">
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
          <h1 className="font-effect-outline text-8xl lg:text-6xl font-Quick text-center my-4 bold">Le Café de la Place</h1>

          <BookTable />
        </div>

        <MouseScroll />
      </header>
      <div className="flex justify-center place-items-center flex-col my-20">
        <p className=" w-5/6 italic text-s text-center dark:text-white">
          Au cœur de Brocas, dans les Landes, un lieu chaleureux où la communauté se retrouve pour partager des moments inoubliables autour de repas
          savoureux et de boissons rafraîchissantes. Plus qu&apos;un simple restaurant, c&aposest le point de rencontre incontournable des habitants et des
          visiteurs. <br /> Bienvenue au
        </p>
      </div>
    </>
  );
};

export default Header;
