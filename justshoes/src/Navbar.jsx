import logo from '../src/assets/logo.svg';
import searchIcon from '../src/assets/search-icon.svg';
import profile from '../src/assets/profile.png';
import favorites from '../src/assets/heart.png';
import cart from '../src/assets/shopping bag.png';

import styles from './style/navbar.module.css'

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