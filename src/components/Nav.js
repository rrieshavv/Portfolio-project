import '../assets/css/App.css';
import '../assets/css/Nav.css';

import { Link } from 'react-router-dom';

export function Nav() {
    return (
        <nav className='nav-primary'>
            <ul className='nav-ul'>
                <li className='nav-li'>
                    <Link to="/" className="link" >Home</Link>
                </li>
                <li className='nav-li'>
                    <Link to="/About" className="link" >About me </Link> 
                </li>
                <li className='nav-li'>
                    <Link to="/Education" className="link" >Education</Link>
                </li>
                <li className='nav-li'>
                    <Link to="/Projects" className="link" >Projects</Link>
                </li>
                <li className='nav-li'>
                    <Link to="/Connect" className="link" >Connect</Link>
                </li>
            </ul>
        </nav>
    );
}