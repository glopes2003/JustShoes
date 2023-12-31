/* eslint-disable react/prop-types */
import {useState} from 'react';
import logo from "../assets/logo.svg";
import profile from "../assets/profile.png";
// import favorites from "../assets/heart.png";
import cart from "../assets/shopping bag.png";

import LoginForm from "../components/Modal";

const Navbar = ({ cartCount }) => {
  const [showModal, setShowModal] = useState(false);
  const handleProfileClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="header p-5">
        <div>
          <nav className="navbar navbar-expand-lg pl-0 pr-0">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Logo"></img>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropDown">
              <ul className="navbar-nav fs-5 fw-medium mx-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="/" href="/">
                    OUTLET
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Adidas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Converse
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="/brand" href="/brand">
                    Nike
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Puma
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Vans
                  </a>
                </li>
              </ul>

              <span className=" d-flex flex-row justify-content-center align-items-center">
                <a className="btn btn-white btn-icon" onClick={handleProfileClick}>
                  <span className="icon">
                    <img src={profile} alt="profile" />
                  </span>
                </a>
                {/* <a className="btn btn-white btn-icon" href="#">
                  <span className="icon">
                    <img src={favorites} alt="favorites" />
                  </span>
                </a> */}
                <a className="btn btn-white btn-icon" href="#">
                  <span className="icon cart-img">
                    <img src={cart} alt="cart" />
                  </span>
                </a>
                <a className="btn btn-white btn-icon" href="#">
                  <span className="icon fs-4">
                  {cartCount}
                  </span>
                </a>
              </span>
            </div>
          </nav>
        </div>
      </section>

      <LoginForm showModal={showModal} handleClose={handleCloseModal} />

    </>
  );
};

export default Navbar;
