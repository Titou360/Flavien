'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import BurgerPic from '../../public/assets/img/Services/burger.jpg';
import TraiteurPic from '../../public/assets/img/Services/traiteur.webp';
import data from '../../public/data.json';
import Modal from './Modal';
import SectionHeader from './SectionHeader';
import Switcher from './Switcher';

const servicesData = data.services;
const timingRestaurant = data.timeSchedule.restaurant;
const timingPub = data.timeSchedule.pub;

const Services = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (newValue) => {
    setIsChecked(newValue);
  };

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
    <section id="services" className="w-5/6 md:w-full h-full my-20 lg:mb-0">
      <SectionHeader subtitle="à propos" subtitle2=" de nos" title="services" />
      {/* Here we map for the differents services */}
      <div className="w-full mx-auto flex flex-row lg:flex-col gap-10 mb-10">
        {servicesData.map((service, index) => (
          <div
            className="w-1/4 lg:w-3/4 lg:mx-auto flex flex-col items-center justify-center pr-4 gap-4 border border-solid border-black dark:border-cafeGold rounded-lg p-8 transition ease-in-out duration-300 hover:border-cafeGold/50 dark:hover:border-cafeGold group hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
            key={index}
          >
            <Image
              src={service.cover}
              alt={service.alt}
              width={70}
              height={70}
              className="opacity-50 dark:opacity-100 group-hover:fill-cafeGray dark:group-hover:fill-cafeGold dark:bg-white dark:rounded-sm p-1"
            />
            <h3 className="group-hover:text-cafeGray dark:text-cafeGold dark:group-hover:text-cafeGold text-lg font-semibold">{service.title}</h3>
            <p className="text-center text-sm font-medium opacity-55 dark:opacity-80 dark:text-cafeGold dark:group-hover:text-cafeGold group-hover:text-cafeGray group-hover:opacity-100">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      {/* Here is the code for tablet, laptop & desktop screens */}
      <div className="lg:hidden ">
        <div className="w-full h-screen mx-auto pt-8 flex flex-row lg:flex-col justify-between align-baseline gap-6">
          <div className="w-1/3 lg:w-full md:order-1 flex flex-col gap-6 lg:gap-0">
            <div
              id="find_us"
              className="bg-cafeBlack w-full h-full flex flex-col justify-center items-center text-white px-6 md:m-auto border-solid border-2 border-transparent dark:border-cafeGold"
            >
              <h3 className="uppercase mb-6">retrouvez nous ici</h3>
              <adress className="text-center my-2">
                39 Place Robert Bezos <br /> 40420 Brocas
              </adress>
              <Link href="tel:0033547871549">05.47.87.15.49</Link>
              <Link href="#">info@lecafedelaplace.fr</Link>
            </div>
            <div
              id="Hours"
              className=" bg-cafeGold w-full h-full flex flex-col justify-center items-center text-white px-6 border-solid border-2 border-transparent dark:border-cafeGold"
            >
              <h3 className="uppercase mb-6">Nos Heures d&apos;ouverture</h3>
              <div className="flex flex-row gap-2 justify-center place-items-center py-2">
                <span>Bar</span>
                <Switcher onToggle={handleToggle} />
                <span>Restaurant</span>
              </div>
              {isChecked
                ? timingRestaurant.map((timing, index) => (
                    <div className="w-full flex flex-row justify-between items-center text-sm" key={index}>
                      <h4 className="uppercase">{timing.day}</h4>
                      <div>{timing.time}</div>
                    </div>
                  ))
                : timingPub.map((timing, index) => (
                    <div className="w-full flex flex-row justify-between items-center text-sm" key={index}>
                      <h4 className="uppercase">{timing.day}</h4>
                      <div>{timing.time}</div>
                    </div>
                  ))}
            </div>
          </div>

          <div id="burgers" className="w-1/3 lg:w-full h-full lg:h-96 relative border-solid border-2 border-transparent dark:border-cafeGold">
            <Image src={BurgerPic} className="absolute w-full h-full object-cover" alt="Photo d'un burger" />
            {/* Next line making a gradient over the pic */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-80"></div>

            <div className="w-full absolute inset-0 flex justify-center place-items-center flex-col gap-8">
              <span className="text-white capitalize font-Kristi text-8xl ">découvrez</span>
              <h3 className=" text-white flex justify-center place-items-center uppercase font-Quick text-4xl">nos burgers</h3>

              <div onClick={() => openModal('burgers')} className="text-white text-xl underline font-Quick cursor-pointer">
                Accéder à notre choix
              </div>
            </div>
          </div>

          <div id="pizzas" className="w-1/3 md:w-full md:order-3 relative h-full border-solid border-2 border-transparent dark:border-cafeGold">
            <Image src={TraiteurPic} className="w-full h-full object-cover" alt="Photo du traiteur" />
            {/* Next line making a gradient over the pic */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-90"></div>
            <div className="w-full absolute inset-0 flex justify-center place-items-center flex-col gap-8">
              <span className="text-white capitalize font-Kristi text-8xl ">découvrez</span>
              <h3 className=" text-white flex justify-center place-items-center uppercase font-Quick text-4xl">Service traiteur</h3>
              <div onClick={() => openModal('pizzas')} className="text-white text-xl underline font-Quick cursor-pointer">
                Accéder à nos services
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Here is the code for mobile screens */}
      <div className="hidden lg:block lg:pb-10">
        <div className="w-full flex flex-col gap-0 h-full">
          <div id="find_us" className="w-full h-80 flex flex-col justify-center items-center text-white px-6 m-auto bg-cafeBlack">
            <h3 className="uppercase mb-6">retrouvez nous ici</h3>
            <adress className="text-center my-2">
              39 Place Robert Bezos <br /> 40420 Brocas
            </adress>
            <a href="tel:0123456789">01.23.45.67.89</a>
            <p>info@lecafedelaplace.fr</p>
          </div>
          <div id="Hours" className=" bg-cafeGold w-full h-80 flex flex-col justify-center items-center text-white px-6">
            <div className="flex flex-row gap-2 justify-center place-items-center py-2">
              <span>Bar</span>
              <Switcher onToggle={handleToggle} />
              <span>Restaurant</span>
            </div>
            <h3 className="uppercase mb-6">Nos Heures d&apos;ouverture</h3>

            {isChecked
              ? timingRestaurant.map((timing, index) => (
                  <div className="w-full flex flex-row justify-between items-center text-sm" key={index}>
                    <h4 className="uppercase">{timing.day}</h4>
                    <div>{timing.time}</div>
                  </div>
                ))
              : timingPub.map((timing, index) => (
                  <div className="w-full flex flex-row justify-between items-center text-sm" key={index}>
                    <h4 className="uppercase">{timing.day}</h4>
                    <div>{timing.time}</div>
                  </div>
                ))}
          </div>
          <div id="burgers" className="w-full h-80 relative">
            <Image src={BurgerPic} className="absolute w-full h-full object-cover" alt="Photo d'un burger" />
            {/* Next line making a gradient over the pic */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-80"></div>

            <div className="w-full absolute inset-0 flex justify-center place-items-center flex-col gap-8">
              <span className="text-white capitalize font-Kristi text-8xl ">découvrez</span>
              <h3 className=" text-white flex justify-center place-items-center uppercase font-Quick text-4xl">nos burgers</h3>

              <div onClick={() => openModal('burgers')} className="text-white text-xl underline font-Quick">
                Accéder à notre choix
              </div>
            </div>
          </div>
          <div id="traiteur" className="w-full h-80 relative">
            <Image src={TraiteurPic} className="w-full h-full object-cover" alt="Photo d'un buffet traiteur" />
            {/* Next line making a gradient over the pic */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-90"></div>
            <div className="w-full absolute inset-0 flex justify-center place-items-center flex-col gap-8">
              <span className="text-white capitalize font-Kristi text-8xl ">découvrez</span>
              <h3 className=" text-white flex justify-center place-items-center uppercase font-Quick text-4xl">service traiteur</h3>
              <div onClick={() => openModal('traiteur')} className="text-white text-xl underline font-Quick">
                Accéder à nos services
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal content={modalContent} onClose={closeModal} />}
    </section>
  );
};

export default Services;
