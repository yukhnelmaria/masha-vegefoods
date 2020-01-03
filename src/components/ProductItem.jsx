import React from "react";

export const ProductItem = ({config}) => {
  const { 
    name, 
    imageUrl, 
    priceOld, 
    priceSale, 
    price
  } = config;
  
  const statusElement = () => {
    let status = undefined;
    if (priceOld && priceSale) {
      status = Math.round((1 - (priceSale / priceOld)) * 100);
    }
    return status ? <span className="status">{status}%</span> : null;
  }

  return (
  <div className="product">
    <a href="#" className="img-prod">
      <img
        className="img-fluid"
        src={`./images/${imageUrl}`}
        alt={name}
      />
      {statusElement()}
      <div className="overlay" />
    </a>
    <div className="text py-3 pb-4 px-3 text-center">
      <h3>
        <a href="#">{name}</a>
      </h3>
      <div className="d-flex">
        <div className="pricing">
          <p className="price">
            { price && <span>{`${price}$`}</span> }
            { priceOld && <span className="mr-2 price-dc">{`${priceOld}$`}</span> }
            { priceSale && <span className="price-sale">{`${priceSale}$`}</span> }
          </p>
        </div>
      </div>
      <div className="bottom-area d-flex px-3">
        <div className="m-auto d-flex">
          <a
            href="#"
            className="add-to-cart d-flex justify-content-center align-items-center text-center"
          >
            <span>
              <i className="ion-ios-menu" />
            </span>
          </a>
          <a
            href="#"
            className="buy-now d-flex justify-content-center align-items-center mx-1"
          >
            <span>
              <i className="ion-ios-cart" />
            </span>
          </a>
          <a
            href="#"
            className="heart d-flex justify-content-center align-items-center "
          >
            <span>
              <i className="ion-ios-heart" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
)};
