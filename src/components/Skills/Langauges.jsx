import '../../assets/css/App.css'
import '../../assets/css/Skills.css'

import Java from '../../assets/images/java.png';
import Python from '../../assets/images/python.png';
import CSharp from '../../assets/images/c-sharp.png';


export function Languages(){
    return(
        <div className='skills-container'>
            <div className="skill-box" style={{background:"#fff"}}>
                <img src={Java} alt="Java" />
                <p className='skill-text'>Java</p>
            </div>
            <div className="skill-box" style={{background:"#ED203D"}}>
                <img src={Python} alt="python" />
                <p className='skill-text'>Python</p>
            </div>
            <div className="skill-box" style={{background:"#FCBA28"}}>
                <img src={CSharp} alt="c-sharp" />
                <p className='skill-text'>C-Sharp</p>
            </div>
        </div>
    );
}