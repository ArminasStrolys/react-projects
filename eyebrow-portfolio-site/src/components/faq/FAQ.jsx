import React from 'react';

export default function FAQ() {
  return (
    <div>
      <div className="faq">
        <div className="faq-split">
          <article className="faq-style">
            <ul>
              <li>
                <h3>Kam galima atlikti antakių laminavimą?</h3>

                <ol>
                  <li>Antakiams, kuriuose neišreikštas apeksas</li>
                  <li>Antakiai labai nepaklusnūs, krenta į apačią</li>
                  <li>
                    Antakių plaukeliai auga skirtingai: vertikaliai arba
                    horizontaliai
                  </li>
                  <li>Kietas plaukelis</li>
                </ol>
              </li>

              <li>
                <h3>Kam antakių laminavimo atlikti nerekomenduojama?</h3>
                <ol>
                  <li>Alergija medžiagų komponentams</li>
                  <li>Odos pažeidimai</li>
                  <li>Labai išretėję antakiai</li>
                  <li>Hormoniniai pakitimai</li>
                  <li>4 grupės antakių plaukai</li>
                </ol>
              </li>
              <li>
                <h3>
                  Kiek laiko turi praeiti po paskutinės antakių laminavimo
                  procedūros, kad galėčiau ją kartoti?
                </h3>
                <p>Kartojam procedūrą ne anksčiau kaip 2,5-3 mėn.</p>
              </li>
            </ul>
          </article>
          <article className="faq-style">
            <ul>
              <li>
                <h3>Kokia turėtų būti priežiūra po laminavimo procedūros?</h3>
                <b>Po procedūros pirmas 24 valandas:</b>
                <ol>
                  <li>Antakių nešlapinkite.</li>
                  <li>
                    Saugokite nuo garų ar itin didelės drėgmės, ilgai nebūkite
                    karštoje vonioje ar duše.
                  </li>
                  <li>Nesilankykite pirtyje ar soliariume.</li>
                  <li>
                    Makiažą akių srityje tepkite ar valykite neliečiant antakių.
                  </li>
                </ol>
                <b>Po 24 valandų:</b> 
                <ol>
                  <li>
                    Būtina išsiplauti antakius su šiltu vandeniu, tam, kad
                    nuplauti visas priemones.
                  </li>
                  <li>
                    Nuplovus priemones nuo antakių, galima prižiūrėti juos
                    įprastai.
                  </li>
                  <li>
                    Šukuokite švelniai, netampykite plaukelio, šukuokite pagal
                    plauko augimo kryptį.
                  </li>
                  <li>Henna dažais nedažome mažiausiai mėnesį laiko</li>
                  <li>
                    Naudokite aliejus, drėkinamuosius serumus. Po procedūros
                    būtina tepti aliejus minimaliai 3 savaites, o dar geriau
                    visada. Rekomenduojami aliejai: avokado, vynuogių kauliukų,
                    persikų, jojoba, migdolu, argano (tie, kurie drėkina
                    plaukelį).
                  </li>
                </ol>
              </li>
              <li>
                <h3>Kiek laiko išlieka antakių laminavimo efektas?</h3>
                <p>
                  Antakių laminavimo efektas išlieka nuo 6 iki 8 savaičių, kai
                  kurioms net ir iki 12 savaičių. Priklauso nuo Jūsų
                  fiziologijos bei antakių priežiūros namuose.
                </p>
              </li>
              <li>
                <h3>Ar kerpate plaukelius?</h3>
                <p>
                  Antakių plaukelių nekerpu. Kerpant plaukelius pasikeičia jų
                  struktūra, storis, spalva.
                </p>
              </li>
              <li>
                <h3>Antakių laminavimas - tai chemija?</h3>
                <p>Taip, tai cheminiai procesai plaukelio viduje</p>
              </li>
              <li>
                <h3>Ar tai gydomoji, atstatomoji procedūra?</h3>
                <p>Tikrai NE.</p>
              </li>
              <li>
                <h3>Ar būtina atlikti antakių dažymą po procedūros?</h3>
                <p>Nėra būtina.</p>
              </li>
              <li>
                <h3>Ar galima dažyti antakius su Henna po laminavimo?</h3>
                <p>Ne, iškart po laminavimo to daryti nerekomenduojama.</p>
              </li>
            </ul>
          </article>
        </div>
      </div>
      {/* <footer className="footer-faq">Copyrights © Lorenzia 2022.</footer> */}
    </div>
  );
}
