import { MagnifyingGlass } from "phosphor-react";
import styles from "./searchBar.module.css";

export default function SearchBar() {
 return (
   <>
        <div className={styles.searchBarContainer}>
          <input type="text" placeholder="Pesquisar" className={styles.searchBar} />
        </div>

       
   </>
 );
}
