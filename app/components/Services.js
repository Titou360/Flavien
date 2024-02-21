import Image from 'next/image';
import data from '../../public/data.json';

import BurgerPic from '../../public/assets/img/Services/burger.jpg';
import PizzaPic from '../../public/assets/img/Services/pizza.jpg';

const servicesData = data.services;
const timingData = data.timeSchedule;

const Services = () => {
  return (
    <section id="Services" className="w-5/6 h-screen mt-4 mb-96">
      <div className="relative">
        <h2 className="uppercase text-4xl p-6 text-center">services</h2>
        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 left-50 -ml-2 m-3 font-Kristi text-5xl text-black/50 capitalize">
          à propos <span className="normal-case">de nos</span>
        </span>
      </div>
      {/* Here we map for the differents services */}
      <div className="flex flex-row gap-10 mb-8">
        {servicesData.map((service, index) => (
          <div className="w-1/4 flex flex-col items-center justify-center pr-4 gap-4 border border-solid border-black rounded-lg p-8" key={index}>
            <Image src={service.cover} alt={service.alt} width={50} height={50} className="opacity-50" />
            <h4>{service.title}</h4>
            <p className="text-center opacity-55">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="w-full h-full mx-auto pt-8 flex flex-row justify-between gap-6">
        <div className="w-1/3 flex flex-col gap-6">
          <div id="find_us" className="bg-cafeGray w-full h-96 flex flex-col justify-center items-center text-white px-6">
            <h4 className="uppercase mb-6">retrouvez nous ici</h4>
            <adress className="text-center my-2">
              39 Place Robert Bezos <br /> 40420 Brocas
            </adress>
            <a href="tel:0123456789">01.23.45.67.89</a>
            <p>info@lecafedelaplace.fr</p>
          </div>
          <div id="opening_times_food" className="">
            <div className=" bg-cafeGold w-full h-96 flex flex-col justify-center items-center text-white px-6">
              <h4 className="uppercase mb-6">Heures d&apos;ouverture Restaurant</h4>
              {/* Here we map for the time Schedule */}
              {timingData.map((timing, index) => (
                <div className="w-full flex flex-row justify-between items-center text-sm" key={index}>
                  <h5 className="uppercase">{timing.day}</h5>
                  <div>{timing.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="burgers" className="w-1/3">
          <Image alt="Photo d'un burger" src={BurgerPic} className="w-full h-full object-cover" />
        </div>
        <div id="pizzas" className="w-1/3">
          <Image alt="Photo d'un burger" src={PizzaPic} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Services;
