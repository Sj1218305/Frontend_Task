import {useState, useEffect } from 'react';

const Events = () => {
  // const [fetchTags, setFetchTags] = useState([]); 

  useEffect(() => {
    fetch(`https://api.codingninjas.com/api/v3/events?event_category=${category}&event_sub_category=${sub_category}&tag_list=${tags}&offset=${offest}`)
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