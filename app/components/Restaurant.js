import React from 'react';

const Restaurant = () => {
  return (
    <section id="#restaurant">
      <div>
        <div className="w-5/6 mx-auto flex flex-row justify-between gap-6">
          <div className="w-1/2 relative">
            <h2 className="uppercase text-4xl p-6">RESTAURANT</h2>
            <span className='absolute -top-6 left-0 m-4 font-Kristi text-5xl text-black/60 capitalize'>à propos <span className='normal-case'>du</span></span>
            <div className='flex flex-row'>
              <p className='w-1/2 text-black/60 p-4'>Cuisine de terroir, authentique et conviviale. Nous faisons confiance à la puissance locale au travers de ses producteurs et de leur savoir-faire</p>
              <p className='w-1/2 text-black/60 p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem beatae tenetur id quae officiis officia porro? Quis, assumenda. Ab, autem vel.</p>
            </div>
          </div>
          <div className="w-1/2 bg-red-600">Vidéo</div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
