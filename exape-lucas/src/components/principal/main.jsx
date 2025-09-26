import avocado from "../../assets/chicken-avocado-pasta.jpg";
import veg from "../../assets/sausage-veg-traybake.jpg";
import Recipes from "../receitas/recipes";
import styles from "./main.module.css";
export default function Main() {
  return (
    <>
      <h2 className={styles.title}>LATEST RECIPES...</h2>
      <div className={styles.mainContainer}>
        <div className={styles.firstContainer}>
          <img
            src={avocado}
            className={styles.avocado}
            alt="CHICKEN AVOCADO PASTA"
          />
          <p className={styles.subtitles}>CHICKEN AVOCADO PASTA</p>
        </div>
        <div className={styles.secondContainer}>
          <img
            src={veg}
            className={styles.veg}
            alt="SAUSAGE AND VEG TRAYBAKE"
          />
          <p className={styles.subtitles}>SAUSAGE AND VEG TRAYBAKE</p>
        </div>
      </div>
      <Recipes />
    </>
  );
}
