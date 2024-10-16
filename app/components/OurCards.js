"use client"
import React, { useState } from 'react';
import DrinksCard from './DrinksCard';
import FoodCard from './FoodCard';
import ChildCard from './ChildCard';
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
    <section id="menus" className="w-5/6 h-full lg:w-full my-20 lg:my-0 flex flex-row lg:flex-col justify-evenly items-center gap-6">
      <div className="cursor-pointer w-1/2 lg:w-5/6 lg:mx-auto" onClick={() => openModal('food')}>
        <FoodCard />
      </div>
      <div className="cursor-pointer w-1/2 lg:w-5/6 lg:mx-auto" onClick={() => openModal('drinks')}>
        <DrinksCard />
      </div>
      <div className="cursor-pointer w-1/2 lg:w-5/6 lg:mx-auto" onClick={() => openModal('children')}>
        <ChildCard />
      </div>
      {isModalOpen && <Modal content={modalContent} onClose={closeModal} />}
    </section>
  );
};

export default OurCards;
