import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsArrow90DegRight } from 'react-icons/bs';

const Contacts = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault(e);
  };

  return (
    <div>
      <div className="contacts">
        <div className="timesheet">
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
        <div className="social-links">
          <h3>Socialiniai tinklai:</h3>
          {/* ------------------- FB -------------------*/}
          <a
            href="https://www.instagram.com/lorbeautystudio_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="ig-link">
              <i className="fb-icon">
                <FaFacebookSquare />
              </i>
              <b> lorbeautystudio</b>
            </p>
          </a>
          <br />
          {/* ------------------- IG -------------------*/}
          <a
            href="https://www.instagram.com/lorbeautystudio_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="ig-link">
              <i className="ig-icon">
                <BsInstagram />
              </i>
              <b> lorbeautystudio_</b>
            </p>
          </a>
          <br />
          {/* ------------------- PH -------------------*/}
          <p className="ig-link">
            <i className="phone-icon">
              <FiPhoneCall />
            </i>
            <b> Tel.: +3701234567</b>
          </p>
          <br />
          {/* ------------------- MA -------------------*/}
          <p className="ig-link">
            <i className="email-icon">
              <HiOutlineMail />
            </i>
            <b> E-mail: lor.antakiai@gmail.com</b>{' '}
          </p>
        </div>

        <br />

        <h3>Susisiekite:</h3>
        <div>
          <form
            className="contact-us-form"
            onSubmit={(e) => handleFormSubmit(e)}
            action=""
          >
            <input className="field-1" type="text" placeholder="Vardas" />
            <input className="field-2" type="text" placeholder="Pavardė" />
            <input className="field-3" type="email" placeholder="E-paštas" />
            <textarea
              className="field-4"
              rows="5"
              cols="33"
              placeholder="Jūsų žinutė"
            ></textarea>
            <button className="send-btn" type="submit">
              Siųsti
            </button>
          </form>
          <br />
          <div>
            Mes randamės: <b>PC SAVAS</b> Savanorių pr. 346, Kaunas 49450
            <i className="arrow-icon">
              <BsArrow90DegRight />
            </i>
          </div>
          <div className="map-of-location">
            <iframe
              title="Lokacija"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2292.8966549027164!2d23.960906017443847!3d54.9222856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e718f6c185a0c7%3A0x1b7e0661a2f6dc00!2sSAVAS!5e0!3m2!1sen!2slt!4v1660559216633!5m2!1sen!2slt"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <footer className="footer-home-services-contacts">
        Copyrights © Lorenzia 2022.
      </footer>
    </div>
  );
};

export default Contacts;
