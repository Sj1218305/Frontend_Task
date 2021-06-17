import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tags from './containers/Tags/index.js'
import Events from './containers/Events/index.js'
import Test from './containers/Categories/index.js'

function App() {
return (
<Router>  
  <div className="container">
     <div className="event-container">
        <nav className="event-categories">
           <Link to="/fetchEvents/ALL_EVENTS/" className="navbar-item">All Events</Link>
           <Link to="/fetchEvents/WEBINARS/" className="navbar-item">Webinars</Link>
           <Link to="/fetchEvents/CODING_EVENTS/" className="navbar-item">Coding Events</Link>
           <Link to="/fetchEvents/BOOTCAMP_EVENTS/" className="navbar-item">Bootcamp Events</Link>
           <Link to="/fetchEvents/WORKSHOP/" className="navbar-item">Workshop</Link>
        </nav>
        <nav className="event-subcategories">
           <Link to="" className="navbar-item">Upcoming</Link>
           <Link to="" className="navbar-item">Archived</Link>
           <Link to="" className="navbar-item">All Time Favorites</Link>
        </nav>
        <div className="event-body">
           <div className="event-cards">
            <Switch>
              <Route exact path="/fetchEvents/:category" component={Events}/>
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
