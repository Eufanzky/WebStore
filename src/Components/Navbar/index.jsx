import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import ShoppingCart from "../ShoppingCart";

export const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  //Sign out variables
  const signOut = localStorage.getItem("signOut");
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignedOut = context.signOut || parsedSignOut;

  //Account variables
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignOut = () => {
    const strigifiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", strigifiedSignOut);
    context.setSignOut(true);
  };

  const renderRightViewNavBar = () => {
    if (hasUserAnAccount && !isUserSignedOut) {
      return (
        <>
          <li>
            <NavLink to="/">eufanzky@platzi.com</NavLink>
          </li>
          <li>
            <NavLink to="/my-orders">My orders</NavLink>
          </li>
          <li>
            <NavLink to="/my-account">My account</NavLink>
          </li>
          <li>
            <NavLink to="/sign-in" onClick={() => handleSignOut()}>
              Sign out
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <li>
          <NavLink to="/sign-in" onClick={() => handleSignOut()}>
            Sign In
          </NavLink>
        </li>
      );
    }
  };

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-5 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to={`${isUserSignedOut ? "/sign-in" : "/"}`}>
            WebStore
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/phones"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Phones
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        {renderRightViewNavBar()}
        {/* <li>
          <NavLink to="/">eufanzky@platzi.com</NavLink>
        </li>
        <li>
          <NavLink to="/my-orders">My orders</NavLink>
        </li>
        <li>
          <NavLink to="/my-account">My account</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in" onClick={() => handleSignOut()}>
            Sign out
          </NavLink>
        </li> */}
        <li className="flex">
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  );
};
