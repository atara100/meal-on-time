import React from "react";
import {Categories} from "../pages/Home/Home" 

interface Props{
    updateDisplay:Function;
    selectedCategory:Categories;
    handleCategoryChange:(e:React.ChangeEvent<HTMLSelectElement>)=>void;
    search:string;
    handleSearch:Function;
}

function ButtonsBar({
    updateDisplay,selectedCategory,handleCategoryChange,search,handleSearch
}:Props) {
const categories= Object.values(Categories);

    return ( 
<div className="d-flex px-5">        
   <div>

  <button onClick={()=>updateDisplay('grid')} className="btn btn-light mx-l"><i className="bi bi-grid-3x3-gap"></i></button>
  <button onClick={()=>updateDisplay('list')} className="btn btn-light"><i className="bi bi-list-ul"></i></button>
 
  <div className="d-flex align-items-center">

  <label className="mx-3" htmlFor="categories" >Category:</label>
  <select value={selectedCategory} onChange={handleCategoryChange} 
  className="form-select" name="categories" id="categories">
   {
      categories.map(category=>
      <option key={category} value={category}>{category}</option>
      )
   }
  </select>

  <input className="forn-control ms-3" placeholder="Search" type="text"
   value={search} onChange={(e)=> handleSearch(e)}/>
    
  </div>
</div>

</div>
     );
}

export default ButtonsBar;