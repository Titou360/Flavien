import logo from '../../public/assets/img/logo_NOBG.webp';
import Image from 'next/image';


const Logo = ({className, width, height}) => {
  return <Image src={logo} alt="Logo du Café de la Place" width={width} height={height} className={className} />;
};

export default Logo;
