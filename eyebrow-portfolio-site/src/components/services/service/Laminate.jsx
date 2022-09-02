import React from 'react';
import lamination from '../../../images/lamination.webp';

export default function Laminate() {
  return (
    <article className="eyebrow-types">
      <img src={lamination} alt="Laminated eyebrows before and after" />
      <h3 className="services-title">Antakių laminavimas</h3>
      <p>
        Tai puiki procedūra toms, kurios turi nepaklusnius antakių plaukelius.
        Po procedūros plaukeliai tampa paslankūs, juos galima guldyti norima
        kryptimi, taip savarankiškai formuoti taisyklingą antakių formą. Ši
        procedūra puikiai tinka toms, kurių antakių plaukeliai yra ploni, auga į
        skirtingas puses ir niekaip nepavyksta jų taisyklingai sušukuoti.
      </p>
      <p>
        Ši procedūra trunka maždaug apie valandą, tačiau laminavimo efektas
        išlieka apie 1-1.5 mėn, priklausomai nuo plaukelių storio bei
        priežiūros. Pirmiausia specialiu geliu padengiami antakių plaukeliai,
        vėliau jie sušukuojami (taip yra suteikiama jiems taisyklinga kryptis),
        uždengiama plevele ir laikoma 10 min., kad produktas kuo giliau
        įsiskverbtų į plaukelius ir būtų pasiektas maksimalus rezultatas. Po
        laminavimo, jei klientė pageidauja, atliekamas ir antakių dažymas.
        Tačiau reikėtų turėti omeny, kad po šios procedūros dažų pigmentas labai
        greitai įsiskverbia į plaukelius, todėl iš karto antakiai gali atrodyti
        kiek ryškoki. Antakių laminavimo privalumas yra tas, jog dažai
        plaukelyje išsilaiko ilgiau.
      </p>
      <p>
        Norint išsiaiškinti ar ši procedūra Jums tinkama tereikia turėti
        stiprios fiksacijos antakių gelį arba muiliuką. Sušukuokite plaukelius
        augimo kryptimi. Tokiu būdu išgautas efektas atrodo lygiai toks pat kaip
        ir po laminavimo procedūros, skirtumas tas, jog šis efektas yra labai
        laikinas, t.y. iki pirmojo plovimo.
      </p>
    </article>
  );
}
