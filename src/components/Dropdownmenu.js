import { useState } from "react";
import { countries } from "../utils/contents";

const DropDown = () => {
   const [selectedCountry, setSelectedCountry] = useState("");

   const [name,setName] = useState('');

   const handleCountryChange = (e) => {
      const selectedCountryIndex = e.target.value;
      setSelectedCountry(countries[selectedCountryIndex].name);
   };

   return (
      <div className="dropdown-menu">
         <select value={selectedCountry.name} onChange={handleCountryChange}>
            <option value="">Select a Country</option>
            {countries.map((country, index) => (
               <option key={index} value={index}>
                  {country.name}
               </option>
            ))}
         </select>
         
         {selectedCountry && (
            <select>
               {countries
                  .find((country) => country.name === selectedCountry)
                  .cities.map((city, index) => (
                     <option key={index} value={city} disabled={index===0}>
                        {city}
                     </option>
                  ))}
            </select>
         )}
      </div>
   );
};

export default DropDown;