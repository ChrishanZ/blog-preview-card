import styles from "./Screen.module.scss";
import Card from "../Card/Card";

function Screen() {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.screen}`}
    >
      <Card />
    </div>
  );
}

export default Screen;
