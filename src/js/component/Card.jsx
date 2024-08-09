import React from "react";

const Card = () => {
  return (
    <div className="border border-secondary shadow-md" style={{ width: "280px"}}>
      <div
        className="bg-secondary d-flex justify-content-center align-items-center font-white fs-3"
        style={{ height: "200px", width: "100%" }}
      >
        500 x 325
      </div>
      <div className="d-flex flex-column align-items-center">
        <h4 className="text-center mt-2">Cart title</h4>
        <p className="text-center p-2 m-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          aut corrupti! Quod consectetur quibusdam, quasi similique veritatis
          omnis nam molestias?
        </p>
        <div className="bg-light w-100 d-flex justify-content-center p-2" style={{height: '100%'}}>
          <button class="btn btn-primary fw-bold" type="submit">
            Fint Out More!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
