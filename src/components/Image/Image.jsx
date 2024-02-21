import styles from "./Image.module.scss";

function Image(props) {
  return (
    <div className={`mb-24 ${styles.image}`}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default Image;
