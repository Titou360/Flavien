import { motion } from 'framer-motion';
import { FacebookIcon, InstagramIcon } from './Icons';

const SocialNetwork = () => {
  return (
    <div className="flex flex-row">
      <motion.a
        tabIndex="0"
        aria-label="Join us on Instagram"
        href="#"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6 mx-3"
      >
        <InstagramIcon />
      </motion.a>

      <motion.a
        tabIndex="0"
        aria-label="Join us on Facebook"
        href="https://www.facebook.com/profile.php?id=100059651092812"
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-6 mx-3"
      >
        <FacebookIcon />
      </motion.a>
    </div>
  );
};

export default SocialNetwork;
