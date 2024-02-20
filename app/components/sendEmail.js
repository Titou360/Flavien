import emailjs from '@emailjs/browser';

const sendEmail = (templateParams) => {
  console.log('Sending email with params:', templateParams);

  emailjs.send('service_0tgc0zp', 'template_te9ly4m', templateParams, '3FFU4WATpppp1yugc').then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
      callback(error, null);
    }
  );
};

export default sendEmail;
