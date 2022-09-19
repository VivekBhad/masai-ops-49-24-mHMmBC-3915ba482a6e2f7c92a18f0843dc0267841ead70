import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"


function SingleRestaurantPage() {

  const [data,setData] = useState({})
  const {id} = useParams();
 

  useEffect(()=>{
    fetch (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
    .then(res=>{
      return res.json()
    })
    .then(res=>{
      setData(res.data)
      console.log(res.data)
    })
  },[])

  
  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{data.name}</h3>
      </div>
      <div data-testid="restaurant-type">Type:{data.type}</div>
      <div data-testid="restaurant-rating">Rating:{data.rating}</div>
      <div data-testid="restaurant-votes">Votes:{data.number_of_votes}</div>
      <div data-testid="restaurant-price">Starting Price:{data.price_starts_from}
      </div>
      <div>
        <img 
        data-testid="restaurant-image" 
        width={"100px"} 
        src={data.image} 
        alt={data.name}/>
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
