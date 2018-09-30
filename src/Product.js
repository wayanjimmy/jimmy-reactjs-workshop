import React from "react";

function Product(props) {
  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img alt="Sepatu Converse" src={props.product.imageSrc} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.product.name}</p>
              <div className="content">
                {props.product.desc}
                <br />
              </div>
              <h5>Rp {props.product.price}</h5>
              <button
                className="button is-primary"
                onClick={event => {
                  event.preventDefault();
                  props.onAddItemToCart(props.product);
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
