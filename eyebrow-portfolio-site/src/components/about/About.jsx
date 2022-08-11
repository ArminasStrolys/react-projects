import React from 'react';
import profile from '../../images/portrait.jpg';

export default function About() {
  return (
    <div className="about">
      <h2>Apie mus</h2>
      <div>
        <img src={profile} alt="" />
        <article className="bio">
          <p>Hello, my name is Loreta!</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur rem doloremque saepe voluptatum culpa. Cumque aliquid
            praesentium deserunt quasi nihil deleniti excepturi cum soluta velit
            dolores iure doloribus, quas libero tempore inventore voluptatem
            reprehenderit. Totam in, consequatur debitis minima ducimus impedit
            dolorum distinctio consequuntur sed accusamus, maiores placeat autem
            rerum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt
            necessitatibus natus officia, soluta magnam beatae eligendi. Porro
            consequatur totam quos earum a, blanditiis iusto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quisquam tempora eaque nostrum veritatis! Officia repellat ipsa
            laborum voluptatem quidem, tenetur provident voluptate hic
            consectetur inventore sint molestias commodi eum, similique nemo
            praesentium ducimus. Suscipit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            quae molestias cupiditate. Error odio dicta sunt sint culpa labore
            aspernatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            natus ducimus quia maiores. Debitis, numquam.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            nesciunt.
          </p>
        </article>
      </div>
    </div>
  );
}
