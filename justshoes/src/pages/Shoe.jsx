import Footer from "../Footer";
import "../style/shoe.css";

function Shoe() {
  return (
    <>
      <section>
        <article className="band">
          <div>
            <img
              src="../src/assets/delivery-truck.png"
              alt="delivery-truck"
            ></img>
            <span>
              <p>Frete grátis para compras acima de R$300,00!</p>
            </span>
            <span>
              <p>Parcele em até 10X sem juros</p>
            </span>
          </div>
        </article>
        <span className="brand-logo">
          <img src="../src/assets/nike-logo.svg" alt="nike-logo"></img>
        </span>
        <span className="title">
          <h1>Home / Nike / Tênis</h1>
        </span>
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
      </section>
    </>
  );
}

export default Shoe;
