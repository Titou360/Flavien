import Image from 'next/image';
import HeroPicture from '../../public/assets/img/hero.jpg';
import logo from '../../public/assets/img/logo_NOBG.webp';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="w-5/6 xs:w-full m-auto h-screen relative">
      <Image src={HeroPicture} className="absolute inset-0 w-full h-full object-cover" alt="Photo de la devanture du restaurant" />
      {/* Next line making a gradient over the preview pic */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-40"></div>
      <Image src={logo} alt="Logo du Café de la Place" width={128} height={64} className="absolute top-5 left-5" />
      <div className="absolute w-full flex flex-row justify-center items-center gap-3 flex-wrap text-sm py-3">
        <Navbar />
      </div>
      <div className="absolute bottom-10 left-50 w-full">
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
