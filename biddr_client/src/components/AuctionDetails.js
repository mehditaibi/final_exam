import React from "react";

const AuctionDetails = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.ends_at}</p>
      <p>{props.reserve_price}</p>
    </div>
  );
};

export default AuctionDetails;
