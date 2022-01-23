import React, { useState } from "react";
import "../App.css";


const Studentcard = ({ firstName, company, email, pic,skill,id}) => {
  const [icon, seticon] = useState();
  const [open, setopen] = useState("d-none");
  return (
    <>
      <div className="cardContainer" >
        <div className="row p-5" >
          <div className="col-md-2 " >
            <div className="imageContainer">
              <img src={pic} alt="" />
            </div>
          </div>
          <div className="col-md-3 mx-5 my-4 bg-primary">
            <div className="title">
              <h1>Name:{firstName}</h1>
            </div>
            <div>
              <h5>Company:{company}</h5>
              <h5>Email:{email}</h5>
              <h5>Skill:{skill}</h5>
              
            </div>

            <div className={``}>
              <h5>Company:{company}</h5>
              <h5>Email:{email}</h5>
              <h5>Skill:{skill}</h5>
              
            </div>

          </div>
          <div className="col-md-5 bg-dark button-wrapper">
            <div className="buttonContainer bg-primary button-div">
              <button onClick={()=>setopen(!open)}>kkkkkkkkk</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studentcard;
