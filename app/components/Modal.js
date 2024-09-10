import { useEffect, useState } from 'react';
import { ChefIcon, DeliveryIcon, SaladeIcon } from './Icons';

const Modal = ({ content, onClose }) => {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [showDeliveryIcon, setShowDeliveryIcon] = useState(false);
  const [showPriceIcon, setShowPriceIcon] = useState(false);
  const [showServiceTag, setShowServiceTag] = useState(false);

  useEffect(() => {
    if (content === 'food') {
      setTitle('La carte des Mets');
      fetch('foodData.json')
        .then((response) => response.json())
        .then((data) => setData(data));
      setShowDeliveryIcon(true);
      setShowPriceIcon(true);
      setShowAdditionalInfo(true);
      setShowServiceTag(true);
    } else if (content === 'drinks') {
      setTitle('La carte des Boissons');
      fetch('drinksData.json')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setShowDeliveryIcon(true);
          setShowPriceIcon(true);
          setShowServiceTag(true);
        });
    } else if (content === 'burgers') {
      setTitle('La carte des Burgers');
      fetch('foodData.json')
        .then((response) => response.json())
        .then((data) => {
          const burgersData = data.Burgers;
          setData({ Burgers: burgersData });
          setShowDeliveryIcon(true);
          setShowPriceIcon(true);
          setShowAdditionalInfo(true);
          setShowServiceTag(true);
        });
      }  else if (content === 'children') {
      setTitle('Le menu des enfants à 10 €');
      fetch('childData.json')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setShowDeliveryIcon(false);
          setShowPriceIcon(false);
          setShowAdditionalInfo(false);
          setShowServiceTag(true);
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

  useEffect(() => {
    setShowAdditionalInfo(['food', 'burgers', 'children', 'traiteur'].includes(content));
  }, [content]);

  return (
    <dialog id="myModal" className="h-auto w-11/12 p-5 bg-white rounded-md">
      {/* Modal content */}
      <div className="flex flex-col w-full h-auto">
        {data && (
          <>
            {/* Modal Header */}
            <div className="flex h-auto justify-center items-center">
              <div className="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold font-Quick">{title}</div>
              <div onClick={onClose} className="flex w-1/12 h-auto justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
            {/* Condition pour afficher uniquement pour 'burgers', 'pizzas' et 'food' */}
            <div className="flex flex-row justify-center place-items-center mt-8">
              {showAdditionalInfo && (
                <div className="flex flex-row h-14">
                  <div className="flex flex-col justify-center place-items-center mr-3 ">
                    <ChefIcon className="w-full h-full fill-green-500" />
                    <p>Fait Maison</p>
                  </div>
                  <div className="flex flex-col justify-center place-items-center ml-3">
                    <SaladeIcon className="lg:mr-1 fill-green-500" />
                    <p>Plat végétarien</p>
                  </div>
                </div>
              )}
              {showDeliveryIcon && (
                <div className="flex flex-col justify-center place-items-center mx-3 h-14">
                  <DeliveryIcon className="fill-green-500" />
                  <p>À emporter possible</p>
                </div>
              )}
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
                          <div className="flex flex-row h-6">
                            {item.homemade === 'yes' ? <ChefIcon className="fill-green-500 mr-3 lg:mr-1 " /> : null}
                            {item.delivery === 'yes' ? <DeliveryIcon className="fill-green-500 mx-3 lg:mx-1" /> : null}
                            {item.vegetarian === 'yes' ? <SaladeIcon className="fill-green-500 ml-3 lg:ml-1" /> : null}
                          </div>
                        </div>
                        <p className="text-sm font-Quick">{item.description}</p>
                      </div>
                      {showPriceIcon && (
                        <div className="flex flex-col">
                          <p className="text-sm lg:text-xs font-bold font-Quick">{item.price} €</p>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            ))}
            {/* End of Modal Content */}
            <div>
              {showServiceTag && (
                <div className="flex flex-row justify-center place-items-center mt-14 mb-8 font-Quick font-bold text-sm">
                  <p>Prix nets - Service compris - Restaurant non fumeur, interdit aux animaux même tenus en laisse </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      {/* End of Modal content */}
    </dialog>
  );
};

export default Modal;
