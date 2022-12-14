import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const session = useSession();
  const createCheckoutSession =  async () => {

const stripe = await stripePromise;

//backend-checkout session

const checkoutSession = await axios.post('/api/create-checkout-session', {
  items: items,
  email: session.user.email
})

  }




  console.log("price", total);
  console.log("items", items);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col space-y-10 p-5 bg-white ">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your Basket is empty" : "Your Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct key={i} props={item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal {items.length} items
              </h2>
              <span className="font-bold">
               
                <Currency quantity={total} currency="EUR" />
              </span>
              <button
              role="link"
              onClick={createCheckoutSession}
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-300 text-gray-300 cursor-not-allowed "
                }`}
              >
                {!session ? "sign in to checkout" : "proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default checkout;
