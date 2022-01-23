import React, { useEffect, useState } from "react";
import "../App.css";

import Studentcard from "./Studentcard";
import ScrollContainer from "react-indiana-drag-scroll";
import Search from "./Search";

const Profilediv = () => { 
  const [item, setitem] = useState([]);
  const [input, setinput] = useState([]);

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students/").then((response) => {
      response.json().then((data) => {
        setitem(data.students);
        console.log(data.students);
        console.log(item)
      }).then((err)=>{
        console.log(err)
      })
    });
  },[]);

  return (
    <>
      <div className="container-fluid main">
        <ScrollContainer className="scroll-container container" vertical={true}>
          <Search input={input} setinput={setinput}/>

          {item.filter(search=>{
            if (input===" "){
              return search
            }else if(search.firstName.includes(input)){
              return search
            }
            
          }).map((data) => {
            return (
              <Studentcard
                pic={data.pic}
                firstName={data.firstName}
                email={data.email}
                company={data.company}
                skill={data.skill}
                key={data.id}
              />
            );
          })}
        </ScrollContainer>
      </div>
    </>
  );
};

export default Profilediv;
