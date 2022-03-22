import Link from "next/link";
import styles from "./nav.module.scss";
import { navData } from "./navData";
import profile from "../../chatdata.json";

function Nav() {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.profileContainer}>
          <img src={profile.profile.picture} />
        </div>
      </div>
      <ul className={styles.middle}>
        {navData.map((page) => {
          return (
            <>
              <li className={styles.navItem}>
                <Link href={page.path}>
                  <a>{page.icon}</a>
                </Link>
              </li>
            </>
          );
        })}
      </ul>
      <div className={styles.bottom}>logo</div>
    </>
  );
}

export default Nav;
