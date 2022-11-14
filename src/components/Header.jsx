import React from "react";
import Image from "next/image";

//Next-Auth-v4
//import { useSession } from "next-auth/react"
import { signIn, signOut } from "next-auth/react";

const Header = () => {
  //const [session] = useSession()
  //const { data: session, status } = useSession()

  return (
    <header>
      {/* top */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* search */}
        <div className=" hidden sm:flex items-center bg-yellow-400 h-10 rounded-md cursor-pointer flex-grow hover:bg-yellow-500  ">
          <input
            type="text"
            className=" h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none p-4 "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" h-12 p-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              color="white"
            />
          </svg>
        </div>
        {/* right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
          <div onClick={signIn} className=" link ">
            <p className="hover:underline">
              {/* {session ? `${session.user.name}` : "SignIn"} */}
              Sacha
            </p>
            <p className="font-extrabold md:text-sm ">Account & Lists</p>
          </div>
          <div className=" link">
            <p>Returns </p>
            <p className="font-extrabold md:text-sm  ">& Orders</p>
          </div>
          <div className=" relative link flex items-center">
            <span className="absolute right-0 top-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              2
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <p className=" hidden md:inline font-extrabold md:text-sm mt-2 ">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6 ">
        <p className=" link flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-1 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex "> Electronics</p>
        <p className="link hidden lg:inline-flex "> Food</p>
        <p className="link hidden lg:inline-flex "> New Job for Sacha</p>
        <p className="link hidden lg:inline-flex "> Internship is good to</p>
        <p className="link hidden lg:inline-flex "> Web developper Junior</p>
      </div>
    </header>
  );
};

export default Header;
