import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export const MyOrders = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80">
        <h1>My Orders</h1>
      </div>

      {context.order.map((order, index) => {
        return (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
            ;
          </Link>
        );
      })}
    </Layout>
  );
};
