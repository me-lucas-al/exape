import cookies from "../../assets/cookies.jpg";
import appleTart from "../../assets/toffee-apple-tart.png";
import glutenFree from "../../assets/gluten-free-sweet-pastry.png"
import cupcakes from "../../assets/blackberry-cupcakes.jpg"
import styles from "./recipes.module.css";
export default function Recipes() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.firstContainer}>
          <img
            src={cookies}
            className={styles.cookies}
            alt="WHITE CHOCOLATE COOKIES"
          />
          <p className={styles.subtitles}>WHITE CHOCOLATE COOKIES</p>
        </div>
        <div className={styles.secondContainer}>
          <img
            src={appleTart}
            className={styles.appleTart}
            alt="TOFFEE APPLE TART"
          />
          <p className={styles.subtitles}>TOFFEE APPLE TART</p>
        </div>
    
        <div className={styles.thirdContainer}>
          <img
            src={glutenFree}
            className={styles.glutenFree}
            alt="GLUTEN FREE SWEET PASTRY"
          />
          <p className={styles.subtitles}>GLUTEN FREE SWEET PASTRY</p>
        </div>
        <div className={styles.fourthContainer}>
          <img
            src={cupcakes}
            className={styles.cupcakes}
            alt="BLACKBERRY CUPCAKES"
          />
          <p className={styles.subtitles}>BLACKBERRY CUPCAKES</p>
        </div>
      </div>
    </>
  );
}
