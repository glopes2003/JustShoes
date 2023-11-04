import Display from "./components/Display";
import Footer from "./footer";

import "./style/brand.css";

function Brand() {
  return (
    <>
      <article className="wallpaper">
        <img src="../src/assets/shoes.png" alt="nike-shoes"></img>
      </article>

      <article className="header">
        <span>
          <p>NIKE</p>
        </span>
        <span>
          <p>Ordenar por</p>
          <select className="filter" name="filter">
            <option value="valor1" selected>
              Nome: A-Z
            </option>
            <option value="valor2">Nome: Z-A</option>
            <option value="valor3">Maior preço</option>
            <option value="valor4">Menor preço</option>
          </select>
        </span>
      </article>

      <article>
        <Display />
      </article>

      <Footer />
    </>
  );
}
export default Brand;
