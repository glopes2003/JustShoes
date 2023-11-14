import "../style/home.css";

function Home() {
  return (
    <>
      <section className="d-flex justify-content-between align-items-center ps-5 banner-sale">
        <div>
          <h1 className="fw-bold banner-title">REAGE, CALÇA UM TÊNIS!</h1>
          <p className="fw-medium my-5 banner-subtitle">
            Sapatos são mais que um artigo de uso, são um estilo de vida!
          </p>
          <button className="rounded-pill fw-medium buy-button">
            Compre Agora
            <img
              className="d-inline-block position-absolute ms-3 "
              src="../src/assets/arrow-up.svg"
            ></img>
          </button>
        </div>
        <img
          className="ms-5 overflow-hidden"
          src="../src/assets/banner-sale.svg"
          alt="banner-sale"
        ></img>
      </section>

      <section className="brand-options my-5 p-5">
        <p className="d-flex justify-content-between align-items-center fs-2">
          Escolha a marca que mais combina com seu estilo!
        </p>
        <img src="../src/assets/adidas.svg"></img>
        <img src="../src/assets/converse.svg"></img>
        <img src="../src/assets/nike.svg"></img>
        <img src="../src/assets/puma.svg"></img>
        <img src="../src/assets/vans.svg"></img>
      </section>
    </>
  );
}

export default Home;
