/* eslint-disable react/prop-types */
import { useState } from "react";

function Shoe({ image, name, price }) {
  const [favorite, setFavorite] = useState(false);
  const [id, setId] = useState(false);

  const handleToggleFavorite = () => {
    setFavorite((previous) => !previous);
    setId((previous) => !previous);
  };

  return (
    <div>
      <div className="rounded pic">
        <img
          className="float-end m-1"
          id={id ? "popout" : ""}
          src={
            favorite
              ? "../src/assets/filled-heart.png"
              : "../src/assets/heart.png"
          }
          alt="favorite"
          onClick={handleToggleFavorite}
        />
        <img src={image} alt={name}></img>
      </div>
      <div className="details fs-5">
        <p className="fw-medium">{name}</p>
        <p className="fw-semibold">{price}</p>
      </div>
    </div>
  );
}

function Display() {
  return (
    <>
      <section className="d-flex justify-content-center align-items-center">
        <div className="display mb-5">
          <Shoe
            image="../src/assets/shoes-display/nike/1.png"
            name="Tênis Nike Air Force 1 Shadow Casual"
            price="250,00"
          />
          <Shoe
            image="../src/assets/shoes-display/nike/2.png"
            name="Tênis Air Jordan 1 Low Casual"
            price="320,99"
          />
          <Shoe
            image="../src/assets/shoes-display/nike/3.png"
            name="Tênis Nike Court Legacy Lift Casual"
            price="R$ 249,99"
          />
          <Shoe
            image="../src/assets/shoes-display/nike/4.png"
            name="Tênis Nike Court Vision Low Casual"
            price="R$ 200,00"
          />
          <Shoe
            image="../src/assets/shoes-display/nike/5.png"
            name="Tênis Air Jordan 1 Mid Casual"
            price="R$ 419,99"
          />
          <Shoe
            image="../src/assets/shoes-display/nike/6.png"
            name="Tênis Nike Air Force 1 &rsquo;07 Casual"
            price="R$220,00"
          />
        </div>
      </section>
      <div className="d-flex justify-content-center align-items-center ">
        <button className="p-4 bg-transparent mt-5 mb-5 load fs-4 fw-semibold text-center">
          <img
            className="float-end "
            src="../src/assets/arrow-down.svg"
            alt="load-more-shoes"
          ></img>
          CARREGAR MAIS
        </button>
      </div>
    </>
  );
}
export default Display;
