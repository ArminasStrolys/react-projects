import React from 'react';
import henna from '../../../images/henna.jpg';
import logo from '../../../images/logo-white.png';

export default function Henna() {
  return (
    <article className="eyebrow-types">
      <img
        className="first-img"
        src={henna}
        alt="Dyed eyebrows with henna before and after"
      />
      <img
        className="second-img"
        src={logo}
        alt="Eyebrow correction before and after"
      />
      <h3 className="services-title">
        Antakių dažymas Nick Mole Ekko Beauty Henna
      </h3>
      <p>
        Hennos veikimo principas yra stipresnis nei cheminių dažų. Henna dažome
        tuomet, kai norime nudažyti ne tik antakių plaukelius, tačiau ir odą.
        Spalva ant odos išlieka nuo 6 iki 14 dienų, o plaukeliuose net iki 4-6
        savaičių. Priklausomai nuo Jūsų fiziologinių savybių bei priežiūros.
      </p>
      <p>
        <b>Dažymas su Nick Mole Ekko Beauty Henna rekomenduojamas:</b>

        <ul>
          <li>taupantiems laiką</li>
          <li>norint ryškesnio ir ilgai išliekančio rezultato</li>
          <li>esant ploniems, silpniems plaukeliams, trūkstant apimties</li>
          <li>
            norint suformuoti taisyklingą antakių formą, ištaisyti asimetriją
          </li>
          <li> jautriems cheminiams dažams žmonėms</li>
          <li>norint atsiauginti plaukelius</li>
        </ul>
        <b> Procedūros eiga:</b>
        <ul>
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
