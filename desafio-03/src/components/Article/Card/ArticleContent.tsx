import styles from './ArticleContent.module.scss';

const ArticleContent = (
  { title, content }: { title: string; content: string },
) => {
  return (
    <div className={styles.articleContent}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default ArticleContent;
