import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import {
  ShoppingCartContext,
  ShoppingCartProvider,
  initializeLocalStorage,
} from "../../Context";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import { Navbar } from "../../Components/Navbar";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
import "./App.css";
import { useContext } from "react";

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext);
  //Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  //Sign Out
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
  // Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = parsedSignOut
    ? Object.keys(parsedSignOut).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
  const isUserSignOut = context.signOut || parsedSignOut;

  let routes = useRoutes([
    {
      path: "/",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    {
      path: "/:category",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/my-orders/last",
      element: <MyOrder />,
    },
    {
      path: "/my-orders/:id",
      element: <MyOrder />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
  ]);

  return routes;
};

function App() {
  initializeLocalStorage();
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <div>
          <CheckoutSideMenu />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
