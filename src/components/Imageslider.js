import { useEffect, useState } from "react";
import { imagesData } from "../utils/contents";

const ImageSlider = () => {

   const [imageSliderIndex, setImageSliderIndex] = useState(0);

   useEffect(() => {
      const timer = setTimeout( () => {
         handleNextClick();
      } , 4000);
      return () => {
         clearTimeout(timer);
      }
   }, [imageSliderIndex]);

   const handlePrevClick = () => {
      setImageSliderIndex(!imageSliderIndex ? imagesData.length - 1 : imageSliderIndex - 1);
   }

   const handleNextClick = () => {
      setImageSliderIndex((imageSliderIndex + 1) % imagesData.length);
   }

   return (
      <div className="img-carousal">
         <button className="btn-prev" onClick={handlePrevClick}>Previous</button>
         <img className="carousal-images" src={imagesData[imageSliderIndex]} alt="Wallpaper" onClick={handleNextClick}/>
         <button className="btn-next" onClick={handleNextClick}>Next</button>
      </div>
   );
}

export default ImageSlider;