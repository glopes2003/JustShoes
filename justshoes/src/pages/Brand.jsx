import Display from "../components/Display";

import "../style/index.css";

function Brand() {
  return (
    <>
      <span>
        <img className="banner mx-auto d-block" src="../src/assets/shoes.png" alt="nike-shoes"></img>
      </span>

      <section className="d-flex justify-content-between align-items-center header p-5">
        <span>
          <p>NIKE</p>
        </span>
        <span className="d-flex flex-row">
          <p className="fs-2">Ordenar por</p>
          <select className="text-center fs-5 fw-medium rounded px-4 ms-4" name="filter">
            <option value="valor1" selected>
              Nome: A-Z
            </option>
            <option value="valor2">Nome: Z-A</option>
            <option value="valor3">Maior preço</option>
            <option value="valor4">Menor preço</option>
          </select>
        </span>
      </section>

        <Display />
    </>
  );
}
export default Brand;
