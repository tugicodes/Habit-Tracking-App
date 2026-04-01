import logo from '../assets/HabLogo.png'
import {Link} from 'react-router-dom'

export default function Navigation(){
    return(
        <nav className="navBar">
            <div className="logoHolder">
                <img src={logo} alt="Habitual Logo" className="campLogo" />
            </div>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">About</Link></li>
                <li><Link to="/contacts">Contact Us</Link></li>
                <li><Link to="/signup">Join Us</Link></li>
            </ul>

        </nav>
    );
}