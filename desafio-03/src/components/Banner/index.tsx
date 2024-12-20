import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <header className={styles.banner}>
      <article className={`${styles.bannerContainer} container`}>
        <div className={styles.bannerInfo}>
          <h1 className={styles.bannerTitle}>
            Encontre os{" "}
            <span className={styles.bannerTitleHighlight}>
              melhores artigos
            </span>{" "}
            de programação em um só lugar
          </h1>
          <h2 className={styles.bannerSubtitle}>
            Explore o topo da programação em um só lugar! Seu destino único para
            dicas e tendências atuais.
          </h2>
          <button type="button">BUSCAR ARTIGOS</button>
        </div>
        <div>
          <img src="/images/image.png" alt="" />
        </div>
      </article>
    </header>
  );
};

export default Banner;
