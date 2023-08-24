import '../../assets/css/App.css'
import '../../assets/css/Skills.css'

import Mysql from '../../assets/images/mysql.png';


export function Databases(){
    return(
        <div className='skills-container'>
            <div className="skill-box" style={{background:"#fff"}}>
                <img src={Mysql} alt="mysql db" />
                <p className='skill-text'>MySQL</p>
            </div>
        </div>
    );
}