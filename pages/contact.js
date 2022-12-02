import MainConteiner from './../components/MainConteiner';
import style from '../styles/Contact.module.css'
import  Link  from 'next/link';
import Title from './../components/title';
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      const data = {
        name,
        email,
        message,
      };
      console.log(data);
    }
  return (
    <MainConteiner>

        <div>
            <Title title='Контакт'/>
                <div>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22177.005441549583!2d60.607533139933075!3d41.55167907388646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc92846677fbf%3A0x8c0fc7c60473223b!2sMarkaziy%20Dehqon%20Bozor!5e0!3m2!1sru!2s!4v1669284622504!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
            <div className={style.contacts}>
                <div className={style.num}>
                    <h4>Телефон</h4>
                    <a href='tel:+380441234567'>+38 (044) 123-45-67</a>
                </div>
                <div className={style.email}>
                    <h4>E-mail</h4>
                    <h3>info@sitename.com</h3>
                </div>
                <div className={style.address}>
                    <h4>Адрес</h4>
                    <h3>г. Москва, 3-я улица Строителей, 25</h3>
                </div>
            </div>
            <div className={style.contact__form}>
                <h3>Напишите нам</h3>
                    <form onSubmit={handleSubmit} className={style.form}>
                        <input type="text" placeholder='Имя' onChange={e => setName(e.target.value)}/>
                        <input type="email" placeholder='E-mail' onChange={e => setEmail(e.target.value)} />
                        <input type="tel" placeholder='Телефон' onChange={e => setPhone(e.target.value)}/>
                        <textarea placeholder='Сообщение' id="message" type="text" rows="4" onChange={e => setMessage(e.target.value)}/>
                        <button  type="submit">Сообщение</button>
                    </form>
            </div>
        </div>

    </MainConteiner>
  )
}

export default Contact