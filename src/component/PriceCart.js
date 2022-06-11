import React from "react";
import "./pricecart.css";
import PriceCartItem from "./PriceCartItem";

const PriceCart = () => {
  let cartData = [
    {
      title: "free",
      price: 0,
      features: [
        {
          icon: <i class="fa-solid fa-check "></i>,
          text: "single user",
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "5GB storage",
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "unlimited public projects",
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "community access",
          display: true,
        },
        {
          icon: <i class="fa-solid fa-xmark"></i>,
          text: "unlimited private projects",
          display: false,
        },
        {
          icon: <i class="fa-solid fa-xmark"></i>,
          text: "dedicated phone support",
          display: false,
        },
        {
          icon: <i class="fa-solid fa-xmark"></i>,
          text: "free subdomain",
          display: false,
        },
        {
          icon: <i class="fa-solid fa-xmark"></i>,
          text: "monthly status reports",
          display: false,
        },
      ],
    },
    {
      title: "plus",
      price: 9,
      features: [
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: <strong>5 users</strong>,
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "50GB storage",
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "unlimited public projects",
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "community access",
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "unlimited private projects",
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "dedicated phone support",
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "free subdomain",
          display: true,
        },
        {
          icon: <i class="fa-solid fa-xmark"></i>,
          text: "monthly status reports",
          display: false,
        },
      ],
    },
    {
      title: "pro",
      price: 49,
      features: [
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: <strong>unlimited users</strong>,
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "150GB storage",
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "unlimited public projects",
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "community access",
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "unlimited private projects",
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "dedicated phone support",
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: (
            <p className="m-0">
              <strong>unlimited</strong> free subdomains
            </p>
          ),
          display: true,
        },
        {
          icon: <i class="fa-solid fa-check"></i>,
          text: "monthly status reports",
          display: true,
        },
      ],
    },
  ];

  return (
    <div className="price-cart-sec bg-primary">
      <div className="row">
        {cartData.map((val) => {
          return <PriceCartItem item={val} />;
        })}
      </div>
    </div>
  );
};

export default PriceCart;
