import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
  WhatsappLogo,
  YoutubeLogo,
} from "phosphor-react";
import person from "../../assets/person.jpg";
import styles from "./footer.module.css";
import Form from "./form/form";
export default function Footer() {
  return (
    <>
      <hr />
      <div className={styles.footerContainer}>
        <h2>Welcome! </h2>
        <div className={styles.welcome}>
          <img src={person} className={styles.imgPerson} alt="" />
          <p className={styles.subtitles}>
            I'm Lucas Almeida - the recipe developer and also a kitchen chef in
            the free time! Here you'll find plenty of delicious gluten free
            foodie inspiration. I hope you enjoy exploring!
          </p>
        </div>
        <div className={styles.logosContainer}>
            <FacebookLogo size={48} className={styles.logos}/>
            <InstagramLogo size={48} className={styles.logos}/>
            <PinterestLogo size={48} className={styles.logos}/>
            <YoutubeLogo size={48} className={styles.logos}/>
            <Envelope size={48} className={styles.logos}/>
        </div>
      </div>
      <Form />
    </>
  );
}
