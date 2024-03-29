import React from 'react';
import correction from '../../../images/correction.png';
import correction_tools from '../../../images/correction-tools.jpg';

export default function Correction() {
  return (
    <article className="eyebrow-types">
      <img
        className="first-img"
        src={correction}
        alt="Eyebrow correction before and after"
      />
      <img
        className="second-img"
        src={correction_tools}
        alt="Eyebrow correction before and after"
      />
      <h3 className="services-title">Antakių korekcija</h3>
      <p>
        Procedūra atliekama tiek vyrams, tiek moterims. Antakių korekcijos metu
        suteikiama teisinga, veidui tinkama antakių forma, pašalinant
        nereikalingus plaukelius bei išgaunant švarų, nepriekaištingą antakio
        linkį. Procedūros metu yra apjungiamos dvi skirtingos technikos vaškas
        ir pincetas. Atlikus korekciją naudojamas raminamasis kremas, skirtas
        nuraminti paraudusią odą.
        <p>
          Naudojamas braziliškas vaškas
          <b> Better Waxing Technology. </b>
          Priemonė idealiai pašalina bet kokio tipo plaukelius. Tinkama naudoti
          depiliuojant: veido, bikini, pažastų zonas.
        </p>
      </p>
      <div className="hidden-img-1"></div>
    </article>
  );
}
