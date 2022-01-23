import React from "react";

const Studentcard = ({firstName,company,email,pic}) => {
  return (
    <>
      <div className="cardContainer">
        <div>
          <img src={pic} alt="" />
        </div>
        <div>
          <h1>Name:{firstName}</h1>
          <h1>Company{company}</h1>
          <h1>Email:{email}</h1>
        </div>
      </div>
    </>
  );
};

export default Studentcard;
