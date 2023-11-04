import Display from "./components/Display";
import Footer from "./footer";

function Brand() {
  return (
    <>
      <article>
        <img src="../src/assets/shoes.png" alt="nike-shoes"></img>
      </article>

      <article>
        <div>
          <p>NIKE</p>
        </div>
        <div>
          <p>Ordenar por</p>
          <select name="filter">
            <option value="valor1">Nome: A-Z</option>
            <option value="valor2" selected>
              Nome: Z-A
            </option>
            <option value="valor3">Maior preço</option>
            <option value="valor4">Menor preço</option>
          </select>
        </div>
      </article>

      <article>
        <Display />
      </article>

      <article>
        <button>
          <img src="../src/assets/arrow-down.svg" alt="load-more-shoes"></img>
          CARREGAR MAIS
        </button>
      </article>

      <Footer />
    </>
  );
}
export default Brand;
