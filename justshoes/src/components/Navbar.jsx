import logo from "../assets/logo.svg";
import searchIcon from "../assets/search-icon.svg";
import profile from "../assets/profile.png";
import favorites from "../assets/heart.png";
import cart from "../assets/shopping bag.png";

import styles from "../style/navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <img className={styles.img_logo} src={logo} alt="Logo" />
        <ul>
          <li>OUTLET</li>
          <li>Adidas</li>
          <li>Converse</li>
          <li>Nike</li>
          <li>Puma</li>
          <li>Vans</li>
        </ul>
        <div className={styles.search_bar}>
          <img src={searchIcon} alt="search" />
          <span>Buscar</span>
        </div>
        <div className={styles.container_icons}>
          <img src={profile} alt="profile" />
          <img src={favorites} alt="favorites" />
          <img src={cart} alt="cart" />
          <span>0</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
