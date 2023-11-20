import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon, Bars3Icon } from "@heroicons/react/24/solid";
import ShoppingCart from "../ShoppingCart";
import { Menu } from "../Menu/Menu";

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

  //menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
    <>
      <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-5 text-sm font-light bg-white">
        <ul className="flex items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink to={`${isUserSignedOut ? "/sign-in" : "/"}`}>
              WebStore
            </NavLink>
          </li>
          <li className="hidden lg:flex">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? activeStyle : undefined;
              }}
            >
              All
            </NavLink>
          </li>
          <li className="hidden lg:flex">
            <NavLink
              to="/clothes"
              className={({ isActive }) => {
                return isActive ? activeStyle : undefined;
              }}
            >
              Clothes
            </NavLink>
          </li>
          <li className="hidden lg:flex">
            <NavLink
              to="/electronics"
              className={({ isActive }) => {
                return isActive ? activeStyle : undefined;
              }}
            >
              Electronics
            </NavLink>
          </li>
          <li className="hidden lg:flex">
            <NavLink
              to="/furniture"
              className={({ isActive }) => {
                return isActive ? activeStyle : undefined;
              }}
            >
              Furnitures
            </NavLink>
          </li>
          <li className="hidden lg:flex">
            <NavLink
              to="/phones"
              className={({ isActive }) => {
                return isActive ? activeStyle : undefined;
              }}
            >
              Phones
            </NavLink>
          </li>
          <li className="hidden lg:flex">
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
        <ul className="hidden items-center gap-3 lg:flex">
          {renderRightViewNavBar()}
          <li className="flex">
            <ShoppingCart />
          </li>
        </ul>

        <li className="flex lg:hidden" onClick={() => toggleMenu()}>
          <Bars3Icon className="w-6 h-6 fill-none stroke-black cursor-pointer" />
        </li>
      </nav>
      {isMenuOpen ? <Menu /> : <></>}
    </>
  );
};
