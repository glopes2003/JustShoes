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

          <article>
            <div className="rounded pic">
              <img
                className="float-end m-1"
                src="../src/assets/heart.png"
                alt="favorite"
              ></img>
              <img
                src="../src/assets/4.png"
                alt="nike-court-vision-low-casual"
              ></img>
            </div>
            <div className="details fs-5">
              <p className="fw-medium">Tênis Nike Court Vision Low Casual</p>
              <p className="fw-semibold">R$ 200,00</p>
            </div>
          </article>

          <article>
            <div className="rounded pic">
              <img
                className="float-end m-1"
                src="../src/assets/heart.png"
                alt="favorite"
              ></img>
              <img
                src="../src/assets/5.png"
                alt="nike-air-jordan-1-mid-casual"
              ></img>
            </div>
            <div className="details fs-5">
              <p className="fw-medium">Tênis Air Jordan 1 Mid Casual</p>
              <p className="fw-semibold">R$ 419,99</p>
            </div>
          </article>

          <div>
            <div className=" rounded pic">
              <img
                className="float-end m-1"
                src="../src/assets/heart.png"
                alt="favorite"
              ></img>
              <img
              className="divv"
                src="../src/assets/6.png"
                alt="nike-air-force-1-'07-casual"
              ></img>
            </div>
            <div className="details fs-5">
              <p className="fw-medium">
                Tênis Nike Air Force 1 &rsquo;07 Casual
              </p>
              <p className="fw-semibold"> R$220,00</p>
            </div>
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-center align-items-center ">
        <button className="p-4 bg-transparent mt-5 mb-5 load fs-4 fw-semibold text-center">
          <img className="float-end " src="../src/assets/arrow-down.svg" alt="load-more-shoes"></img>
          CARREGAR MAIS
        </button>
      </div>
    </>
  );
}
export default Display;
