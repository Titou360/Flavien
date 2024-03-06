'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import data from '../../public/data.json';
import ExtraHeaderDeliveryHours from './ExtraHeaderDeliveryHours.js';
import LanguageChanger from './LanguageChanger';
import SocialNetwork from './SocialNetwork.js';

const timingData = data.timeSchedule;

const ExtraHeader = () => {
  const { t } = useTranslation();
  const [modalContent, setModalContent] = useState('');

  const handleModalOpen = (content) => {
    setModalContent(content);
  };

  return (
    <nav id="extraHeader" className="w-5/6 mx-auto flex flex-row justify-between py-3">
      <div className="flex flex-row gap-2 ml-2">
        <LanguageChanger />
        <div className="md:hidden">
          <SocialNetwork />
        </div>
      </div>
      <div className="md:hidden">
        <ExtraHeaderDeliveryHours />
      </div>
    </nav>
  );
};

export default ExtraHeader;
