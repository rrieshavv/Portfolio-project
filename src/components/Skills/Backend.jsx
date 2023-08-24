import '../../assets/css/App.css'
import '../../assets/css/Skills.css'

import Net from '../../assets/images/net.png';
import Java from '../../assets/images/java.png';



export function Backend(){
    return(
        <div className='skills-container'>
            <div className="skill-box" style={{background:"#7b5ea7"}}>
                <img src={Net} alt="asp.net" />
                <p className='skill-text'>ASP.NET</p>
            </div>
            <div className="skill-box" style={{background:"#fff"}}>
                <img src={Java} alt="Java" />
                <p className='skill-text'>Java</p>
            </div>
        </div>
    );
}