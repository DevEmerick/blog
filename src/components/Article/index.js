import Post from "../Post";

const Article = () => {
  //fazer uma requisicao para uma API

  return (
    <section className="container">
      <h3>Articles</h3>
      <div className="mt-3 container-posts">
        <Post subtitle="tecnologia" title="O guia definitivo sobre o blog">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam et
          nam voluptatum nihil magni, quod esse aspernatur beatae ea distinctio,
          qui dolore cum corrupti tempore! Dignissimos atque eveniet dolorum
          exercitationem.
        </Post>
        <Post subtitle="fotografia" title="Quais as melhores cameras em 2021?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab in itaque
          qui facilis eos temporibus quibusdam. Officiis eaque, adipisci aperiam
          blanditiis at quaerat aspernatur placeat inventore nesciunt doloribus
          quam aut!
        </Post>
        <Post subtitle="cinema" title="Os 10 filmes com maior bilheteria">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem animi
          debitis suscipit quasi repellendus aspernatur voluptatibus modi quis
          vitae. Fuga earum optio veritatis at, ea deserunt impedit natus vero
          quia.
        </Post>
      </div>
    </section>
  );
};

export default Article;
