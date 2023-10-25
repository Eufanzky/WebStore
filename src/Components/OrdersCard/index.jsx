import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

export const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 border-black">
        <p>
            <span>01.02.23</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </p>
    </div>
  );
};
