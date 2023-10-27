import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-5 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">WebStore</NavLink>
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
          <NavLink to="/sign-in">Sign in</NavLink>
        </li>
        <li className="flex">
          <ShoppingBagIcon className="w-6 h-6 text-black"></ShoppingBagIcon>{" "}
          <div>{context.count}</div>
        </li>
      </ul>
    </nav>
  );
};
