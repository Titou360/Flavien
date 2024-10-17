import { motion } from 'framer-motion';
import { FacebookIcon, InstagramIcon } from './Icons';

const SocialNetwork = ({ color = 'dark:fill-white' }) => {
  return (
    <div className="flex flex-row justify-center items-center h-10 gap-6">
      <motion.a
        tabIndex="0"
        aria-label="Join us on Facebook"
        href="https://www.facebook.com/profile.php?id=100059651092812"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className={`w-6 h-6 ${color}`} 
      >
        <FacebookIcon />
      </motion.a>

      <motion.a
        tabIndex="0"
        aria-label="Join us on Instagram"
        href="#"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className={`w-6 h-6 ${color}`}
      >
        <InstagramIcon />
      </motion.a>
    </div>
  );
};

export default SocialNetwork;
