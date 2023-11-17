/* eslint-disable react/prop-types */
import "bootstrap";

const Shoe = ({ handleAddToCart }) => {
  return (
    <>
      <section className="band pt-4">
        <div>
          <img
            src="../src/assets/delivery-truck.png"
            alt="delivery-truck"
          ></img>
          <span className="band-span1 mt-4">
            <p>Frete grátis para compras acima de R$300,00!</p>
          </span>
          <span className="band-span2 mt-4">
            <p className="fw-semibold">
              Parcele em até <b className="fs-2">10X</b> sem juros
            </p>
          </span>
        </div>
      </section>
      <span className="d-flex justify-content-center brand-logo">
        <img src="../src/assets/nike-logo.svg"></img>
      </span>

      <span className="d-flex text-sm-start ms-5 mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb fs-3 ">
            <li className="breadcrumb-item ">
              <a className="text-decoration-none text-black" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="text-decoration-none text-black" href="#">
                Nike
              </a>
            </li>
            <li
              className="breadcrumb-item active text-black"
              aria-current="page"
            >
              Tênis
            </li>
          </ol>
        </nav>
      </span>

      <section className="wrapper">
        <div className="d-flex justify-content-center align-items-center shoe-pics">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="../src/assets/nike-shoes.png"
                  className="d-block w-20"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../src/assets/image 26.png"
                  className="d-block w-20"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../src/assets/nike3.png"
                  className="d-block w-20"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section className="d-flex flex-collumn justify-content-evenly align-items-center column-gap-5">
        <div className="info">
          <span>
            <h1>Tênis Air Jordan 1 Low Casual</h1>
          </span>
          <span>
            <img src="../src/assets/estrela.svg"></img>
            <img src="../src/assets/estrela.svg"></img>
            <img src="../src/assets/estrela.svg"></img>
            <img src="../src/assets/estrela.svg"></img>
            <img src="../src/assets/estrela.svg"></img>
          </span>
          <div>
            <p className="mt-4">R$320,99</p>
            <p className="mt-2">ou 10X de R$99,00 sem juros</p>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center mt-5 sizes">
          <h1 className="mt-5">Tamanho</h1>
          <ul>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>32</li>
            <li>33</li>
            <li className="unavailable">34</li>
            <li>35</li>
            <li className="unavailable">36</li>
            <li>37</li>
            <li className="unavailable">38</li>
            <li className="unavailable">39</li>
            <li>40</li>
          </ul>
        </div>
      </section>

      <span className="d-flex justify-content-center align-items-center column-gap-5">
        <button className="action-buttons" onClick={handleAddToCart}>
          <a>
            <img
              src="../src/assets/bolsa-de-compras-branca.png"
              alt="add-to-cart"
            />
          </a>
        </button>
        {/* <button className="action-buttons bg-transparent">
          <a>
            <img src="../src/assets/heart.png" alt="add-to-favorite" />
          </a>
        </button> */}
      </span>
    </>
  );
};

export default Shoe;
