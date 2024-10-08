import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { DeliveryIcon, HorlogeIcon } from './Icons';

const ExtraHeaderDeliveryHours = () => {
  const { t } = useTranslation();
  return (
    <nav className="flex flex-row flex-nowrap items-center gap-3 lg:flex-col lg:gap-6">
      <motion.a
        tabIndex="0"
        href="#Hours"
        className="w-8 h-8 flex items-center justify-center flex-nowrap dark:fill-white"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <HorlogeIcon />
        {/* <p className="uppercase lg:capitalize dark:text-cafeGold">{t('Hours')}</p> */}
      </motion.a>

      <motion.a
        tabIndex="0"
        href="#Menus"
        className="w-8 h-8 flex items-center justify-center flex-nowrap dark:fill-white"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <DeliveryIcon />
        {/* <p className="uppercase lg:capitalize dark:text-cafeGold">{t('Delivery')}</p> */}
      </motion.a>
    </nav>
  );
};

export default ExtraHeaderDeliveryHours;
