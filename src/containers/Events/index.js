import {useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import moment from 'moment'

let category = "ALL_EVENTS"
let subcategory = "Upcoming"
let tags = [] 
let offset = 1
 
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
        //console.log(res);
        return res.json();
      })
      .then(data => {
         //console.log(data)
         //console.log(data.data.events);
         setFetchEvents(data.data.events);  
      })
  },[category,subcategory])

    // console.log(fetchEvents)

    const cols=fetchEvents && fetchEvents.map(el=>{
      return <div key={el.id}>
               <div className="card">
                 <div className="card-image">
                  <figure className="image is-395by159">
                    <img src={el.cover_picture} />
                  </figure>
                 </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-6">{el.name}</p>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-size-7">
                      Starts On <br/>
                    <strong>{el.event_start_time}</strong>
                    </div>
                    <div className="column is-size-7">
                      Entry Fee <br/>
                    <strong>{el.fee ? el.fee : 'Free'}</strong>
                    </div>
                    <div className="column is-size-7">
                      Venue <br/>
                    <strong>{el.venue}</strong>
                    </div>
                  </div> 
                  <hr/>
                  <div className="content is-size-7">
                    {el.short_desc}
                    <br/>
                  </div>             
                  <div className="tags">
                    {/*{el.card_tags.map((tag)=>{*/}
                      <span className="tag is-light">{el.card_tags}</span>
                    {/*})}*/}
                  </div>
                  <hr/>
                  <nav class="level">
      {/*<div class="participate">
      <img src="https://lh5.googleusercontent.com/-KXI3kqh9BuQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcXFBWtL_3yaPwpeoVSIZihkD2YA/s96-c/photo.jpg" alt="">
      <img src="https://lh5.googleusercontent.com/-KXI3kqh9BuQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcXFBWtL_3yaPwpeoVSIZihkD2YA/s96-c/photo.jpg" alt="">
        </div>*/}
                  <div class="level-right">
                    <p class="level-item">
                     <a class="button is-success">REGISTER NOW</a>
                    </p>
                  </div>
                </nav>
                </div>
              </div>
            </div>            
    });
   return ( 
      <div className="rows">
       {cols}
      </div>         
   );
}
 
export default Events;