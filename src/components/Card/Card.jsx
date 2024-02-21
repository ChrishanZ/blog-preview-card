import styles from "./Card.module.scss";
import Tag from "../Tag/Tag";
import Image from "../Image/Image";
import Author from "../Author/Author";
import data from "../../assets/data/data.json";

function Card() {
  const article = data;
  return (
    <div className={`d-flex align-items-start flex-column ${styles.card}`}>
      <Image src={article.image.srcImage} alt={article.image.altImage} />
      <Tag tag={article.theme} />
      <p className={`mb-24 ${styles.date}`}>{article.datePublished}</p>
      <p className={`mb-12 ${styles.title}`}>{article.titleArticle}</p>
      <p className={`mb-24 ${styles.description}`}>
        {article.descriptionArticle}
      </p>
      <Author author={article.author.fullName} avatar={article.author.avatar} />
    </div>
  );
}

export default Card;
