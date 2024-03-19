import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { DeliveryIcon, HorlogeIcon } from './Icons';

const ExtraHeaderDeliveryHours = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row justify-center items-center lg:flex-col lg:items-center gap-6 lg:gap-3 mr-2">
      <nav className="flex items-center justify-center flex-nowrap lg:flex-col lg:gap-6">
        <motion.a
          tabIndex="0"
          href="#Hours"
          className="flex items-center justify-center flex-nowrap"
        >
          <HorlogeIcon className="w-6 mr-2 lg:hidden dark:fill-cafeGold" />
          <p className="uppercase lg:capitalize dark:text-cafeGold">{t('Hours')}</p>
        </motion.a>

        <motion.a
          tabIndex="0"
          href="#Menus"
          className="flex items-center justify-center flex-nowrap"
        >
          <DeliveryIcon className="w-6 ml-2 lg:hidden dark:fill-cafeGold" />
          <p className="uppercase lg:capitalize dark:text-cafeGold">{t('Delivery')}</p>
        </motion.a>
      </nav>
    </div>
  );
};

export default ExtraHeaderDeliveryHours;
