import React, { useContext, useState, useRef } from "react";
import { Layout } from "../../Components/Layout";
import { Link, Navigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

export const SignIn = () => {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState("user-info");
  const form = useRef(null);

  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(false);
    //Redirect
    return <Navigate replace to={"/"} />;
  };

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem("account", stringifiedAccount);
    context.setAccount(data);

    handleSignIn();
  };

  const renderLogIn = () => {
    return (
      <div className="clase-especial-1 w-80 h-[450px] flex flex-col items-center justify-evenly sm:border-2 sm:border-black rounded-md font-medium py-10 px-10">
        <p className="w-full flex flex-row justify-start mt-10">
          <span className="mr-4">Email: </span>
          <span className="border-b-2 border-black">{parsedAccount?.email}</span>
        </p>
        <p className="w-full flex flex-row justify-start mb-10">
          <span className="mr-4">Password: </span>
          <span className="border-b-2 border-black">{parsedAccount?.password}</span>
        </p>
        <Link to="/" className="w-full">
          <button
            className="w-full py-2 border-2 border-black text-center rounded-md bg-slate-300 hover:bg-gray-50"
            disabled={!hasUserAnAccount}
            onClick={() => handleSignIn()}
          >
            Log In
          </button>
        </Link>
        <div className="text-blue-500 hover:underline">
          <a href="/">Forgot my password</a>
        </div>
        <button
          className="w-full py-2 border-2 border-black rounded-md hover:bg-gray-50"
          disabled={hasUserAnAccount}
          onClick={() => setView("create-user-info")}
        >
          Sign Up
        </button>
      </div>
    );
  };

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-72">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="Peter"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={parsedAccount?.email}
            placeholder="hi@helloworld.com"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={parsedAccount?.password}
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <Link to="/">
          <button
            className="bg-black text-white w-full rounded-lg py-3"
            onClick={() => createAnAccount()}
          >
            Create
          </button>
        </Link>
      </form>
    );
  };
  const renderView = () =>
    view === "create-user-info" ? renderCreateUserInfo() : renderLogIn();

  return (
    <Layout>
      <h1 className="font-medium text-xl mt-12 mb-10">Welcome</h1>
      {renderView()}
    </Layout>
  );
};
