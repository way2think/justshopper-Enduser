import { useEffect, useState } from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
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
import CancellationRefundPolicy from "./pages/RefundPolicy/CancellationRefundPolicy";
import AboutUs from "./pages/Aboutus/AboutUs";
import DeliveryPolicy from "./pages/Delivery/DeliveryPolicy";
import TermsCondition from "./pages/Termsandcondition/TermsCondition";
import PrivacyPolicy from "./pages/Privacypolicy/PrivacyPolicy";
import Error404 from "./pages/404/Error404";
import { errorNotification } from "./utils/notifications";

export default function Router() {
  const dispatch = useDispatch();
  const { data: user, isFetching, isLoading, error } = useOnAuthListenerQuery();
  const { data: settings } = useGetSettingsQuery();
  const [authChecked, setAuthChecked] = useState(false);

  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // console.log("data: ", user);
    // if (user) {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      dispatch(setCartItems(JSON.parse(cartItems)));
    }
    // }

    if (user) {
      setAuthChecked(true);
      if (user === "no record found") {
        errorNotification("You don't have access to this website");
      }
    }
  }, [dispatch, user]);

  // console.log("Route - user?.isAuthenticated: ", user?.isAuthenticated);

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
        { path: "product/:id", element: <ProductDetails /> },
        { path: "favorites", element: <Wishlist /> },
        { path: "cart", element: <CartPage /> },
        {
          path: "profile",
          element: <AuthenticatedRoute element={<Profile />} key="Profile" />,
          // element: <Profile />,
        },
        {
          path: "orders",
          element: <AuthenticatedRoute element={<Order />} key="Profile" />,
          // element: <Order />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "cancellation-refund-policy",
          element: <CancellationRefundPolicy />,
        },
        {
          path: "shipping-delivery-policy",
          element: <DeliveryPolicy />,
        },
        {
          path: "terms-and-condition",
          element: <TermsCondition />,
        },
        {
          path: "privacy-policy",
          element: <PrivacyPolicy />,
          // element: <Order />,
        },
        {
          path: "404-error",
          element: <Error404 />,
          // element: <Order />,
        },
      ],
    },
  ]);

  if (!authChecked) {
    return <BackDropWithLoader />;
  }

  return routes;
}
