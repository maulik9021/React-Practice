import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import ImageSlider from "./components/Imageslider";
import DropDown from "./components/Dropdownmenu";
import { countries } from "./utils/contents";


const GroceryStore = lazy(() => import("./components/GroceryStore"));

const AboutUsPage = lazy(() => import("./components/About"));

const AppLayout = () => {
   
   return (
      <div className="app">
         <Header />
         <Outlet />
         {/* <ImageSlider />
         <DropDown key={countries.value}/> */}
      </div>
   );
}

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      children: [
         {
            path: "/",
            element: <Body/>
         },
         {
            path: "/about",
            element: <Suspense fallback={<h1>Loading....</h1>} ><AboutUsPage /></Suspense>
         },
         {
            path: "/contact",
            element: <ContactUs />
         },
         {
            path: "/grocery",
            element: <Suspense fallback={<h1>Loading....</h1>} ><GroceryStore /></Suspense>
         },
         {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />
         }
      ],
      errorElement: <Error />
   },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);