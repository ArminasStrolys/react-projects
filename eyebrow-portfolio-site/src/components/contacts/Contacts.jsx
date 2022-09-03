import React, { useRef } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import emailKeys from '../../utils/emailKeys';
import logoW from '../../images/logo-white.png';

const Contacts = () => {
  const form = useRef();

  const handleFormSubmit = (e) => {
    // e.preventDefault();
    emailjs
      .sendForm(
        emailKeys.SERVICE_ID,
        emailKeys.TEMPLATE_ID,
        form.current,
        emailKeys.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert('Ačiū, Jūsų žinutė išsiųsta!');
  };

  return (
    <div className="contacts-bg">
      <div className="contacts">
        <div className="social-links">
          <img src={logoW} alt="logo of LOR beauty studio" />
          {/* ------------------- FB -------------------*/}
          <a
            href="https://www.instagram.com/lorbeautystudio_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="icons">
              <i className="fb-icon">
                <FaFacebookSquare />
              </i>
              <p> lorbeautystudio</p>
            </p>
          </a>
          <br />
          {/* ------------------- IG -------------------*/}
          <a
            href="https://www.instagram.com/lorbeautystudio_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="icons">
              <i className="ig-icon">
                <BsInstagram />
              </i>
              <p> lorbeautystudio_</p>
            </p>
          </a>
          <br />
          {/* ------------------- PH -------------------*/}
          <a href="callto:+37063010954">
            <p className="icons">
              <i className="phone-icon">
                <FiPhoneCall />
              </i>
              <p>+3706 3010 954</p>
            </p>
          </a>
          <br />
          {/* ------------------- MA -------------------*/}
          <a href="mailto:lor.antakiai@gmail.com">
            <p className="icons">
              <i className="email-icon">
                <HiOutlineMail />
              </i>
              <p>lor.antakiai@gmail.com</p>
            </p>
          </a>
        </div>

        <div className="location-map">
          {/* <p>
            Mes randamės: <b>A. Juozapavičiaus pr.</b> 44, Kaunas 45220
          </p> */}
          <iframe
            title="Lokacija"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d835.5066959600674!2d23.940821182592888!3d54.86965717483533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e722ed78bda63b%3A0x8719e841092953ed!2sA.%20Juozapavi%C4%8Diaus%20pr.%2044%2C%20Kaunas%2045220!5e0!3m2!1sen!2slt!4v1662128138761!5m2!1sen!2slt"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <br />
        <div className="contact-form">
          <form
            ref={form}
            className="contact-us-form"
            onSubmit={(e) => handleFormSubmit(e)}
            action=""
          >
            <input
              className="field-1"
              name="user_name"
              type="text"
              placeholder="Vardas"
              required
            />
            <input
              className="field-2"
              name="user_email"
              type="email"
              placeholder="E-paštas"
              required
            />
            <input
              className="field-3"
              name="user_phone"
              type="tel"
              placeholder="Mob. tel. numeris"
              required
            />
            <textarea
              className="field-4"
              name="user_msg"
              rows="5"
              cols="33"
              placeholder="Jūsų žinutė"
              required
            ></textarea>
            <button className="send-btn" type="submit">
              Siųsti
            </button>
          </form>
        </div>
      </div>
      <div>
        <footer className="footer-home-services-contacts">
          Copyrights © Lorenzia 2022.
        </footer>
      </div>
    </div>
  );
};

export default Contacts;
