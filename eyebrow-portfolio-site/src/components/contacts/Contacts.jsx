import React from 'react';

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
        <p>Instagram/link/antakiai</p>
        <p>Mob. tel.: +3701234567</p>
        <p>E-mail: lor.antakiai@gmail.com</p>
      </div>
      <br />
      <div>
        Mes randamės: <b>PC SAVAS</b> Savanorių pr. 346, Kaunas 49450
      </div>
      <br />

      <h3>Susisiekite:</h3>
      <div>
        <form action="">
          <input type="text" placeholder="Vardas" />
          <input type="text" placeholder="Pavardė" />
          <input type="email" placeholder="E-paštas" />
          <input type="text" placeholder="Jūsų žinutė" />
        </form>
      </div>
    </div>
  );
};

export default Contacts;
