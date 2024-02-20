const Services = () => {
  return (
    <section id="services" className="w-5/6 h-screen my-4">
      <h4 className="text-center uppercase text-4xl my-8">Nos Services</h4>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col items-center justify-center pr-4">
          image
          <p className="text-center opacity-55">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex flex-col items-center justify-center px-4">
          image
          <p className="text-center opacity-55">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex flex-col items-center justify-center px-4">
          image
          <p className="text-center opacity-55">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex flex-col items-center justify-center pl-4">
          image
          <p className="text-center opacity-55">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className="w-full mx-auto flex flex-row justify-between gap-6">
        <div className="w-1/3 flex flex-col gap-6">
          <div id="find_us" className="bg-cafeGray w-full h-full flex flex-col justify-center items-center text-white px-6">
            <h4 className="uppercase mb-6">trouver nous ici</h4>
            <adress className="text-center my-2">
              39 Place Robert Bezos <br /> 40420 Brocas
            </adress>
            <a href="tel:0123456789">01.23.45.67.89</a>
            <p>info@lecafedelaplace.fr</p>
          </div>
          <div id="opening_times" className="">
            <div className=" bg-cafeGold w-full h-full flex flex-col justify-center items-center text-white px-6">
              <h4 className="uppercase mb-6">Heures d&apos;ouverture</h4>

              <div className="w-full flex flex-row justify-between items-center text-sm">
                <h5 className="uppercase">LUN</h5>
                <div>12.00 à 14.00 & 19.00 à 22.00</div>
              </div>

              <div className="w-full flex flex-row justify-between items-center text-sm">
                <h5 className="uppercase">MAR</h5>
                <div>12.00 à 14.00 & 19.00 à 22.00</div>
              </div>

              <div className="w-full flex flex-row justify-between items-center text-sm">
                <h5 className="uppercase">MER</h5>
                <div>12.00 à 14.00 & 19.00 à 22.00</div>
              </div>

              <div className="w-full flex flex-row justify-between items-center text-sm">
                <h5 className="uppercase">JEU</h5>
                <div>12.00 à 14.00 & 19.00 à 22.00</div>
              </div>

              <div className="w-full flex flex-row justify-between items-center text-sm">
                <h5 className="uppercase">VEN</h5>
                <div>12.00 à 14.00 & 19.00 à 22.00</div>
              </div>

              <div className="w-full flex flex-row justify-between items-center text-sm">
                <h5 className="uppercase">SAM</h5>
                <div>12.00 à 14.00 & 19.00 à 22.00</div>
              </div>

              <div className="w-full flex flex-row justify-between items-center text-sm">
                <h5 className="uppercase">DIM</h5>
                <div>12.00 à 14.00 & 19.00 à 22.00</div>
              </div>
            </div>
          </div>
        </div>

        <div id="burgers" className="bg-green-500 w-1/3">
          BURGER
        </div>
        <div id="pizzas" className="bg-pink-500 w-1/3">
          PIZZAS
        </div>

        {/* <div id="find_us" className="bg-cafeGray w-full h-full flex flex-col justify-center items-center text-white px-6">
          <h4 className="uppercase mb-6">trouver nous ici</h4>
          <adress className="text-center my-2">
            39 Place Robert Bezos <br /> 40420 Brocas
          </adress>
          <a href="tel:0123456789">01.23.45.67.89</a>
          <p>info@lecafedelaplace.fr</p>
        </div>
        <div id="opening_times" className="">
          <div className=" bg-cafeGold w-full h-full flex flex-col justify-center items-center text-white px-6">
            <h4 className="uppercase mb-6">Heures d&apos;ouverture</h4>

            <div className="w-full flex flex-row justify-between items-center text-sm">
              <h5 className="uppercase">LUN</h5>
              <div>12.00 à 14.00 & 19.00 à 22.00</div>
            </div>

            <div className="w-full flex flex-row justify-between items-center text-sm">
              <h5 className="uppercase">MAR</h5>
              <div>12.00 à 14.00 & 19.00 à 22.00</div>
            </div>

            <div className="w-full flex flex-row justify-between items-center text-sm">
              <h5 className="uppercase">MER</h5>
              <div>12.00 à 14.00 & 19.00 à 22.00</div>
            </div>

            <div className="w-full flex flex-row justify-between items-center text-sm">
              <h5 className="uppercase">JEU</h5>
              <div>12.00 à 14.00 & 19.00 à 22.00</div>
            </div>

            <div className="w-full flex flex-row justify-between items-center text-sm">
              <h5 className="uppercase">VEN</h5>
              <div>12.00 à 14.00 & 19.00 à 22.00</div>
            </div>

            <div className="w-full flex flex-row justify-between items-center text-sm">
              <h5 className="uppercase">SAM</h5>
              <div>12.00 à 14.00 & 19.00 à 22.00</div>
            </div>

            <div className="w-full flex flex-row justify-between items-center text-sm">
              <h5 className="uppercase">DIM</h5>
              <div>12.00 à 14.00 & 19.00 à 22.00</div>
            </div>
          </div>
        </div>
        <div id="pizzas" className="bg-pink-500">
          PIZZAS
        </div>
        <div id="burgers" className="bg-green-500">
          BURGER
        </div> */}
      </div>
    </section>
  );
};

export default Services;
