import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const BookTable = () => {
  const { t } = useTranslation();

  return (
    <motion.a
      className="border border-solid px-2 backdrop-blur-md rounded-lg cursor-pointer text-white p-4"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      href="tel:0033547871549"
    >
      {t('Custom:BookTable')}
    </motion.a>
  );
};

export default BookTable;
