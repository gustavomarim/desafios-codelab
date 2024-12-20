import styles from "./ArticleCard.module.scss";

const ArticleCard = ({ children }: { children: React.ReactNode }) => {
  return <li className={styles.articleCard}>{children}</li>;
};

export default ArticleCard;
