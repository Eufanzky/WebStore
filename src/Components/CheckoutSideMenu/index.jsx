import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">

      {context.cartProducts.map((product) => {
        return (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.images?.[0]}
            price={product.price}
          />
        );
      })}
      </div>
    </aside>
  );
};
