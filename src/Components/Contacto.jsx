import React, {useState} from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacto = () => {

  const [toSend, setToSend] = useState({

    from_name: '',
    message: '',
    user_email: '',

  });
  const [sent,setSent] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_48u8f14', 'template_nq6p8jm', form.current, 'P_42ms28hsNK4rkum')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setToSend({
        from_name: '',
        message: '',
        user_email: '',
      })
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });

  };

  return (
    <div id="main2" className='contacto form'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" value={toSend.from_name} onChange={handleChange}/>
        <label>Email</label>
        <input type="email" name="user_email" value={toSend.user_email} onChange={handleChange}/>
        <label>Message</label>
        <textarea name="message" value={toSend.message} onChange={handleChange}/>
        <input type="submit" value="Send" />
    </form>
    </div>
  );
};
export default Contacto