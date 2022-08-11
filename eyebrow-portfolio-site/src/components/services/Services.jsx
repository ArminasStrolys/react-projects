import React from 'react';
import correction from '../../images/correction.webp';
import lamination from '../../images/lamination.webp';
import henna from '../../images/henna.jpg';

const PricesAndServices = () => {
  return (
    <div className="services">
      <div>
        <h2>Paslaugos</h2>
        <article className="eyebrow-types">
          <img src={correction} alt="Laminated eyebrows before and after" />
          <h3>Antakių korekcija</h3>
          <p>
            Procedūra atliekama tiek vyrams, tiek moterims. Antakių korekcijos
            metu suteikiama teisinga, veidui tinkama antakių forma, pašalinant
            nereikalingus plaukelius iš netinkamų vietų.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ea
            eligendi id dignissimos ullam inventore accusantium rerum ipsum
            sequi, commodi excepturi. Quo sunt maxime eos nam corrupti delectus
            veniam suscipit possimus numquam ad modi, doloribus, accusantium
            amet animi debitis non repudiandae in! Veritatis natus alias amet
            qui distinctio perspiciatis doloribus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit at sunt
            deserunt animi exercitationem aliquam dolore. Delectus autem
            perspiciatis adipisci impedit non ea enim, aspernatur vero est
            asperiores nobis consequuntur, repellendus numquam nulla rerum
            architecto temporibus animi optio deleniti laborum eos, laboriosam
            ullam. At ullam, iusto obcaecati maiores laborum vitae, inventore ab
            alias sed nulla ducimus qui corporis nesciunt. Minima.
          </p>
        </article>
        <article className="eyebrow-types">
          <img src={lamination} alt="Laminated eyebrows before and after" />
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ea
            eligendi id dignissimos ullam inventore accusantium rerum ipsum
            sequi, commodi excepturi. Quo sunt maxime eos nam corrupti delectus
            veniam suscipit possimus numquam ad modi, doloribus, accusantium
            amet animi debitis non repudiandae in! Veritatis natus alias amet
            qui distinctio perspiciatis doloribus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit at sunt
            deserunt animi exercitationem aliquam dolore. Delectus autem
            perspiciatis adipisci impedit non ea enim, aspernatur vero est
            asperiores nobis consequuntur, repellendus numquam nulla rerum
            architecto temporibus animi optio deleniti laborum eos, laboriosam
            ullam. At ullam, iusto obcaecati maiores laborum vitae, inventore ab
            alias sed nulla ducimus qui corporis nesciunt. Minima.
          </p>
        </article>
        <article className="eyebrow-types">
          <img src={henna} alt="Dyed eyebrows with henna before and after" />
          <h3>Antakių dažymas HENNA</h3>
          <p>
            Henna yra natūralus augalinis pigmentas, išgaunamas iš Heninės
            lavsonijos medžio. Labiausiai pamėgta henna dažų savybė yra jų ilgas
            išsilaikymas - antakių dažymas išlieka net iki 4 savaičių,
            priklausomai nuo Jūsų odos ir plaukelių gebėjimo išlaikyti pigmentą.
          </p>
          <p>
            Šios procedūros metu tobulai suformuojami antakiai, atsižvelgiant į
            visus Jūsų veido bruožus. Antakių korekcija vyksta pagal poreikį
            apjungiant kelias technikas - pincetą, vašką. Taip išgaunamas
            švarus, nepriekaištingas antakio linkis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            voluptate maiores dignissimos quis asperiores officiis. Facere
            possimus a repellat quaerat. Corrupti ea totam, accusamus dolorum
            saepe necessitatibus temporibus aspernatur reprehenderit quo id fuga
            incidunt. Magnam facilis beatae laboriosam numquam molestias aliquam
            laudantium? Enim odio sunt doloribus harum, aut placeat eum magni
            mollitia, dolorum aperiam laudantium et, libero eaque vero? Eum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            laudantium fugit aspernatur amet ut cupiditate! Ad soluta ipsum ut
            in distinctio aliquam et deleniti culpa facilis optio natus unde
            quaerat dolorum cupiditate, reiciendis error hic velit laudantium
            laborum repellat? Fugiat animi quaerat dolores iste iure.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            ipsum architecto dolores, vero eius debitis?
          </p>
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
