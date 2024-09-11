import AnimationToCome from './AnimationToCome';
import BurgerOfTheDay from './BurgerOfTheDay';
import MenuBrasseur from './MenuBrasseur';
import SectionHeader from './SectionHeader';

const DailyChange = () => {
  return (
    <div className="flex flex-row lg:flex-col w-5/6 lg:w-full lg:my-20">
      <div className="w-1/3 lg:w-full h-full lg:h-screen relative p-4 lg:mb-20">
        <SectionHeader subtitle="Découvrez notre" subtitle2=" menu" title="brasseur" />
        <div className="flex border border-1 border-black/60 dark:border-white rounded-lg flex-col items-center transition ease-in-out duration-300 hover:border-cafeGold group h-[700px] bg-gradient-to-t from-gray-700 to-slate-800 text-white">
          <MenuBrasseur />
        </div>
      </div>

      <div className="w-1/3 lg:w-full h-full lg:h-screen relative p-4 lg:mb-20">
        <SectionHeader subtitle="Découvrez notre" subtitle2=" burger" title="du moment" />
        <div className="flex border border-1 border-black/60 dark:border-white rounded-lg flex-col items-center transition ease-in-out duration-300 hover:border-cafeGold group h-[700px]">
          <BurgerOfTheDay />
        </div>
      </div>

      <div className="w-1/3 lg:w-full h-full lg:h-screen relative p-4 lg:mb-20">
        <SectionHeader subtitle="Découvrez notre" subtitle2=" animation" title="à venir" />
        <div className="flex border border-1 border-black/60 dark:border-white rounded-lg flex-col items-center transition ease-in-out duration-300 hover:border-cafeGold group h-[700px]">
          <AnimationToCome />
        </div>
      </div>
    </div>
  );
};

export default DailyChange;
