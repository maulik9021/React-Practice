import { useState, useEffect } from "react";
import { resList } from "../utils/mockdata";

const useRestaurantMenu = () => {
   const [resInfo, setResInfo] = useState(null);

   useEffect(() => {
       fetchMenu();
   }, []);

   const fetchMenu = async () => {
      const data = await fetch(resList);
      const json = await data.json();

      setResInfo(json.data);
   }

   return resInfo;
}

export default useRestaurantMenu;