import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`container ${styles.footerContainer}`}>
      <p>
        Desafio Comunidade{" "}
        <a href="https://github.com/iuricode/desafios-frontend" target="_blank">
          CodeLab
        </a>. Desenvolvido por{" "}
        <a href="https://github.com/gustavomarim" target="_blank">
          Gustavo Dantas
        </a>.
      </p>
    </footer>
  );
};

export default Footer;
