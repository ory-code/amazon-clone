import Image from "next/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

function Product(props) {
  const dispatch = useDispatch();
  const MAX_RATING = 5;
  const MIN_RATING = 1;

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemsOnBasket = () => {
    const product = {
      // props.id,
      // props.name,
      // props.description,
      // props.price,
      // props.category,
      // props.image,
      // props.title,
      props,
hasPrime
    };
    console.log(product.props, product.hasPrime);
    // Sending the product as an action to the redux store the basket slice
    dispatch(addToBasket(product));
  };

  return (
    <>
      <div className="relative flex flex-col m-5  z-30 p-10 bg-white ">
        <p className="absolute top-2 right-2 text-xs italic text-gray ">
          {props.category}
        </p>
        <Image src={props.image} height={200} width={200} objectFit="contain" />
        <h4> {props.title} </h4>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=" h-5 text-yellow-400 mt-2 mb-2"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
        </div>
        <p className="text-xs  my-2 line-clamp-2"> {props.description} </p>

        <div className="mb-5">
          <Currency quantity={props.price} currency="EUR" />
        </div>
        {hasPrime && (
          <div className="flex items-center space-x-2 mt-5 ">
            <img
              src="https://links.papareact.com/fdw"
              alt="has prime product"
              className="w-12"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
        <button onClick={addItemsOnBasket} className="mt-auto button">
          Add to basket
        </button>
      </div>
    </>
  );
}

export default Product;
