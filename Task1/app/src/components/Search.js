import React from 'react';
import '../App.css'
const Search = ({input,setinput}) => {
    
  return (
      <>
      
          <div className="search my-3">
              <input type="text" name="" id="text" placeholder='Search By Name' onChange={e=>setinput(e.target.value)}/>
          </div>
          {/* <h1>{input}</h1> */}
      
      </>
  )
};

export default Search;
