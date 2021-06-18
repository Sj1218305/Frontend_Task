import './App.css';
import { Link, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tags from './containers/Tags/index.js'
import Events from './containers/Events/index.js'

function App() 
  {
    const handleCLick=(e)=>{
      const allSubcategories=document.querySelectorAll(`.event-subcategories`);
      const currEl=Array.from(allSubcategories).filter(el=> el.className.includes(e.target.id)===true);
      const excludingCurrEl=Array.from(allSubcategories).filter(el=> el.className.includes(e.target.id)!==true);
       currEl[0].classList.add('t');
      Array.from(excludingCurrEl).forEach(el=>{
         el.classList.remove('t');
    });
   }
return (
<Router>  
  <div className="container">
     <div className="event-container">
        <nav className="event-categories">
           <Link onClick={handleCLick} to="/fetchEvents/ALL_EVENTS/" id='all-events' className="navbar-item">All Events</Link>
           <Link onClick={handleCLick} to="/fetchEvents/WEBINARS/" id='webinars' className="navbar-item">Webinars</Link>
           <Link onClick={handleCLick} to="/fetchEvents/CODING_EVENTS/" id='coding-events' className="navbar-item">Coding Events</Link>
           <Link onClick={handleCLick} to="/fetchEvents/BOOTCAMP_EVENTS/" id='bootcamp-events' className="navbar-item">Bootcamp Events</Link>
           <Link onClick={handleCLick} to="/fetchEvents/WORKSHOP/" id='workshops' className="navbar-item">Workshop</Link>
        </nav>
        <nav className="event-subcategories all-events t">
           <Link to="/fetchEvents/ALL_EVENTS/Upcoming" className="navbar-item">Upcoming</Link>
           <Link to="/fetchEvents/ALL_EVENTS/Archived" className="navbar-item">Archived</Link>
           <Link to="/fetchEvents/ALL_EVENTS/All_time_favourite" className="navbar-item">All Time Favorites</Link>
        </nav>
        <nav className="event-subcategories webinars">
           <Link to="/fetchEvents/WEBINARS/Upcoming" className="navbar-item">Upcoming</Link>
           <Link to="/fetchEvents/WEBINARS/Archived" className="navbar-item">Recorded</Link>
           <Link to="/fetchEvents/WEBINARS/All_time_favourite" className="navbar-item">All Time Favorites</Link>
        </nav>
        <nav className="event-subcategories coding-events">
           <Link to="/fetchEvents/CODING_EVENTS/Upcoming" className="navbar-item">Upcoming</Link>
           <Link to="/fetchEvents/CODING_EVENTS/Archived" className="navbar-item">Recorded</Link>
        </nav>
        <nav className="event-subcategories bootcamp-events">
           <Link to="/fetchEvents/BOOTCAMP_EVENTS/Upcoming" className="navbar-item">Upcoming</Link>
           <Link to="/fetchEvents/BOOTCAMP_EVENTS/Archived" className="navbar-item">Archived</Link>
           <Link to="/fetchEvents/BOOTCAMP_EVENTS/All_time_favourite" className="navbar-item">All Time Favorites</Link>
        </nav>
        <nav className="event-subcategories workshops">
           <Link to="/fetchEvents/WORKSHOP/Upcoming" className="navbar-item">Upcoming</Link>
           <Link to="/fetchEvents/WORKSHOP/Archived" className="navbar-item">Archived</Link>
           <Link to="/fetchEvents/WORKSHOP/All_time_favourite" className="navbar-item">All Time Favorites</Link>
        </nav>
        <div className="event-body">
           <div className="event-cards">
            <Switch>
              <Route exact path="/fetchEvents/:category" component={Events}/>
              <Route exact path="/fetchEvents/:category/:subcategory" component={Events}/>

               {/* All event section */}
              <Route exact path='/fetchEvents/ALL_EVENTS/Upcoming'>
                 <Redirect to='/fetchEvents/:category/:subcategory' />
              </Route>
              <Route exact path='/fetchEvents/ALL_EVENTS/Archived'>
                 <Redirect to='/fetchEvents/:category/:subcategory' />
              </Route>
              <Route exact path='/fetchEvents/ALL_EVENTS/All_time_favourite'>
                 <Redirect to='/fetchEvents/:category/:subcategory' />
              </Route>

               {/* All webinars section */}
              <Route exact path='/fetchEvents/WEBINARS/Upcoming'>
                 <Redirect to='/fetchEvents/:category/:subcategory' />
              </Route>
              <Route exact path='/fetchEvents/WEBINARS/Archived'>
                 <Redirect to='/fetchEvents/:category/:subcategory' />
              </Route>
              <Route exact path='/fetchEvents/WEBINARS/All_time_favourite'>
                 <Redirect to='/fetchEvents/:category/:subcategory' />
              </Route>

               {/* All coding_Event section */}
              <Route exact path='/fetchEvents/CODING_EVENTS/Upcoming'>
                 <Redirect to='/fetchEvents/:category/:subcategory' />
              </Route>
              <Route exact path='/fetchEvents/CODING_EVENTS/Archived'>
                 <Redirect to='/fetchEvents/:category/:subcategory' />
              </Route>
              <Route exact path='/fetchEvents/CODING_EVENTS/All_time_favourite'>
                 <Redirect to='/fetchEvents/:category/:subcategory' />
              </Route>

               {/* All bootcamp_event section */}
               <Route exact path='/fetchEvents/BOOTCAMP_EVENTS/Upcoming'>
                 <Redirect to='/fetchEvents/:category/:subcategory' />
              </Route>
              <Route exact path='/fetchEvents/BOOTCAMP_EVENTS/Archived'>
                 <Redirect to='/fetchEvents/:category/:subcategory' />
              </Route>
              <Route exact path='/fetchEvents/BOOTCAMP_EVENTS/All_time_favourite'>
                 <Redirect to='/fetchEvents/:category/:subcategory' />
              </Route>

               {/* All workshop section */}
               <Route exact path='/fetchEvents/WORKSHOP/Upcoming'>
                 <Redirect to='/fetchEvents/:category/:subcategory' />
              </Route>
              <Route exact path='/fetchEvents/WORKSHOP/Archived'>
                 <Redirect to='/fetchEvents/:category/:subcategory' />
              </Route>
              <Route exact path='/fetchEvents/WORKSHOP/All_time_favourite'>
                 <Redirect to='/fetchEvents/:category/:subcategory' />
              </Route>

            </Switch>
           </div>
           <div className="tags"> 
              <p>TAGS</p>
              <Tags />
           </div>
        </div>
     </div>
  </div>
</Router>
);
}
export default App;