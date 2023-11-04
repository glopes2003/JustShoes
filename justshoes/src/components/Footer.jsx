import "../style/footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container1">
          <ul>
            <li>FALE CONOSCO</li>
            <li>TERMOS E CONDIÇÕES</li>
            <li>JustShoes</li>
            <li>POLÍTICA DE PRIVACIDADE</li>
            <li>AJUDA</li>
          </ul>
        </div>

        <div className="container2">
          <div>
            <p>&copy;JustShoes 2023. All RIGHTS RESERVED</p>
          </div>
          <div>
            <img src="../src/assets/facebook.svg" alt="facebook-logo" />
            <img src="../src/assets/instagram.svg" alt="instagram-logo" />
            <img src="../src/assets/linkedin.svg" alt="linkedin-logo" />
          </div>

          <div>
            <p>FORMAS DE PAGAMENTO ACEITAS</p>
          </div>
          <div>
            <img src="../src/assets/visa.svg" alt="visa-card-logo"></img>
            <img src="../src/assets/elo.svg" alt="elo-card-logo"></img>
            <img src="../src/assets/mastercard.svg" alt="mastercard-logo"></img>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
