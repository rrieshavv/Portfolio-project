import '../../assets/css/App.css'
import '../../assets/css/Skills.css'

import Aws from '../../assets/images/aws.png';


export function Cloud(){
    return(
        <div className='skills-container'>
            <div className="skill-box" style={{background:"#fff"}}>
                <img src={Aws} alt="aws" />
                <p className='skill-text'>AWS</p>
            </div>
        </div>
    );
}