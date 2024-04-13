import { useEffect, useState } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashBoardLayout from "./Layout/dashboard/DashboardLayout";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contactus/ContactUs";
import Wishlist from "./pages/Wishlist/Wishlist";
import CartPage from "./pages/Cart/CartPage";
import ShopType from "./pages/Category/ShopType";
import ProductDetails from "./pages/Product/ProductDetails";
import Profile from "./pages/Profile/Profile";
import Order from "./pages/Order/Order";
import { useOnAuthListenerQuery } from "./api/auth";
import { useGetSettingsQuery } from "./api/api";
import BackDropWithLoader from "./component/Loader/BackDropWithLoader";
import { useDispatch } from "react-redux";
import { setCartItems } from "./store/cartSlice";

export default function Router() {
  const dispatch = useDispatch();
  const { data: user, isFetching, isLoading, error } = useOnAuthListenerQuery();
  const { data: settings } = useGetSettingsQuery();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // console.log("data: ", user);
    if (user) {
      const cartItems = localStorage.getItem("cartItems");
      if (cartItems) {
        dispatch(setCartItems(JSON.parse(cartItems)));
      }
    }

    setAuthChecked(true);
  }, [user]);

  console.log("Route - user?.isAuthenticated: ", user?.isAuthenticated);

  const AuthenticatedRoute = ({ element, ...rest }) =>
    user?.isAuthenticated ? element : <Navigate to="/" />;

  const routes = useRoutes([
    {
      path: "/",
      element: <DashBoardLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "contact-us", element: <ContactUs /> },
        {
          path: "shop-by-category",
          element: (
            <ShopType
              path="shop-by-category"
              pathName="Shop By Category"
              type="category"
            />
          ),
        },
        {
          path: "shop-by-theme",
          element: (
            <ShopType
              path="shop-by-theme"
              pathName="Shop By Theme"
              type="theme"
            />
          ),
        },
        { path: "product/:handle-id", element: <ProductDetails /> },
        { path: "favorites", element: <Wishlist /> },
        { path: "cart", element: <CartPage /> },
        {
          path: "profile",
          // element: <AuthenticatedRoute element={<Profile />} key="Profile" />,
          element: <Profile />,
        },
        {
          path: "orders",
          // element: <AuthenticatedRoute element={<Order />} key="Profile" />,
          element: <Order />,
        },
      ],
    },
  ]);

  if (!authChecked) {
    return <BackDropWithLoader />;
  }

  return routes;
}
