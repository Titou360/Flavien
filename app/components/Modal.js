import { useEffect, useState } from 'react';



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
    <dialog id="myModal" className="h-auto w-11/12 md:w-1/2 p-5 bg-white rounded-md">
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
            {/* Modal Content */}
            {Object.entries(data).map(([category, items]) => (
              <div key={category} className="mt-6">
                <h3 className="text-4xl text-center font-Kristi">{category}</h3>
                {items.map((item, index) => (
                  <div key={index} className='flex flex-row justify-between mx-32'>
                    <div className="mt-2 flex flex-col">
                      <h4 className="text-base font-medium font-Quick">{item.title}</h4>
                      <p className="text-sm font-Quick">{item.description}</p>
                    </div>
                    <p className="text-sm font-bold font-Quick">{item.price} €</p>
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
