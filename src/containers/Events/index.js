import {useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

let category = "ALL_EVENTS"
let sub_category = "Upcoming"
let tags = []
let offset = 1


const Events = () => {
  // const [fetchTags, setFetchTags] = useState([]); 
  category  = useParams();
  console.log(category)
  useEffect(() => {
    fetch(`https://api.codingninjas.com/api/v3/events?event_category=${category}&event_sub_category=${sub_category}&tag_list=${tags}&offset=${offset}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
         console.log(data);  
      })
  },[])
  
   return ( 
      <div>
      </div>         
   );
}
 
export default Events;