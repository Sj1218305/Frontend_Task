import {useEffect} from 'react';

const Tags = () => {
  let fetchTags = []; 

  useEffect(() => {
    fetch('https://api.codingninjas.com/api/v3/event_tags')
      .then(res => {
        return res.json();
      })
      .then(data => {
        fetchTags = data.data.tags;
        console.log(fetchTags)
      })
  },[])

  return (
   fetchTags.map((tag) =>(
    <span className="tag">
      {tag}
    </span>
    ))
  );
}
 
export default Tags;