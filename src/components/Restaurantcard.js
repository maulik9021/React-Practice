import { CDN_URL } from "../utils/contents";

const RestaurantCard = (props) => {
   const { resData } = props;
   const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
   return (
      <div className="m-2 p-2 w-[270px] rounded-lg bg-gray-200">
         <img src={ CDN_URL + cloudinaryImageId } className="rounded-lg" alt="Biriyani"/>
         <h3 className="font-bold py-2 text-lg">{ name }</h3>
         <h4>{ cuisines.join(", ") }</h4>
         <h4>{ avgRating } Stars</h4>
         <h4>{ sla.deliveryTime } Minutes</h4>
      </div>
   );
}

export const withPromotedLabel = (RestaurantCard) => {
   return (props) => {
      return (
         <div>
            <label>Promoted</label>
            <RestaurantCard {...props}/>
         </div>
      );
   }
}

export default RestaurantCard;