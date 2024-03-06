import DrinksCard from './DrinksCard';
import FoodCard from './FoodCard';

const OurCards = () => {
  return (
    <section id="Menus" className="w-5/6 lg:hidden lg:w-full h-auto my-12 flex flex-row lg:flex-col justify-evenly items-center gap-6">
      <FoodCard />
      <DrinksCard />
    </section>
  );
};

export default OurCards;
