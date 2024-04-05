import { useEffect, useState } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashBoardLayout from "./Layout/dashboard/DashboardLayout";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contactus/ContactUs";
import Wishlist from "./pages/Wishlist/Wishlist";
import CartPage from "./pages/Cart/CartPage";
import ShopCategory from "./pages/Category/ShopCategory";
import ProductDetails from "./pages/Product/ProductDetails";
import Profile from "./pages/Profile/Profile";
import Order from "./pages/Order/Order";
import { useOnAuthListenerQuery } from "./api/auth";
import { useGetSettingsQuery } from "./api/api";

export default function Router() {
  const { data: user, isFetching, isLoading, error } = useOnAuthListenerQuery();
  const { data: settings } = useGetSettingsQuery();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    console.log("data: ", user);
    if (user) {
      setAuthChecked(true);
    }
  }, [user]);

  console.log("Route: ", settings);

  const AuthenticatedRoute = ({ element, ...rest }) =>
    user?.isAuthenticated ? element : <Navigate to="/" />;

  const routes = useRoutes([
    {
      path: "/",
      element: <DashBoardLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "contact-us", element: <ContactUs /> },
        { path: "shop-by-category", element: <ShopCategory /> },
        { path: "Product-details", element: <ProductDetails /> },
        { path: "favorites", element: <Wishlist /> },
        { path: "cart", element: <CartPage /> },
        {
          path: "profile",
          element: <AuthenticatedRoute element={<Profile />} key="Profile" />,
        },
        {
          path: "orders",
          element: <AuthenticatedRoute element={<Order />} key="Profile" />,
        },
      ],
    },
  ]);

  if (!authChecked) {
    return <div>Loading...</div>;
  }

  return routes;
}
