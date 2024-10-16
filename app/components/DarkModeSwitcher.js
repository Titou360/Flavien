import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from './Icons.js';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const DarkModeSwitcher = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <motion.button
      aria-label="button dark mode"
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      className="w-8 h-8 flex justify-center place-items-center dark:fill-white"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
    </motion.button>
  );
};

export default DarkModeSwitcher;
