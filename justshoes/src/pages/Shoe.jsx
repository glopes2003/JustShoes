// import Footer from "../components/Footer";
import "../style/index.css";
import "bootstrap";

function Shoe() {
  return (
    <>
      <section className="band pt-4">
        <div>
          <img
            src="../src/assets/delivery-truck.png"
            alt="delivery-truck"
          ></img>
          <span className="band-span1">
            <p>Frete grátis para compras acima de R$300,00!</p>
          </span>
          <span className="band-span2">
            <p className="fw-semibold">
              Parcele em até <b className="fs-2">10X</b> sem juros
            </p>
          </span>
        </div>
      </section>
      <span className="d-flex justify-content-center p-5">
        <img src="../src/assets/nike-logo.svg"></img>
      </span>

      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Nike</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Tênis
            </li>
          </ol>
        </nav>
      </div>

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
      {/* 
        
        <article className="shoe-container">
          <div className="shoe-pics">
            <img src="../src/assets/nike-shoes.png" alt="nike-shoes"></img>
            <div className="arrow">
              <img src="../src/assets/preview-arrow.svg" alt="left-arrow"></img>
              <img src="../src/assets/next-arrow.svg" alt="next-arrow"></img>
            </div>
          </div>
        </article>

        <article className="info-wrapper">
          <div className="shoe-info">
            <h1>Tênis Air Jordan 1 Low Casual</h1>
            <img src="../src/assets/estrela.svg"></img>
            <img src="../src/assets/estrela.svg"></img>
            <img src="../src/assets/estrela.svg"></img>
            <img src="../src/assets/estrela.svg"></img>
            <img src="../src/assets/estrela.svg"></img>
            <p>R$320,99</p>
            <p>ou 10X de R$99,00 sem juros</p>
          </div>

          <div className="sizes">
            <h1>Tamanho</h1>
            <ul>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>32</li>
              <li>33</li>
              <li>34</li>
              <li>35</li>
              <li>36</li>
              <li>37</li>
              <li>38</li>
              <li>39</li>
              <li>40</li>
            </ul>
          </div>
        </article>

        <div className="action-buttons">
          <button>
            <img src="../src/assets/bolsa-de-compras-branca.png" alt="add-to-cart"></img>
          </button>
          <button>
            <img src="../src/assets/heart.png" alt="add-to-favorite"></img>
          </button>
        </div>
        <Footer />
      </section> */}
    </>
  );
}

export default Shoe;
