import Image from 'next/image';
import Logo from '../../public/assets/img/icons/menu2.png';
import SectionHeader from './SectionHeader';

const FoodCard = () => {
  return (
    <section id="beverage" className="relative">
      <div className="border border-1 border-black/60 rounded-lg flex flex-col items-center transition ease-in-out duration-300 hover:border-cafeGold group">
        <Image
          src={Logo}
          alt="Icone de boissons"
          width={50}
          height={50}
          className="py-4 opacity-50 group-hover:transition group-hover:ease-in-out group-hover:duration-300 group-hover:opacity-100"
        />
        <div className="w-full">
          <SectionHeader subtitle="Consultez" subtitle2=" notre carte" title=" des mets" />
        </div>
      </div>
    </section>
  );
};

export default FoodCard;
