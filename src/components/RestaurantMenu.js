import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

   const { resId } = useParams();

   const { resInfo } = useRestaurantMenu(resId);

   return (resInfo === null) ? (<Shimmer />) : (
      <div>
         <h1>Name of the Restaurant Menu</h1>
         <h2>Menu</h2>
         <ul>
            <li>Biriyani</li>
            <li>Burgers</li>
            <li>Sandwich</li>
            <li>Coke</li>
         </ul>
      </div>
   )
}

export default RestaurantMenu;