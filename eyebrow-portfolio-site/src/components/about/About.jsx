import React from 'react';
import profile from '../../images/portrait.jpg';

export default function About() {
  return (
    <div className="about">
      <div>
        <img src={profile} alt="" />
        <article className="bio">
          <p>
            Sveiki, aš - <b>Loreta</b>
          </p>
          <p>
            Save atradau antakių dažyme dar būdama paauglė, tačiau rimtai apie
            šią sritį susimąsčiusi nebuvau. Baigusi mokyklą ir atvykusi gyventi
            į Kauną išbandžiau įvairias veiklos sritis, tačiau giliai širdyje
            man to neužteko. Jaunatviškas užsispyrimas, ambicijos, tikėjimas
            savimi mane vedė prie to, kas man teikia džiaugsmą. Dabar galiu
            drąsiai teigti, jog esu ten, kur ir turiu būti!
          </p>
          <h3>Mane apibūdinančios pagrindinės savybės:</h3>
          <p>
            Kruopštumas - jis man padeda išgauti tikslias, lygias antakių
            linijas, kurios yra kiekvienos moters siekiamybė.
          </p>
          <p>
            Atsargumas - stengiuosi išvengti klaidų arba operatyviai pastebėti
            taisytinas vietas.
          </p>
          <h3>Mano misija:</h3>
          <p>
            Prisidėti prie kiekvienos grožio atskleidimo. To siekiu teikdama
            antakių dažymo, laminavimo paslaugas.
          </p>
          <h3>Mano vizija:</h3>
          <p> Kurti pasitikėjimą kliento atžvilgiu po pirmojo susitikimo.</p>
        </article>
      </div>
    </div>
  );
}
