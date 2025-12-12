import React from "react";
import pageNotFoundImg from "../assets/pageNotFound.png"; 
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">

      <div className="relative max-w-md w-full mb-2">
        <img
          src={pageNotFoundImg}
          alt="Page Not Found"
          className="w-full rounded-lg"
        />

     
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-2xl font-bold text-white drop-shadow-lg">
          Page Not Found
        </h1>
      </div>

   
      <Link
        to="/"
        className="px-6 max-w-md py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
      >
        Go Home
      </Link>

    </div>
  );
};

export default NotFoundPage;

