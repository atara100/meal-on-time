import React, { useState } from "react";
import ButtonsBar from "../../components/ButtonsBar";
import Card from "../../components/Card";
import Title from "../../components/Title";
import { data } from "./data";
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

export enum Categories{
  all='All',
  vegeterian='Vegeterian',
  chicken='Chicken',
  asian='Asian'
}

function Home() {
  
       
    //states:
    const [display,setDisplay]=useState('grid');
    const [selectedCategory,setSelectedCategory]=useState(Categories.all);
    const[filtered,setFiltered]=useState([...data]);
    const [search,setSearch]=useState('');
    
    function filterByCategory(category:Categories,cards:Array<CardType>):Array<CardType>{
      if(category===Categories.all){
         return cards;
      }

    return cards.filter(card=> card.category===category);
     }

    function handleCategoryChange(e:React.ChangeEvent<HTMLSelectElement>){
       const value=e.target.value as Categories;
       categoryChange(value);
    }
    function categoryChange(value:Categories){
       const filteredData=filterByCategory(value,[...data]);

       setSelectedCategory(value);
        setSearch('');
       setFiltered(filteredData);     
    }

    function handleSearch(e:React.ChangeEvent<HTMLInputElement>){
      //get value
      const value=e.target.value;
      let result=[...data]
      if(value ){
        //filter cards
        const stripVal=value.trim().toLowerCase()
        result=[...data].filter(card=>card.name.toLowerCase().includes(stripVal))
      
      }
      //update state
      setSelectedCategory(Categories.all)
       setSearch(value);
       setFiltered(result);
    }


return ( 
        <>

  <Title
   titleContent='Order Delivery or Takeaway'
  />
  <ButtonsBar
  updateDisplay={setDisplay}
  selectedCategory={selectedCategory}
  handleCategoryChange={handleCategoryChange}
  search={search}
  handleSearch={handleSearch}
  />

{
  filtered.length === 0 ?
  (<p>No dishes to display 😕</p>)
  :
  (
    <div className={`${display} p-5`}>
         {
           filtered.map((card)=>
             <Card 
               key={card.id}
               {...card}
               categoryClick={categoryChange}
             />
            )
        }
    </div>
  )
  
}

 </>
)
      
}


export default Home;