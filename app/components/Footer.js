'use client';
import ExtraFooter from '../components/ExtraFooter';
import BookTable from './BookTable';
import Logo from './Logo';
import Map from './Map';
import SocialNetwork from './SocialNetwork';

const Footer = () => {
  return (
    // <footer className="w-full h-auto bg-gray-700 rounded-t-lg flex flex-row md:flex-col justify-between items-center px-10 pt-2 md:gap-3 font-Quick">
    //   <div className="w-1/3 md:w-full md:order-2 relative flex flex-col text-xl text-white gap-0">
    //     <h2 className="text-2xl">Restez connectés !</h2>
    //     <motion.a
    //       href="#"
    //       className="hover:underline"
    //       tabIndex="0"
    //       aria-label="Access to Facebook Page"
    //       target="_blank"
    //       whileHover={{ x: 5 }}
    //       whileTap={{ scale: 0.9 }}
    //     >
    //       Facebook
    //     </motion.a>
    //   </div>

    //   <div className="w-1/3 md:w-full md:order-1 flex flex-col justify-center place-items-center text-white gap-2">
    //     <Logo width={90} height={90} />
    //   </div>

    //   <div className="w-1/3 md:w-full md:order-3 flex flex-col items-end text-white text-xl ">
    //     <Link href="mailto:">info@cafedelaplace.com</Link>
    //     <Link href="tel:0033547871549">05.47.87.15.49</Link>
    //   </div>
    // </footer>

    <footer className="w-full lg:mx-2 pt-4 text-white bg-cafeBlack">
      {/* div du haut */}
      <div className="w-[95%] lg:w-full mx-auto  flex flex-row gap-4 justify-end items-center">
        <p>Navigation et </p>
        <BookTable />
      </div>
      {/* div du milieu */}
      <div className="w-[95%] lg:w-full mx-auto flex flex-row lg:flex-col flex-nowrap m-4 justify-between">
        <div className="w-1/2 lg:w-full lg:order-2 bg-cafeGold text-cafeBlack rounded-l-2xl lg:rounded-r-2xl">
          <div className="flex flex-row items-center justify-around">
            <Logo width={150} height={150} />
          </div>
          <div className="flex flex-row justify-start w-3/4 mx-auto gap-72 border border-solid border-blue-500 mt-6">
            <div className="flex flex-col">
              <h3 className="font-Oakes text-2xl uppercase">Adresse</h3>
              <p>39 Place Robert Bezos</p>
              <p>40420 Brocas</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-Oakes text-2xl uppercase">Contact</h3>
              <p>mail@mail.com</p>
              <p>05.47.87.15.49*</p>
            </div>
          </div>
          <div className="flex flex-row w-3/4 mx-auto mt-6 gap-6 justify-start items-center">
            <h3 className="font-Oakes text-2xl uppercase">Social</h3>
            <SocialNetwork color="fill-black hover:fill-white" />
          </div>
        </div>
        {/* div du bas */}
        <div className="w-1/2 lg:w-full lg:order-1 bg-cafeAlmond rounded-r-2xl lg:rounded-l-2xl p-4">
          <Map />
        </div>
      </div>
      <ExtraFooter />
    </footer>
  );
};

export default Footer;
