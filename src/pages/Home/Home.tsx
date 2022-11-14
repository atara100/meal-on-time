import { useState } from "react";
import Card from "../../components/Card";
import Title from "../../components/Title";
import './Home.css'

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
   
    const [display,setDisplay]=useState('grid')

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
</div>

        <div className={`${display} p-5`}>

         {
           data.map((card)=>
           
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