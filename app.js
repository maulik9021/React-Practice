import React from "react";
import ReactDOM from "react-dom/client";
import burgerLogo from "./images/burger.png";
import matkabiriyani from "./images/card-images/Matka_biriyani.jpg";

const Header = () => {
   return (
      <div className="header">
         <div className="logo-container">
            <img className="logo" src={ burgerLogo } />
         </div>

         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>Cart</li>
               <li>About Us</li>
               <li>Contact Us</li>
            </ul>
         </div>
      </div>
   );
}

const RestaurantCard = (props) => {
   const { resData } = props;
   const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData.info;
   return (
      <div className="res-card">
         <img src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId } className="card-logo" alt="Biriyani"/>
         <h3>{ name }</h3>
         <h4>{ cuisines.join(", ") }</h4>
         <h4>{ avgRating } Stars</h4>
         <h4>{ sla.deliveryTime } Minutes</h4>
      </div>
   );
}


const resList = [
   {
      "info": {
         "id": "603118",
         "name": "Barbeque Nation",
         "cloudinaryImageId": "rcnp03tpleyvjkmqwi4b",
         "locality": "Maruti Solaris Mall",
         "areaName": "Jitodia",
         "costForTwo": "₹600 for two",
         "cuisines": ["North Indian", "Barbecue", "Biryani", "Kebabs", "Mughlai", "Desserts"],
         "avgRating": 4.3,
         "parentId": "2438",
         "avgRatingString": "4.3",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 32,
         "lastMileTravel": 4.6,
         "serviceability": "SERVICEABLE",
         "slaString": "32 mins",
         "lastMileTravelString": "4.6 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:30:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/barbeque-nation-maruti-solaris-mall-jitodia-anand-603118",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
      "id": "562604",
      "name": "Brown Burger Co.",
      "cloudinaryImageId": "dnk2m8wo9shba4fcakow",
      "locality": "Vidyanagar",
      "areaName": "Vallabh Vidyanagar",
      "costForTwo": "₹290 for two",
      "cuisines": [
      "Burgers",
      "Street Food",
      "Fast Food",
      "Beverages"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "50466",
      "avgRatingString": "4.1",
      "totalRatingsString": "100+",
      "sla": {
      "deliveryTime": 19,
      "lastMileTravel": 2.2,
      "serviceability": "SERVICEABLE",
      "slaString": "19 mins",
      "lastMileTravelString": "2.2 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-01-16 23:59:00",
      "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
         "imageBased": {
            
         },
         "textBased": {
            
         },
         "textExtendedBadges": {
            
         }
      }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/brown-burger-co-vidyanagar-vallabh-vidyanagar-anand-562604",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "182223",
         "name": "Aashish Chinese King",
         "cloudinaryImageId": "xlrlwkvs8chere0pilis",
         "locality": "Neelkhanth nagar",
         "areaName": "Gamdi",
         "costForTwo": "₹240 for two",
         "cuisines": [
         "Chinese",
         "Mughlai",
         "Biryani",
         "Beverages"
         ],
         "avgRating": 4.1,
         "parentId": "26210",
         "avgRatingString": "4.1",
         "totalRatingsString": "1K+",
         "sla": {
         "deliveryTime": 28,
         "lastMileTravel": 5,
         "serviceability": "SERVICEABLE",
         "slaString": "28 mins",
         "lastMileTravelString": "5.0 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:59:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/aashish-chinese-king-neelkhanth-nagar-gamdi-anand-182223",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "177849",
         "name": "Hotel Kashmir",
         "cloudinaryImageId": "pjw7iu05xpwts6zmexjv",
         "locality": "Neelkanth nagar",
         "areaName": "Gamdi",
         "costForTwo": "₹300 for two",
         "cuisines": [
         "Mughlai",
         "North Indian",
         "Biryani",
         "Beverages"
         ],
         "avgRating": 4.2,
         "parentId": "99689",
         "avgRatingString": "4.2",
         "totalRatingsString": "1K+",
         "sla": {
         "deliveryTime": 34,
         "lastMileTravel": 7.9,
         "serviceability": "SERVICEABLE",
         "slaString": "34 mins",
         "lastMileTravelString": "7.9 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-17 00:00:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/hotel-kashmir-neelkanth-nagar-gamdi-anand-177849",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "499781",
         "name": "Grameen Kulfi",
         "cloudinaryImageId": "qwbnjytrstg6sltmijgh",
         "locality": "Mahadev Nagar",
         "areaName": "Vallabh Vidyanagar",
         "costForTwo": "₹120 for two",
         "cuisines": [
         "Ice Cream",
         "Desserts"
         ],
         "avgRating": 4.6,
         "veg": true,
         "parentId": "12175",
         "avgRatingString": "4.6",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 19,
         "lastMileTravel": 2.9,
         "serviceability": "SERVICEABLE",
         "slaString": "19 mins",
         "lastMileTravelString": "2.9 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-17 00:00:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/grameen-kulfi-mahadev-nagar-vallabh-vidyanagar-anand-499781",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "133905",
         "name": "Pizza Hut",
         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
         "locality": "Maruti Solaris",
         "areaName": "Hadgood",
         "costForTwo": "₹600 for two",
         "cuisines": [
         "Pizzas"
         ],
         "avgRating": 4.2,
         "parentId": "721",
         "avgRatingString": "4.2",
         "totalRatingsString": "1K+",
         "sla": {
         "deliveryTime": 34,
         "lastMileTravel": 4.6,
         "serviceability": "SERVICEABLE",
         "slaString": "34 mins",
         "lastMileTravelString": "4.6 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-17 00:00:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/pizza-hut-maruti-solaris-hadgood-anand-133905",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "102216",
         "name": "McDonald's",
         "cloudinaryImageId": "405645b3118d83e89db4c65361e43733",
         "locality": "Anand Sojitra Road",
         "areaName": "Vallabh Vidyanagar",
         "costForTwo": "₹400 for two",
         "cuisines": [
         "Burgers",
         "Beverages",
         "Cafe",
         "Desserts"
         ],
         "avgRating": 4.3,
         "parentId": "630",
         "avgRatingString": "4.3",
         "totalRatingsString": "5K+",
         "sla": {
         "deliveryTime": 27,
         "lastMileTravel": 4.6,
         "serviceability": "SERVICEABLE",
         "slaString": "27 mins",
         "lastMileTravelString": "4.6 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-17 01:45:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/mcdonalds-sojitra-road-vallabh-vidyanagar-anand-102216",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "510288",
         "name": "Subway",
         "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
         "locality": "Neelkanth Nagar",
         "areaName": "Bhalej Road",
         "costForTwo": "₹300 for two",
         "cuisines": [
         "Healthy Food",
         "Salads",
         "Fast Food"
         ],
         "avgRating": 4.4,
         "parentId": "2",
         "avgRatingString": "4.4",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 25,
         "lastMileTravel": 4.1,
         "serviceability": "SERVICEABLE",
         "slaString": "25 mins",
         "lastMileTravelString": "4.1 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-17 00:00:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/subway-neelkanth-nagar-bhalej-road-anand-510288",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "340376",
         "name": "KFC",
         "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
         "locality": "Sarvodaya Society",
         "areaName": "Vallabh Vidyanagar",
         "costForTwo": "₹400 for two",
         "cuisines": [
         "Burgers",
         "Biryani",
         "American",
         "Snacks",
         "Fast Food"
         ],
         "avgRating": 4.3,
         "parentId": "547",
         "avgRatingString": "4.3",
         "totalRatingsString": "1K+",
         "sla": {
         "deliveryTime": 27,
         "lastMileTravel": 5,
         "serviceability": "SERVICEABLE",
         "slaString": "27 mins",
         "lastMileTravelString": "5.0 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-17 01:00:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/kfc-sarvodaya-society-vallabh-vidyanagar-anand-340376",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "261176",
         "name": "Santushti Shakes & More",
         "cloudinaryImageId": "phxexmd1fhlr8c2dvxct",
         "locality": "Mahadev Nagar",
         "areaName": "Vallabh Vidyanagar",
         "costForTwo": "₹250 for two",
         "cuisines": [
         "Desserts",
         "Ice Cream"
         ],
         "avgRating": 4.3,
         "veg": true,
         "parentId": "21789",
         "avgRatingString": "4.3",
         "totalRatingsString": "500+",
         "sla": {
         "deliveryTime": 18,
         "lastMileTravel": 2.4,
         "serviceability": "SERVICEABLE",
         "slaString": "18 mins",
         "lastMileTravelString": "2.4 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-17 01:00:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/santushti-shakes-and-more-mahadev-nagar-vallabh-vidyanagar-anand-261176",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "327543",
         "name": "Delights by INOX",
         "cloudinaryImageId": "b857fcf611707fedd3773eb02688f925",
         "locality": "City Pulse Mall",
         "areaName": "Vallabh Vidyanagar",
         "costForTwo": "₹400 for two",
         "cuisines": [
         "Snacks"
         ],
         "avgRating": 4,
         "veg": true,
         "parentId": "385095",
         "avgRatingString": "4.0",
         "totalRatingsString": "10+",
         "sla": {
         "deliveryTime": 19,
         "lastMileTravel": 2.7,
         "serviceability": "SERVICEABLE",
         "slaString": "19 mins",
         "lastMileTravelString": "2.7 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-17 02:00:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "v1695133679/badges/Pure_Veg111.png",
               "description": "pureveg"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "pureveg",
                     "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/delights-by-inox-city-pulse-mall-vallabh-vidyanagar-anand-327543",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "639527",
         "name": "Dum Safar Biryani",
         "cloudinaryImageId": "5f2345fb1f2daa602672fd7ec9c39ac4",
         "locality": "Sojitra Road",
         "areaName": "Jitodia",
         "costForTwo": "₹500 for two",
         "cuisines": [
         "Biryani",
         "Kebabs",
         "Tandoor",
         "Indian",
         "Desserts"
         ],
         "avgRating": 4.4,
         "parentId": "351013",
         "avgRatingString": "4.4",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 31,
         "lastMileTravel": 4.6,
         "serviceability": "SERVICEABLE",
         "slaString": "31 mins",
         "lastMileTravelString": "4.6 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:30:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/dum-safar-biryani-sojitra-road-jitodia-anand-639527",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "97187",
         "name": "Domino's Pizza",
         "cloudinaryImageId": "u9yesemrzplmuqxl2zpo",
         "locality": "Town Hall Road",
         "areaName": "Vallabh Vidyanagar",
         "costForTwo": "₹400 for two",
         "cuisines": [
         "Pizzas",
         "Italian",
         "Pastas",
         "Desserts"
         ],
         "avgRating": 4.2,
         "veg": true,
         "parentId": "2456",
         "avgRatingString": "4.2",
         "totalRatingsString": "500+",
         "sla": {
         "deliveryTime": 30,
         "serviceability": "SERVICEABLE",
         "slaString": "30 mins",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-17 02:00:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "v1695133679/badges/Pure_Veg111.png",
               "description": "pureveg"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "pureveg",
                     "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/dominos-pizza-town-hall-road-vallabh-vidyanagar-anand-97187",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "420309",
         "name": "McDonald's Gourmet Burger Collection",
         "cloudinaryImageId": "zf41hfwhz5ojkyydu18s",
         "locality": "Maruti Mall",
         "areaName": "Vallabh Vidyanagar",
         "costForTwo": "₹500 for two",
         "cuisines": [
         "Burgers",
         "Beverages",
         "Cafe",
         "Desserts"
         ],
         "avgRating": 4.2,
         "parentId": "10761",
         "avgRatingString": "4.2",
         "totalRatingsString": "50+",
         "sla": {
         "deliveryTime": 24,
         "lastMileTravel": 4.6,
         "serviceability": "SERVICEABLE",
         "slaString": "24 mins",
         "lastMileTravelString": "4.6 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-17 01:45:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-maruti-mall-vallabh-vidyanagar-anand-420309",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "473409",
         "name": "Zam Zam Restaurant",
         "cloudinaryImageId": "yaagq4xx26t2x9oedfib",
         "locality": "Neelkanth Nagar",
         "areaName": "Gamdi",
         "costForTwo": "₹280 for two",
         "cuisines": [
         "Mughlai",
         "Biryani",
         "North Indian",
         "Chinese",
         "Beverages",
         "Healthy Food"
         ],
         "avgRating": 4.1,
         "parentId": "8883",
         "avgRatingString": "4.1",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 33,
         "lastMileTravel": 6,
         "serviceability": "SERVICEABLE",
         "slaString": "33 mins",
         "lastMileTravelString": "6.0 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-17 01:30:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/zam-zam-restaurant-neelkanth-nagar-gamdi-anand-473409",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "161893",
         "name": "The Belgian Waffle Co.",
         "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
         "locality": "V. V. NAGAR ROAD",
         "areaName": "TRIVENI ARCADE",
         "costForTwo": "₹200 for two",
         "cuisines": [
         "Waffle",
         "Desserts",
         "Ice Cream",
         "Beverages"
         ],
         "avgRating": 4.5,
         "veg": true,
         "parentId": "2233",
         "avgRatingString": "4.5",
         "totalRatingsString": "500+",
         "sla": {
         "deliveryTime": 29,
         "lastMileTravel": 2.4,
         "serviceability": "SERVICEABLE",
         "slaString": "29 mins",
         "lastMileTravelString": "2.4 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-17 00:00:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-v-v-nagar-road-triveni-arcade-anand-161893",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "234066",
         "name": "Wok On Fire",
         "cloudinaryImageId": "lprudwbxbwrfeeig7ojm",
         "locality": "Vallabh Vidyanagar",
         "areaName": "Vallabh Vidyanagar",
         "costForTwo": "₹500 for two",
         "cuisines": [
         "Chinese",
         "Thai",
         "Oriental",
         "Asian",
         "Pan-Asian"
         ],
         "avgRating": 4.4,
         "veg": true,
         "parentId": "5825",
         "avgRatingString": "4.4",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 30,
         "lastMileTravel": 5,
         "serviceability": "SERVICEABLE",
         "slaString": "30 mins",
         "lastMileTravelString": "5.0 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-17 00:00:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/wok-on-fire-vallabh-vidyanagar-anand-234066",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "499780",
         "name": "NIC Ice Creams",
         "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
         "locality": "Anand Sojitra Road",
         "areaName": "Vallabh Vidyanagar",
         "costForTwo": "₹120 for two",
         "cuisines": [
         "Ice Cream",
         "Desserts"
         ],
         "avgRating": 4.6,
         "veg": true,
         "parentId": "6249",
         "avgRatingString": "4.6",
         "totalRatingsString": "500+",
         "sla": {
         "deliveryTime": 18,
         "lastMileTravel": 2.9,
         "serviceability": "SERVICEABLE",
         "slaString": "18 mins",
         "lastMileTravelString": "2.9 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-17 00:00:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/nic-ice-creams-sojitra-road-vallabh-vidyanagar-anand-499780",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "590349",
         "name": "Starbucks Coffee",
         "cloudinaryImageId": "258fe8a3577877fbfe064095ed1d9dc3",
         "locality": "Sarvoday Park",
         "areaName": "Anand Sojitra Road",
         "costForTwo": "₹400 for two",
         "cuisines": [
         "Beverages",
         "Cafe",
         "Snacks",
         "Desserts",
         "Bakery",
         "Ice Cream"
         ],
         "avgRating": 4.4,
         "parentId": "195515",
         "avgRatingString": "4.4",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 24,
         "lastMileTravel": 4.7,
         "serviceability": "SERVICEABLE",
         "slaString": "24 mins",
         "lastMileTravelString": "4.7 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:30:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/starbucks-coffee-sarvoday-park-anand-sojitra-road-anand-590349",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "603119",
         "name": "UBQ by Barbeque Nation",
         "cloudinaryImageId": "s4gnodhkjs1athnecud0",
         "locality": "Maruti Solaris Mall",
         "areaName": "Jitodia",
         "costForTwo": "₹300 for two",
         "cuisines": [
         "North Indian",
         "Barbecue",
         "Biryani",
         "Kebabs",
         "Mughlai",
         "Desserts"
         ],
         "avgRating": 4.2,
         "parentId": "10804",
         "avgRatingString": "4.2",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 32,
         "lastMileTravel": 4.6,
         "serviceability": "SERVICEABLE",
         "slaString": "32 mins",
         "lastMileTravelString": "4.6 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-01-16 23:30:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹120 OFF",
         "subHeader": "ABOVE ₹199",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         }
      },
      "analytics": {
         
      },
      "cta": {
         "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-maruti-solaris-mall-jitodia-anand-603119",
         "type": "WEBLINK"
      }
   }
];

const CardSection = () => {
   return (
      <div className="card-section">
         <div className="search-section">
            Search
         </div>
         <div className="section-card-container">
            {
               resList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData = {restaurant} />)
            }
         </div>
      </div>
   );
}

const AppLayout = () => {
   return (
      <div className="app">
         <Header/>
         <CardSection/>
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);