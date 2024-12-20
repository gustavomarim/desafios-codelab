import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contactContainer}>
      <form>
        <h2>Entre em Contato</h2>
        <input type="text" name="name" id="name" placeholder="Nome" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <textarea name="message" id="message" placeholder="Mensagem"></textarea>
        <button type="submit">ENTRAR EM CONTATO</button>
      </form>
    </section>
  );
};

export default Contact;
