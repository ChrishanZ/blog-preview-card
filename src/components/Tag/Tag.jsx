import styles from "./Tag.module.scss";

function Tag(props) {
  return <div className={`mb-24 ${styles.tag}`}>{props.tag}</div>;
}

export default Tag;
