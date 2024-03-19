'use client';
import ExtraHeaderDeliveryHours from './ExtraHeaderDeliveryHours.js';
import { MoonIcon, SunIcon } from './Icons.js';
import LanguageChanger from './LanguageChanger';
import SocialNetwork from './SocialNetwork.js';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const ExtraHeader = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <nav id="extraHeader" className="w-5/6 lg:w-full mx-auto flex flex-row justify-between py-3">
      <div className="flex flex-row flex-nowrap gap-2 ">
        <button
          aria-label="button dark mode"
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className="mr-3 lg:ml-3 lg:mr-0 flex justify-center rounded-full p-1"
        >
          {mode === 'dark' ? <SunIcon className={'fill-cafeGold'} /> : <MoonIcon className={'fill-dark'} />}
        </button>
        <div>
          <LanguageChanger />
        </div>

        <div className="lg:hidden">
          <SocialNetwork />
        </div>
      </div>
      <div className="lg:hidden">
        <ExtraHeaderDeliveryHours />
      </div>
    </nav>
  );
};

export default ExtraHeader;
