import logo from '../assets/HabLogo.png'

export default function Navigation(){
    return(
        <nav className="navBar">
            <div className="logoHolder">
                <img src={logo} alt="Habitual Logo" className="campLogo" />
            </div>
            <ul className="menu">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Register</li>
            </ul>

        </nav>
    );
}