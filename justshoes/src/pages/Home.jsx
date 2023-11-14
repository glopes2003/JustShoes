import "../style/home.css";

function Home() {
  return (
    <>
      <section>
        <div>
          <h1>REAGE, CALÇA UM TÊNIS!</h1>
          <p>Sapatos são mais que um artigo de uso, são um estilo de vida</p>
          <button>
            <img src="../src/assets/arrow-up.svg"></img>Compre Agora
          </button>
          <img src="../src/assets/banner-sale.svg" alt="banner-sale"></img>
        </div>
      </section>

      <section>
        <p>Escolha a marca que mais combina com seu estilo!</p>
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
