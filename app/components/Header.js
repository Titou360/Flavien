'use client';
import Image from 'next/image';
import HeroPicture from '../../public/assets/img/hero.jpg';
import BookTable from './BookTable';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="relative w-5/6 xs:w-full m-auto h-screen lg:w-full lg:h-80">
      <Image src={HeroPicture} className="absolute inset-0 w-full h-full object-cover" alt="Photo de la devanture du restaurant" />
      {/* Next line making a gradient over the preview pic */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-40"></div>

      <div className="hidden lg:block ">
        <Logo width={90} height={20} className="absolute top-5 left-5" />
      </div>
      <div className="lg:hidden">
        <Logo width={180} height={40} className="absolute top-5 left-5" />
      </div>

      <BookTable className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute w-1/2 mx-auto top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-wrap py-3 px-10 bg-black/60">
        <Navbar />
      </div>
      <div className="lg:hidden absolute bottom-10 left-50 w-full">
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
  );
};

export default Header;
