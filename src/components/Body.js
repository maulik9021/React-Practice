import RestaurantCard, { withPromotedLabel } from "./Restaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState([""]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setListofRestaurant(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    setFilteredRestaurant(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your Internet Connection!!!!!
      </h1>
    )
  }

  return listofRestaurant.length === 0 ? ( <Shimmer /> ) : (
    <div className="card-section">
      <div className="search-section flex">
        <div className="m-1 p-2">
          <input
            type="text"
            id="searchBar"
            className="w-56 h-8 border-gray-500 border-2 border-solid"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-3 py-1 bg-blue-400"
            onClick={() => {
              const filteredRestaurant = listofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="flex items-center">
          <button
            className="px-3 py-1 bg-blue-400"
            onClick={() => {
              const filteredList = listofRestaurant.filter(
                (res) => res.info.avgRating > 4.2
              );
              setListofRestaurant(filteredList);
            }}
        >
          Top Rated Restaurant
        </button>
        </div>
        
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (

          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
             { restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant}/>}
          </Link>

          //<RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
