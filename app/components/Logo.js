import logo from '../../public/assets/img/Logo/logo.png';
import Image from 'next/image';


const Logo = ({className, width, height}) => {
  return <Image src={logo} alt="Logo du Café de la Place" width={width} height={height} className={className}/>;
};

export default Logo;
