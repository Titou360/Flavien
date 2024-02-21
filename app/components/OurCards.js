import DrinksCard from './DrinksCard';
import FoodCard from './FoodCard';



const OurCards = () => {
  return (
    <div id="Menus" className="w-5/6 mt-52 flex flex-row justify-between">
      <FoodCard />
      <DrinksCard />
    </div>
  );
};

export default OurCards;
