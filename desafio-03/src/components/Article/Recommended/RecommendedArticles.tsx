import ArticleCard from "../Card/ArticleCard";
import ArticleContent from "../Card/ArticleContent";
import ArticleImage from "../Card/ArticleImage";

import styles from "./RecommendedArticles.module.scss";

const articlesData = [{
  image: "/images/image-1.png",
  alt: "",
  title: "O que é linguagem de programação? Conheça as principais",
  content:
    "Uma das mais populares vertentes da tecnologia da informação, a área de...",
}, {
  image: "/images/image-2.png",
  alt: "",
  title:
    "Python: por que a linguagem é tão usada para Data Science e finanças?",
  content:
    "O mundo da programação conta com algumas opções de linguagem para...",
}, {
  image: "/images/image-3.png",
  alt: "",
  title: "GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários",
  content:
    "O popular serviço de repositório de código GitHub foi adquirido pela...",
}, {
  image: "/images/image-4.png",
  alt: "",
  title: "15 comandos no GIT que os desenvolvedores precisam saber",
  content: "Dominar os comandos GIT é uma habilidade que se conquista com...",
}, {
  image: "/images/image-5.png",
  alt: "",
  title: "GIT e GitHub: o que são e quais as diferenças entre eles?",
  content:
    "Git e GibHub são dois softwares de controle de versão essenciais para...",
}, {
  image: "/images/image-6.png",
  alt: "",
  title: "GitHub Copilot ganha integração com GPT-4 e interface conversacional",
  content: "O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...",
}];

function RecommendedArticles() {
  return (
    <section className={`container ${styles.articleSectionContainer}`}>
      <h2 className={styles.articleSectionTitle}>Artigos recomendados</h2>

      <ul className={styles.articleGrid}>
        {articlesData.map(({ alt, content, image, title }) => (
          <ArticleCard>
            <ArticleImage imagePath={image} alt={alt} />
            <ArticleContent title={title} content={content} />
          </ArticleCard>
        ))}
      </ul>
    </section>
  );
}

export default RecommendedArticles;
