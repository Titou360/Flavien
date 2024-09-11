import Image from 'next/image';
import burgerBg from '../../public/assets/img/DailyChange/burger.png';
import data from '../../public/foodData.json';

// Accédez à la nouvelle clé pour "Le Burger du moment"
const burgerOfTheDay = data['Le Burger du Moment'];

const BurgerOfTheDay = () => {
  return (
    <div id="" className="w-full h-full lg:h-96 relative">
      <Image src={burgerBg} className="absolute w-full h-full lg:h-screen lg:overflow-hidden object-cover opacity-95" alt="Photo d'un burger" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-90"></div>

      <div className="w-full absolute inset-0 flex justify-around place-items-center flex-col gap-8 text-white">
        {/* Titre du burger */}
        <h4 className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent text-4xl font-bold">{burgerOfTheDay.name}</h4>

        <div className="w-full absolute inset-0 flex justify-center place-items-center flex-col gap-4"></div>
        {/* Description du burger */}
        <p className="text-center text-xl mx-6">{burgerOfTheDay.description}</p>

        {/* Liste des ingrédients */}
        <ul>
          {burgerOfTheDay.ingredients.map((ingredient, i) => (
            <li key={i} className="list-disc m-0 p-0 text-left text-xl">
              {ingredient}
            </li>
          ))}
        </ul>

        {/* Affichage du prix */}
        <div className="absolute w-[130px] h-[130px] rounded-full bg-gradient-to-r from-orange-600 to-orange-500 top-10 right-10 grid min-h-[24px] min-w-[24px] translate-x-2/4 -translate-y-2/4 place-items-center py-1 px-1 text-xs text-white">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-center whitespace-nowrap">
            {burgerOfTheDay.price} €
          </span>
        </div>

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
