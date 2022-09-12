import React from 'react';
import bronsun from '../../../images/bronsun.png';
import logo from '../../../images/logo-white.png';

export default function Laminate() {
  return (
    <article className="eyebrow-types">
      <img
        className="first-img"
        src={bronsun}
        alt="Laminated eyebrows before and after"
      />
      <img
        className="second-img-float"
        src={logo}
        alt="Eyebrow correction before and after"
      />
      <h3 className="services-title">Antakių dažymas Bronsun</h3>
      <p>
        Blakstienų ir antakių dažai su hennos efektu be amoniako. Tolygiai dažo
        odą ir plaukus, pasirenkant intensyvumą, galima sukurti labai natūralių
        antakių efektą arba suteikti sodrų ir ryškų atspalvį! Dažant antakius
        dažai odoje išlieka iki 10 dienų, plaukelyje iki 4 savaičių.
        Priklausomai nuo Jūsų fiziologinių savybių bei priežiūros.
      </p>
      <p>
        <b>Dažymas su Bronsun antakių dažais rekomenduojamas:</b>
        <ul>
          <li> norint suformuoti taisyklingą antakių formą</li>
          <li>norint ryškaus, sodraus efekto</li>
          <li> paslėpti seną permanentą</li>
        </ul>
        <b> Procedūros eiga:</b>
        <ul className="henna-list">
          <li>Odos paruošimas (demakiažas / pilingas / nuriebalinimas)</li>
          <li>Formos parinkimas</li>

          <li>Dažymas</li>
          <li>Korekcija (pincetas / vaškas)</li>

          <li>Plaukelio suguldymas</li>
          <li>Antakių zonos makiažas</li>
        </ul>
      </p>
    </article>
  );
}
