import styles from "./menu.module.css";
import SearchBar from "./searchBar/searchBar";
export default function Menu() {
  return (
    <>
      <hr className={styles.line} />

      <div className={styles.menu}>
        <div className={styles.menuContainer}>
          <h2 className={styles.menuTopics}>Home</h2>
          <h2 className={styles.menuTopics}>Recipes</h2>
          <h2 className={styles.menuTopics}>About</h2>
          <h2 className={styles.menuTopics}>Contact</h2>
          <SearchBar />
        </div>

      </div>
      <hr className={styles.line} />

    </>
  );
}
