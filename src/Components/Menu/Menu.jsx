import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import ShoppingCart from "../ShoppingCart";

export const Menu = () => {
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
          <li>{parsedAccount?.email}</li>
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
    <div className="w-full z-10 py-5 px-10 flex lg:hidden flex-col items-center justify-evenly fixed bg-white text-black list-none text-lg font-light top-[67px]">
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
      {renderRightViewNavBar()}
    </div>
  );
};
