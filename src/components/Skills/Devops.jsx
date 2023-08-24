import '../../assets/css/App.css'
import '../../assets/css/Skills.css'

import Git from '../../assets/images/git.png';


export function Devops(){
    return(
        <div className='skills-container'>
            <div className="skill-box" style={{background:"#fff"}}>
                <img src={Git} alt="git" />
                <p className='skill-text'>Git</p>
            </div>
        </div>
    );
}