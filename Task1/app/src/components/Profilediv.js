import React, { useEffect, useState } from 'react';
import '../App.css'
import axios from 'axios'
import Studentcard from './Studentcard';
import ScrollContainer from 'react-indiana-drag-scroll'

const Profilediv = () => {
    const [item, setitem] = useState([]);
    
    useEffect(() => {
      fetch("https://api.hatchways.io/assessment/students/").then((response)=>{
        response.json().then((data)=>{
            setitem(data.students)
            console.log(data.students)
        })
      })
      
    }, []);
    
  return(
      
      <>
      <div className="container-fluid main">
      <ScrollContainer className="scroll-container container" vertical={true}>
      {
            item.map((data)=>{
                return(
                    <Studentcard pic={data.pic} firstName={data.firstName} email={data.email} company={data.company}/>
                )
                
            })
        }
      </ScrollContainer>
        
        
        
      </div>
      </>
  )
  
};

export default Profilediv;
