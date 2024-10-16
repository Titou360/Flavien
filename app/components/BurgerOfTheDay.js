import Image from 'next/image';
import burgerBg from '../../public/assets/img/DailyChange/burger.png';
import data from '../../public/foodData.json';

// Accédez à la nouvelle clé pour "Le Burger du moment"
const burgerOfTheDay = data['Le Burger du Moment'];

const BurgerOfTheDay = () => {
  return (
    <div id="burgerOfTheDay" className="w-full h-full relative">
      <Image src={burgerBg} className="absolute w-full h-full object-cover opacity-95" alt="Photo d'un burger" loading="lazy" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-100"></div>

      <div className="w-full absolute inset-0 flex justify-between lg:justify-around place-items-center flex-col gap-8 text-white">
        {/* Titre du burger */}
        <h4 className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent text-4xl font-bold pt-6">
          {burgerOfTheDay.name}
        </h4>
        {/* Affichage du prix */}
        <div className="w-[120px] h-[60px] rounded-md bg-gradient-to-r from-orange-600 to-orange-500 place-items-center py-1 px-2 text-xs text-white relative">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-center whitespace-nowrap">
            {burgerOfTheDay.price} €
          </span>
        </div>

        <div className="w-full absolute inset-0 flex justify-center place-items-center flex-col gap-4"></div>
        {/* Description du burger */}
        <p className="text-center text-xl mx-6">{burgerOfTheDay.description}</p>

        {/* Liste des ingrédients */}
        <ul>
          {burgerOfTheDay.ingredients.map((ingredient, i) => (
            <li key={i} className="list-disc text-left pl-4 text-xl">
              {ingredient}
            </li>
          ))}
        </ul>

        {/* Offres spéciales */}
        {burgerOfTheDay.specialOffer && (
          <div>
            <span>{burgerOfTheDay.specialOffer.offerText}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerOfTheDay;
