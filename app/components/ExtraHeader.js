'use client';
import ExtraHeaderDeliveryHours from './ExtraHeaderDeliveryHours.js';
import { MoonIcon, SunIcon } from './Icons.js';
import LanguageChanger from './LanguageChanger';
import SocialNetwork from './SocialNetwork.js';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { motion } from 'framer-motion';

const ExtraHeader = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <nav id="extraHeader" className="w-full flex flex-row justify-between py-3 bg-slate-100 dark:bg-black ">
      <div className="flex flex-row flex-nowrap items-center gap-3">
        <motion.button
          aria-label="button dark mode"
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className="w-8 h-8 ml-3 lg:mr-0 flex justify-center place-items-center dark:fill-white"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </motion.button>

        <div className="lg:hidden">
          <SocialNetwork />
        </div>
        <div>
          <LanguageChanger />
        </div>
      </div>
      <div className="lg:hidden">
        <ExtraHeaderDeliveryHours />
      </div>
    </nav>
  );
};

export default ExtraHeader;
