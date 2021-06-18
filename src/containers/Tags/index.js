import {useState, useEffect } from 'react';

const Tags = () => {
  const [fetchTags, setFetchTags] = useState([]); 

  useEffect(() => {
    fetch('https://api.codingninjas.com/api/v3/event_tags')
      .then(res => {
        return res.json();
      })
      .then(data => {
         setFetchTags(data.data.tags);
        
      })
  },[])
  // <button class="button is-primary is-outlined">Outlined</button>
   return ( 
      <div>
         { fetchTags.map((tag) =>( 
      <span className="tag">
         {tag}
      </span>
      ))}
      </div>         
   );
}
 
export default Tags;