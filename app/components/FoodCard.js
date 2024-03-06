"use client"
import Modal from './Modal';

const FoodCard = () => {
  return (
    <section id="beverage" className="relative w-1/2">
      <div className="border border-1 border-black/60 border-spacing-8">
        <h2 className="uppercase text-4xl p-6 relative">carte du restaurant</h2>
        <span className="absolute -top-6 left-0 m-4 font-Kristi text-5xl text-black/60 capitalize">
          Consulter <span className="normal-case">notre</span>
        </span>
        <Modal />
      </div>
    </section>
  );
};

export default FoodCard;
