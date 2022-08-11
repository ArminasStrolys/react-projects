import React from 'react';
import lamination from '../../images/lamination.webp';

const PricesAndServices = () => {
  return (
    <div className="services">
      <div>
        <article>
          <h3>Antakių laminavimas</h3>
          <p>
            Antakių laminavimas yra procedūra, kuri skirta ne tik antakių formai
            išlaikyti, bet ir juos pamaitinti. Tai neinvazinė procedūra
            antakiams formuoti. Antakių laminavimui naudojama priemonė antakius
            pamaitina baltymais, vitaminais, mikroelementais ir keratinu. Visi
            šie komponentai yra svarbūs plaukelių augimui. Todėl antakių
            laminavimas tinkamas ne tik turinčioms vešlius antakius ir
            norinčioms idealios jų išvaizdos. Antakių laminavimas padeda
            moterims atsiauginti plaukelius ir džiaugtis gražesne jų išvaizda.
          </p>
          <img
            className="laminate"
            src={lamination}
            alt="Laminated eyebrows before and after"
          />
        </article>

        <table class="customTable">
          <thead>
            <tr>
              <th>Procedūra</th>
              <th>Kaina</th>
              <th>Trukmė</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Henna dažymas</td>
              <td>20$</td>
              <td>20 - 40 min</td>
            </tr>
            <tr>
              <td>Laminavimas</td>
              <td>30$</td>
              <td>1 - 1,5 h</td>
            </tr>
            <tr>
              <td>Korekcija</td>
              <td>8$</td>
              <td>15 - 30 min</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricesAndServices;
