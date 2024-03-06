import Image from "next/image";
import Link from "next/link";
import ClockIcon from '../../public/assets/img/icons/horloge.svg';
import DelivryIcon from '../../public/assets/img/icons/panier-repas.png';
import { useTranslation } from 'react-i18next';

const ExtraHeaderDeliveryHours = () => {
    const { t } = useTranslation();
  return (
    <div className="flex flex-row gap-6 mr-2">
      <Link href="#find_us" className="flex selection:justify-center place-items-center ">
        <Image src={ClockIcon} alt="Icône d'un coktail" className="w-6 mr-2" />
        <p className="uppercase md:hidden">{t('Hours')}</p>
      </Link>

      <div className="flex justify-center place-items-center ">
        <Link href="#Menus" className="flex flex-row flex-nowrap">
          <Image src={DelivryIcon} alt="Icône d'un sac de livraison" className="w-6 mr-2" />
          <p className="uppercase md:hidden">{t('Delivery')}</p>
        </Link>
      </div>
    </div>
  );
}

export default ExtraHeaderDeliveryHours
