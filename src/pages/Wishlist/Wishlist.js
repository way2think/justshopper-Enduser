import React from "react";
import Path from "../../component/Path";
import WorkDetailBlack from "../../component/HomeComponent/WorkDetailBlack";
import WishlistCard from "../../component/wishlist/WishlistCard";

const Wishlist = () => {
  return (
    <div>
      <Path link="/" pathhome="Home" pathdetails="Favorites" />

      <WishlistCard />
      
      {/* <NewArrival /> */}
      <WorkDetailBlack />
    </div>
  );
};

export default Wishlist;
