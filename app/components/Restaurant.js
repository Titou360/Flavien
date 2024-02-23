import Image from 'next/image';
import ActionCook from '../../public/assets/img/Restaurant/cuisinier.jpg';

const Restaurant = () => {
  return (
    <section id="#restaurant">
      <div className="w-5/6 mx-auto my-40 flex flex-row justify-between gap-6 relative">
        <div className="w-2/3 relative mt-32 ml-10">
          <div id="Title_restaurant">
            <h2 className="uppercase text-4xl p-6">RESTAURANT</h2>
            <span className="absolute -top-6 left-0 m-4 font-Kristi text-5xl text-black/60 capitalize">
              à propos <span className="normal-case">du</span>
            </span>
          </div>

          <div className="flex flex-row">
            <p className="w-1/2 text-black/60 p-4 text-balance">
              Cuisine de terroir, authentique et conviviale. Nous faisons confiance à la puissance locale au travers de ses producteurs et de leur
              savoir-faire
            </p>
            <p className="w-1/2 text-black/60 p-4 text-balance">Une cuisine gourmande, des assiettes joliment dressées pour le plaisirs des papilles de toutes et tous. </p>
          </div>
        </div>
        <div className="flex flex-row justify-start items-end gap-4 absolute inset-0 bottom-7 z-10 mx-4">
          <div className="bg-red-400 w-1/6 h-1/3">BOX1</div>
          <div className="bg-green-400 w-1/6 h-1/3">BOX2</div>
          <div className="bg-blue-400 w-1/6 h-1/3">BOX3</div>
          <div className="bg-yellow-400 w-1/6 h-1/3">BOX4</div>
        </div>
        <div id="cook" className="w-1/3 h-full relative">
          <Image src={ActionCook} alt="Photo d'un cuisinier au travail" className="object-cover" />
          {/* Next line making a gradient over the pic */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
