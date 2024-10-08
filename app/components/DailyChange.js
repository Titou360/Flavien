import AnimationToCome from './AnimationToCome';
import BurgerOfTheDay from './BurgerOfTheDay';
import MenuBrasseur from './MenuBrasseur';
import SectionHeader from './SectionHeader';

const DailyChange = () => {
  return (
    <section id="#dailychange" className="flex flex-row lg:flex-col w-5/6 lg:w-full">
      <div className="w-1/3 lg:w-full h-full relative p-4 lg:p-0 lg:my-30">
        <SectionHeader subtitle="Notre" subtitle2=" menu" title="brasseur" />
        <div className="flex border-solid border-2 border-transparent dark:border-cafeGold flex-col items-center transition ease-in-out duration-300 hover:border-cafeGold group h-[700px] bg-gradient-to-t from-gray-700 to-slate-800 text-white">
          <MenuBrasseur />
        </div>
      </div>

      <div className="w-1/3 lg:w-full h-full relative p-4 lg:p-0 lg:my-40">
        <SectionHeader subtitle="Notre" subtitle2=" burger" title="du moment" />
        <div className="flex border-solid border-2 border-transparent dark:border-cafeGold flex-col items-center transition ease-in-out duration-300 hover:border-cafeGold group h-[700px]">
          <BurgerOfTheDay />
        </div>
      </div>

      <div className="w-1/3 lg:w-full h-full lg:h-full relative p-4 lg:p-0 lg:my-20">
        <SectionHeader subtitle="Notre" subtitle2=" animation" title="à venir" />
        <div className="flex border-solid border-2 border-transparent dark:border-cafeGold flex-col items-center transition ease-in-out duration-300 hover:border-cafeGold group h-[700px]">
          <AnimationToCome />
        </div>
      </div>
    </section>
  );
};

export default DailyChange;
