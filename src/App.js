import './App.css';
import Tags from './containers/Tags/index.js'


function App() {
return (
<div className="container">
   <div className="event-container">
      <nav className="event-categories">
         <a className="navbar-item">All Events</a>
         <a className="navbar-item">Webinars</a>
         <a className="navbar-item">Coding Events</a>
         <a className="navbar-item">Bootcamp Events</a>
         <a className="navbar-item">Workshop</a>
      </nav>
      <nav className="event-subcategories">
         <a className="navbar-item">Upcoming</a>
         <a className="navbar-item">Archived</a>
         <a className="navbar-item">All Time Favorites</a>
      </nav>
      <div className="event-body">
         <div className="event-cards">
         </div>
         <div className="tags">
            <p>TAGS</p>
            <Tags />
         </div>
      </div>
   </div>
</div>
);
}
export default App;
