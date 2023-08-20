import './App.css';
import './Nav.css';

export function Nav() {
    return (
        <nav className='nav-primary'>
            <ul className='nav-ul'>
                <li className='nav-li'>
                    Home
                </li>
                <li className='nav-li'>
                    About me
                </li>
                <li className='nav-li'>
                    Education
                </li>
                <li className='nav-li'>
                    Projects
                </li>
                <li className='nav-li'>
                    Connect
                </li>
            </ul>
        </nav>
    );
}