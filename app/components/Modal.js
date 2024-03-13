import { useEffect, useState } from 'react';
import saladeIcon, { ChefIcon, DeliveryIcon, SaladeIcon, SunIcon } from './Icons';

const Modal = ({ content, onClose }) => {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (content === 'food') {
      setTitle('La carte des Mets');
      fetch('foodData.json')
        .then((response) => response.json())
        .then((data) => setData(data));
    } else if (content === 'drinks') {
      setTitle('La carte des Boissons');
      fetch('drinksData.json')
        .then((response) => response.json())
        .then((data) => setData(data));
    } else if (content === 'burgers') {
      setTitle('La carte des Burgers');
      fetch('foodData.json')
        .then((response) => response.json())
        .then((data) => {
          const burgersData = data.Burgers;
          setData({ Burgers: burgersData });
        });
    } else if (content === 'pizzas') {
      setTitle('La carte des Pizzas');
      fetch('foodData.json')
        .then((response) => response.json())
        .then((data) => {
          const pizzasData = data.Pizzas;
          setData({ Pizzas: pizzasData });
        });
    }
  }, [content]);

  useEffect(() => {
    const modal = document.getElementById('myModal');
    if (modal) {
      if (content) {
        modal.showModal();
      } else {
        modal.close();
      }
    }
  }, [content]);

  return (
    <dialog id="myModal" className="h-auto w-11/12 p-5 bg-white rounded-md">
      {/* Modal content */}
      <div className="flex flex-col w-full h-auto">
        {data && (
          <>
            {/* Header */}
            <div className="flex w-full h-auto justify-center items-center">
              <div className="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold font-Quick">{title}</div>
              <div onClick={onClose} className="flex w-1/12 h-auto justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </div>
            {/* Modal Content */}
            {Object.entries(data).map(([category, items]) => (
              <div key={category} className="mt-6">
                <h3 className="text-4xl text-center font-Kristi">{category}</h3>
                {Array.isArray(items) &&
                  items.map((item, index) => (
                    <div key={index} className="flex flex-row justify-between mx-32 lg:mx-0 lg:mt-2">
                      <div className="flex flex-col lg:w-3/4 mt-2 lg:mt-0 ">
                        <div className="flex flex-row gap-6">
                          <h4 className="text-base font-medium font-Quick">{item.title}</h4>
                        </div>
                        <p className="text-sm font-Quick">{item.description}</p>
                      </div>
                      <div className="flex flex-row">
                        {item.homemade === 'yes' ? <ChefIcon className="fill-green-500 w-10 mr-3 lg:w-6 lg:mr-1 " /> : null}
                        {item.delivery === 'yes' ? <DeliveryIcon className="fill-green-500 w-10 mx-3 lg:w-6 lg:mx-1" /> : null}
                        {item.vegetarian === 'yes' ? <SaladeIcon className="fill-green-500 w-10 ml-3 lg:w-6 lg:ml-1" /> : null}
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm lg:text-xs font-bold font-Quick">{item.price} €</p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
            {/* End of Modal Content */}
          </>
        )}
      </div>
      {/* End of Modal content */}
    </dialog>
  );
};

export default Modal;
