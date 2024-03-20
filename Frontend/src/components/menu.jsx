import './menu.css';
import { 
  FaSearch,
  FaCalendarDay, 
  FaTasks, 
  FaTrophy, 
  FaCog, 
  FaSignOutAlt 
} from 'react-icons/fa';

function Menu() {
  return (
    <>
       <div className="Menu-container">
     <div> <img src={img} alt="intelliprep"></div>
        <br>
        <div className="search">
          <img src={FaSearch} alt="i">
          <input className="box" type="text" placeholder="Search">
        </div>
        <ul class="menu">
          <li className="obj-1"><img src={FaCalendarDay} alt="i"><a href="#">Today</a></li>
          <li className="obj-2"><img src={FaTasks} alt="i"><a href="#">Projects</a></li>
          <li className="obj-3"><img src={FaTrophy} alt="i"><a href="#">Achievements</a></li>
          <li className="obj-4"><img src={FaCog} alt="i"><a href="#">Settings</a></li>
          <li className="obj-5"><img src={FaSignOutAlt} alt="i"><a href="#">Log out</a></li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
