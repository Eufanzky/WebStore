import React from "react";
import { Layout } from "../../Components/Layout";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <Layout>
      <h1 className="font-medium text-xl mb-10">Welcome</h1>
      <div className="clase-especial-1 w-80 h-[450px] flex flex-col items-center justify-evenly sm:border-2 sm:border-black rounded-md font-medium py-10 px-10">
        <p className="w-full flex flex-row justify-start mt-10">
          <span className="mr-4">Email: </span>
          <span>eufanzky@platzi.com</span>
        </p>
        <p className="w-full flex flex-row justify-start mb-10">
          <span className="mr-4">Password: </span>
          <span>**************</span>
        </p>
        <Link className="border-2 border-black py-2 w-full text-center rounded-md hover:bg-gray-50" to="/">Log In</Link>
        <div className="text-blue-500 hover:underline">
          <a href="/">Forgot my password</a>
        </div>
        <button className="text-blue-500 hover:underline">Sign Up</button>
      </div>
    </Layout>
  );
};
