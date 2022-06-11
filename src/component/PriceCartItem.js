import React from "react";
import "./pricecartitem.css";

const PriceCartItem = ({ item }) => {
  console.log("item=", item);
  return (
    <div className="col-lg-4 cart-item-1 my-4 ">
      <div className="cart-item-2 cart-item-bucket">
        <h5 className="cart-title text-muted text-center text-uppercase ">
          {item.title}
        </h5>

        <p className="cart-price text-center">
          ${item.price}
          <span className="cart-month">/month</span>
        </p>
        <hr />

        <div className="feature-item-container">
          {item.features.map((val) => {
            let d = val.display ? "" : "gray";

            return (
              <div className={`d-flex align-items-center gap-3 my-3 ${d}`}>
                {val.icon}
                <p className="text-capitalize m-0">{val.text}</p>
              </div>
            );
          })}
        </div>
        <button
          className="text-uppercase btn btn-primary py-3 cart-btn"
          style={{ width: "100%", borderRadius: "20px", fontWeight: "bold" }}
        >
          button
        </button>
      </div>
    </div>
  );
};

export default PriceCartItem;
