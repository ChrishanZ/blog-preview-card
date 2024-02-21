import styles from "./Author.module.scss";

function Author(props) {
  return (
    <div
      className={`d-flex flex-row justify-content-center align-items-center ${styles.author}`}
    >
      <img className={`mr-10`} src={props.avatar} alt="avatar" />
      <p>{props.author}</p>
    </div>
  );
}

export default Author;
