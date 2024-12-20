import styles from "./ArticleImage.module.scss";

const ArticleImage = (
  { imagePath, alt }: { imagePath: string; alt?: string },
) => {
  return (
    <div className={styles.articleImageContainer}>
      <img src={imagePath} alt={alt} />
    </div>
  );
};

export default ArticleImage;
