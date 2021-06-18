import {useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

let category = "ALL_EVENTS"
let subcategory = "Upcoming"
let tags = [] 
let offset = 1
let counter = 0
 

const Events = () => {
  const [fetchEvents, setFetchEvents] = useState([]); 
  let {category,subcategory}  = useParams();
  if(!subcategory){
    subcategory = "Upcoming"
  }
  console.log(category)
  console.log(subcategory)
  useEffect(() => {
    fetch(`https://api.codingninjas.com/api/v3/events?event_category=${category}&event_sub_category=${subcategory}&tag_list=${tags}&offset=${offset}`)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
         console.log(data)
         console.log(data.data.events);
         setFetchEvents(data.data.events);  
      })
  },[category,subcategory])
    
   return ( 
      <div>
       { fetchEvents.map((Event) =>(
          if(counter == 2){
            counter = 0
          }
          if(!counter){
            <span></span>
          }
        ))}
      </div>         
   );
}
 
export default Events;