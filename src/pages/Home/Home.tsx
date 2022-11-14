import React, { useState } from "react";
import Card from "../../components/Card";
import Title from "../../components/Title";
import './Home.css'

interface CardType{
  id:number;
  name:string
  price:number;
  description:string;
  imageUrl:string;
  category:string;
  rating:number;
}

enum Categories{
  all='All',
  vegeterian='Vegeterian',
  chicken='Chicken',
  asian='Asian'
}

function Home() {
    const data=[
        {
         id:1,
         imageUrl:'https://cdn.pixabay.com/photo/2016/08/09/10/30/tomatoes-1580273__340.jpg',
         category:'Vegeterian',
         name:'GreekSalad',
         description:'great salad',
         price:60,
         rating:2  
        },
        {
         id:2,
         imageUrl:'https://cdn.pixabay.com/photo/2017/02/25/15/23/pad-thai-2098017__340.jpg',
         category:'Asian',
         name:'Pad Thai',
         description:'yumi yumi ',
         price:85,
         rating:4
        },
        {
        id:3,
        imageUrl:'https://cdn.pixabay.com/photo/2014/01/16/01/48/chicken-nuggets-246180__340.jpg' ,
        category:'Chicken',
        name:'Fried Chicken',
        description:'i like it',
        price:103,
        rating:5
        }

    ];
    const categories= Object.values(Categories);
       
    const [display,setDisplay]=useState('grid');
    const [selectedCategory,setSelectedCategory]=useState(Categories.all);
    const[filtered,setFiltered]=useState([...data])
    
    function filterByCategory(category:Categories,cards:Array<CardType>):Array<CardType>{
      if(category===Categories.all){
         return cards;
      }

    return cards.filter(card=> card.category===category);
     }

    function handleCategoryChange(e:React.ChangeEvent<HTMLSelectElement>){
       const value=e.target.value as Categories;
       const filteredData=filterByCategory(value,[...data]);
      
       setSelectedCategory(value);
       setFiltered(filteredData);
       
    }

    // function handleDisplay(display:string){
    //    setDisplay(display)
    // }

    return ( 
        <>

        <Title
        titleContent='Order Delivery or Takeaway'
        />
        
<div>

  <button onClick={()=>setDisplay('grid')} className="btn btn-light mx-l"><i className="bi bi-grid-3x3-gap"></i></button>
  <button onClick={()=>setDisplay('list')} className="btn btn-light"><i className="bi bi-list-ul"></i></button>
 

  <div>

  <label htmlFor="categories" >Category:</label>
  <select value={selectedCategory} onChange={handleCategoryChange} className="form-select" name="categories" id="categories">
   {
      categories.map(category=>
      <option key={category} value={category}>{category}</option>
      )
   }
  </select>
    
  </div>

</div>

        <div className={`${display} p-5`}>

         {
           filtered.map((card)=>
           
             <Card 
               key={card.id}
               {...card}
             />
            )
        }

        </div>

        </>)
       }


export default Home;