import '../assets/css/App.css';
import '../assets/css/Nav.css';

import { Link } from 'react-router-dom';

export function AboutNav() {
    return (
        <nav className='nav-primary'>
            <ul className='nav-ul'>
                <li className='nav-li'>
                    <Link to="" className="link" >Languages</Link>
                </li>
                <li className='nav-li'>
                    <Link to="Frontend" className="link" >Frontend </Link> 
                </li>
                <li className='nav-li'>
                    <Link to="Backend" className="link" >Backend</Link>
                </li>
                <li className='nav-li'>
                    <Link to="Databases" className="link" >Databases</Link>
                </li>
                <li className='nav-li'>
                    <Link to="DevOps" className="link" >DevOps</Link>
                </li>
                <li className='nav-li'>
                    <Link to="Cloud" className="link" >Cloud</Link>
                </li>
            </ul>
        </nav>
    );
}