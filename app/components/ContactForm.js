'use client';
import sendEmail from '../components/sendEmail';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('incomplete'); // 'incomplete', 'sending', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!formData.lastName || !formData.email || !formData.phoneNumber || !formData.message) {
      setErrorMessage('Veuillez remplir tous les champs obligatoires 🧐');
      return;
    }

    setFormStatus('sending');
    setErrorMessage('');

    try {
      await sendEmail(formData);
      setFormData({ lastName: '', firstName: '', email: '', phoneNumber: '', message: '' });
      setFormStatus('success');
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
      setErrorMessage("😭 Une erreur s'est produite lors de l'envoi, réessayez");
    }
  };

  const resetForm = () => {
    setFormData({ lastName: '', firstName: '', email: '', phoneNumber: '', message: '' });
    setFormStatus('incomplete');
    setErrorMessage('');
  };

  useEffect(() => {
    const resetTimeout = setTimeout(() => {
      resetForm();
    }, 3000);

    return () => {
      clearTimeout(resetTimeout);
    };
  }, [formStatus]);

  return (
    <>
      <section className="w-full my-10 flex flex-col items-center text-dark">
        <div className="pt-0 flex flex-col items-center text-dark w-full min-h-screen">
          <div className="flex justify-center items-center w-full h-auto mt-10 sm:mt-0">
            <div className="container my-4 px-4 lg:px-3 lg:my-120">
              <div className="w-4/5 mx-auto p-20 lg:p-4 my-4 mr-auto rounded-2xl shadow-2xl bg-white items-center justify-center">
                <div className="flex justify-between">
                  <h2 className="font-bold font-Quick uppercase text-5xl sm:text-4xl">
                    Envoyez-nous un <span className="text-primary font-Quick">mess@ge</span>
                  </h2>
                </div>
                <form className="grid grid-cols-2 gap-5 lg:grid-cols-1 mt-5 lg:items-center lg:justify-center" onSubmit={submitHandler}>
                  <label htmlFor="firstName" className="sr-only">
                    Prénom
                  </label>
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Prénom*"
                    required
                  />
                  <label htmlFor="lastName" className="sr-only">
                    Nom de famille
                  </label>
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Nom de famille*"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="phoneNumber" className="sr-only">
                    Téléphone
                  </label>
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Téléphone*"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />

                  <div className="my-4 col-span-2 lg:col-span-1">
                    <label htmlFor="message" className="sr-only">
                      Votre Message
                    </label>
                    <textarea
                      placeholder="Votre Message*"
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    ></textarea>
                  </div>
                  <div className="my-2 w-2/5 md:w-full mx-auto col-span-2 lg:col-span-1">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      type="submit"
                      className={`flex items-center justify-center capitalise text-4xl font-bold tracking-wide py-6 px-24 lg:px-24 rounded-lg w-full font-Quick
              ${
                formStatus === 'sending'
                  ? 'bg-yellow-500'
                  : formStatus === 'success'
                  ? 'bg-green-500'
                  : formStatus === 'error'
                  ? 'bg-red-500'
                  : 'bg-gray-100'
              }
              text-light text-xl lg:text-lg focus:outline-none focus:shadow-outline`}
                      disabled={formStatus === 'sending'}
                    >
                      {formStatus === 'sending' ? "En cours d'envoi 😏" : formStatus === 'success' ? 'Envoi réussi 👍' : 'Envoyer'}
                    </motion.button>
                  </div>
                </form>
                {errorMessage && <div className="text-red-500">{errorMessage}</div>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
