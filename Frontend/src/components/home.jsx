import './home.css';
import Menu from './menu.jsx';
function Home()
{
    return
    <div>
        <nav>
            <ul>
                <li className="nav-item1">
                <a href={Menu}><img src={img1} alt="logo" /></a>
                </li>
                <li className="nav-item2"><a href="#"><img src={img2} alt="logo2" /></a></li>
            </ul>
        </nav>
      
    </div>
}
export default Home;