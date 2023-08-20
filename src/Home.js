import './App.css';
import './Home.css';

export function Home({name, role, bio_line_1, bio_line_2}){
    return(
        <div className='hero'>
            <div className='hero-title font-title'>
                    Welcome, <br />
                    I'm {name}
            </div>
            <p className='role'>{role}</p>
            <p className='bio'>{bio_line_1}<br/>{bio_line_2}</p>
            <button className='hire-btn'>Hire me right away</button>
        </div>
    );
}