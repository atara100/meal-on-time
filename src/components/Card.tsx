interface Props{
    imageUrl:string;
    category:string;
    name:string;
    description:string;
    price:number;
    rating:number;
    categoryClick:Function;
}

function Card({imageUrl,category,name,description,price,rating,categoryClick}:Props) {
  function alertName(name:string){
    alert(`selected dish: ${name}`);
  }


    return ( 
        <>

        <div className="card m-4"  >
          <img src={imageUrl} className="card-img-top" alt={name}/>
          <div onClick={()=>categoryClick(category)} className="badge bg-info text-dark ">{category}</div>
          <div className="card-body">
            <h5 className="card-title"> <a href="#">{name}</a></h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{price}$</p>
            <p className="card-text">Rating: {rating} <i className="bi-star"></i></p>
            <a onClick={(e)=>alertName(name)} href="#" className="btn btn-primary">Order Now</a>
         </div>
       </div>
        </>
     );
}

export default Card;