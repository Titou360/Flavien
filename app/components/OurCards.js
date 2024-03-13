"use client"
import React, { useState } from 'react';
import DrinksCard from './DrinksCard';
import FoodCard from './FoodCard';
import Modal from './Modal';

const OurCards = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  return (
    <section id="Menus" className="w-5/6 h-full lg:w-full py-10 lg:my-0 flex flex-row lg:flex-col justify-evenly items-center gap-6">
     <div className="cursor-pointer w-1/2" onClick={() => openModal('food')}>
        <FoodCard />
      </div>
      <div className="cursor-pointer w-1/2" onClick={() => openModal('drinks')}>
        <DrinksCard />
      </div>
      {isModalOpen && <Modal content={modalContent} onClose={closeModal} />}

    </section>
  );
};

export default OurCards;
