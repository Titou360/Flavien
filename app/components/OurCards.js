import DrinksCard from './DrinksCard';
import FoodCard from './FoodCard';

const OurCards = () => {
  return (
    <section id="Menus" className="w-5/6 h-full lg:w-full my-12 lg:my-0 flex flex-row lg:flex-col justify-evenly items-center gap-6">
      <FoodCard />
      <DrinksCard />
    </section>
  );
};

export default OurCards;
