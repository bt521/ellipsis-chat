import Nav from "../nav/Nav";
import styles from "../layout/layout.module.scss";

function Layout({ children }) {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.navContainer}>
          <Nav />
        </div>

        <div className={styles.pageContainer}>{children}</div>
      </div>
    </>
  );
}

export default Layout;
