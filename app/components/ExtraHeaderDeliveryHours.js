import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ClockIcon from '../../public/assets/img/icons/horloge.svg';
import DelivryIcon from '../../public/assets/img/icons/panier-repas.png';

const ExtraHeaderDeliveryHours = ({toggle}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row md:flex-col lg:items-center gap-6 lg:gap-4 mr-2">
      <Link href="#Hours" className="flex selection:justify-center place-items-center" onClick={toggle}>
        <Image src={ClockIcon} alt="Icône d'un coktail" className="w-6 mr-2 lg:hidden" />
        <p className="uppercase lg:capitalize">{t('Hours')}</p>
      </Link>

      <div className="flex justify-center place-items-center ">
        <Link href="#Menus" className="flex flex-row flex-nowrap" onClick={toggle}>
          <Image src={DelivryIcon} alt="Icône d'un sac de livraison" className="w-6 mr-2 lg:hidden" />
          <p className="uppercase lg:capitalize">{t('Delivery')}</p>
        </Link>
      </div>
    </div>
  );
};

export default ExtraHeaderDeliveryHours;
