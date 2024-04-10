import BurgerLogo from "../../images/Burger.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

   const onlineStatus = useOnlineStatus();

   const [btnNameReact, setBtnNameReact] = useState("Login");

   return (
      <div className="flex justify-between border-2 border-black border-solid">
         <div className="logo-container">
            <img className="w-28" src={ BurgerLogo } />
         </div>

         <div className="flex items-center">
            <ul className="flex p-4 m-3">
               <li className="px-2">Online Status: { onlineStatus ? "🟢" : "🔴" }</li>
               <li className="px-2"><Link to="/">Home</Link></li>
               <li className="px-2"><Link to="/about">About Us</Link></li>
               <li className="px-2"><Link to="/contact">Contact Us</Link></li>
               <li className="px-2"><Link to="/grocery">Grocery</Link></li>
               <li className="px-2">Cart</li>
               <button className="btn-login"
                  onClick={() => {
                     btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                  }}
               >
                  {btnNameReact}
               </button>
            </ul>
         </div>
      </div>
   );
}

export default Header;