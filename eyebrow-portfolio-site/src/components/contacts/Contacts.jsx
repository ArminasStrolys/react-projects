import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

const Contacts = () => {
  return (
    <div className="contacts">
      <h2>Kontaktai</h2>
      <div>
        <h3>Darbo laikas:</h3>
        <p>Pirmadienis: 08:00 - 19:00</p>
        <p>Antradienis: 08:00 - 19:00</p>
        <p>Trečiadienis: 08:00 - 19:00</p>
        <p>Ketvirtadienis: 08:00 - 19:00</p>
        <p>Penktadienis: 08:00 - 19:00</p>
        <p>Šeštadienis: 10:00 - 15:00</p>
        <p>
          Sekmadienis: <b>Nedirbame</b>
        </p>
      </div>
      <br />
      <div>
        <h3>Socialiniai tinklai:</h3>
        <p>Facebook/link/antakiai</p>
        <i className="fb-icon">
          <FaFacebookSquare />
        </i>
        <p>Instagram/link/antakiai</p>
        <i className="ig-icon">
          <BsInstagram />
        </i>
        <p>Mob. tel.: +3701234567</p>
        <i className="phone-icon">
          <FiPhoneCall />
        </i>
        <p>E-mail: lor.antakiai@gmail.com</p>
        <i className="email-icon">
          <HiOutlineMail />
        </i>
      </div>
      <br />
      <div>
        Mes randamės: <b>PC SAVAS</b> Savanorių pr. 346, Kaunas 49450
      </div>
      <br />

      <h3>Susisiekite:</h3>
      <div>
        <form className="contact-us-form" action="">
          <input className="field-1" type="text" placeholder="Vardas" />
          <input className="field-2" type="text" placeholder="Pavardė" />
          <input className="field-3" type="email" placeholder="E-paštas" />
          <input className="field-4" type="text" placeholder="Jūsų žinutė" />
        </form>
      </div>
    </div>
  );
};

export default Contacts;
