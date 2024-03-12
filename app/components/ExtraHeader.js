'use client';
import ExtraHeaderDeliveryHours from './ExtraHeaderDeliveryHours.js';
import LanguageChanger from './LanguageChanger';
import SocialNetwork from './SocialNetwork.js';

const ExtraHeader = () => {

  return (
    <nav id="extraHeader" className="w-5/6 lg:w-full mx-auto flex flex-row justify-between py-3">
      <div className="flex flex-row gap-2 ml-2">
        <LanguageChanger />
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
