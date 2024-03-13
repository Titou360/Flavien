import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const BookTable = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center h-full">
      <motion.a
        className="border-2 border-solid px-4 py-4 xs:px-1 bg-cafeGold hover:bg-white hover:border-cafeGold rounded-lg lg:px-2 cursor-pointer text-black font-bold"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        href="tel:0033547871549"
      >
        {t('Custom:BookTable')}
      </motion.a>
    </div>
  );
};

export default BookTable;

