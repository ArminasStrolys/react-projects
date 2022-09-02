import React from 'react';
import correction from '../../../images/correction.webp';

export default function Correction() {
  return (
    <article className="eyebrow-types">
      <img src={correction} alt="Eyebrow correction before and after" />
      <h3 className="services-title">Antakių korekcija</h3>
      <p>
        Procedūra atliekama tiek vyrams, tiek moterims. Antakių korekcijos metu
        suteikiama teisinga, veidui tinkama antakių forma, pašalinant
        nereikalingus plaukelius bei išgaunant švarų, nepriekaištingą antakio
        linkį. Procedūros metu yra apjungiamos dvi skirtingos technikos vaškas
        ir pincetas. Atlikus korekciją naudojamas raminamasis kremas, skirtas
        nuraminti paraudusią odą.
      </p>
    </article>
  );
}
