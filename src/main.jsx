import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import OuterBody from "./components/OuterBody";
import Cart from "./components/Cart";
import Account from "./components/Account";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SearchContentBody from "./components/SearchContentBody";
import NewArrivals from "./components/NewArrivals";
import CarouselPage from "./components/CarouselPage";
import FeaturedContent from "./components/FeaturedContent";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import MobileNav from "./components/MobileNav";

// Header
// CategoryCarousel
// CategoryCarouselCard
// Ad
// Body
// MessageBar
// ItemCard
// FeaturedCard

const AppLayout = () => {
  return (
    <div>
      {/* <ScrollToTop /> */}
      <Header />
      <Outlet />
      <Footer />
      <MobileNav />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <OuterBody />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/search/:searchText",
        element: <SearchContentBody />,
      },
      {
        path: "/men-new-arrivals",
        element: <NewArrivals />,
      },
      {
        path: "/carousel/:id",
        element: <CarouselPage />,
      },
      {
        path: "/featuredContent/:id",
        element: <FeaturedContent />,
      },
      {
        path: "/product/:id",
        element: <ProductCard />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/user-info",
    element: <Account />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
