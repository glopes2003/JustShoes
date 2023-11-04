import "../style/display.css";

function Display() {
  return (
    <>
      <section className="wrapper">
        <div className="display">
          <article>
            <div className="container">
              <img src="../src/assets/heart.png" alt="favorite"></img>
              <img src="../src/assets/1.png" alt="nike-air-force-1"></img>
            </div>
            <div className="info">
              <p>Tênis Nike Air Force 1 Shadow Casual</p>
              <p> R$ 250,00</p>
            </div>
          </article>

          <article>
            <div className="container">
              <img src="../src/assets/heart.png" alt="favorite"></img>
              <img
                src="../src/assets/2.png"
                alt="nike-air-jordan-1-low-casual"
              ></img>
            </div>

            <div className="info">
              <p>Tênis Air Jordan 1 Low Casual </p>
              <p>R$ 320,99</p>
            </div>
          </article>

          <article>
            <div className="container">
              <img src="../src/assets/heart.png" alt="favorite"></img>
              <img
                src="../src/assets/3.png"
                alt="nike-court-legacy-lift-casual"
              ></img>
            </div>
            <div className="info">
              <p>Tênis Nike Court Legacy Lift Casual</p>
              <p>R$ 249,99</p>
            </div>
          </article>

          <article>
            <div className="container">
              <img src="../src/assets/heart.png" alt="favorite"></img>
              <img
                src="../src/assets/4.png"
                alt="nike-court-vision-low-casual"
              ></img>
            </div>
            <div className="info">
              <p>Tênis Nike Court Vision Low Casual</p>
              <p>R$ 200,00</p>
            </div>
          </article>

          <article>
            <div className="container">
              <img src="../src/assets/heart.png" alt="favorite"></img>
              <img
                src="../src/assets/5.png"
                alt="nike-air-jordan-1-mid-casual"
              ></img>
            </div>
            <div className="info">
              <p>Tênis Air Jordan 1 Mid Casual</p>
              <p>R$ 419,99</p>
            </div>
          </article>

          <article>
            <div className="container">
              <img src="../src/assets/heart.png" alt="favorite"></img>
              <img
                src="../src/assets/6.png"
                alt="nike-air-force-1-'07-casual"
              ></img>
            </div>
            <div className="info">
              <p>Tênis Nike Air Force 1 &rsquo;07 Casual</p>
              <p> R$220,00</p>
            </div>
          </article>
        </div>
      </section>
      <div className="button">
        <button>
          <img src="../src/assets/arrow-down.svg" alt="load-more-shoes"></img>
          CARREGAR MAIS
        </button>
      </div>
    </>
  );
}
export default Display;
