import styles from "./form.module.css";
export default function Form() {
  return (
    <>
    <hr />
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <h1 className={styles.title}>WANT EVERY NEW RECIPE STRAIGHT TO YOUR INBOX?</h1>
          <p className={styles.subtitles}>
            Sign up to my mailing list <span>*</span>
          </p>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your email here"
          />
          <button className={styles.button}>SUBSCRIBE</button>
        </div>
      </div>
    </>
  );
}
