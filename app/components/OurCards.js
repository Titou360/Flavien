import DrinksCard from './DrinksCard';
import FoodCard from './FoodCard';



const OurCards = () => {
  return (
    <section id="Menus" className="w-5/6 h-auto my-12 flex flex-row justify-evenly items-center gap-6">
      <FoodCard />
      <DrinksCard />
    </section>
  );
};

export default OurCards;
