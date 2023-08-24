import '../../assets/css/App.css'
import '../../assets/css/Skills.css'

import Html from '../../assets/images/html.png';
import Css from '../../assets/images/css.png';
import Js from '../../assets/images/js.png';
import Reactjs from '../../assets/images/reactjs.png';


export function Frontend(){
    return(
        <div className='skills-container'>
            <div className="skill-box" style={{background:"#fff"}}>
                <img src={Html} alt="html5" />
                <p className='skill-text'>HTML5</p>
            </div>
            <div className="skill-box" style={{background:"#ED203D"}}>
                <img src={Css} alt="css3" />
                <p className='skill-text'>CSS3</p>
            </div>
            <div className="skill-box" style={{background:"#FCBA28"}}>
                <img src={Js} alt="javascript" />
                <p className='skill-text'>JavaScript</p>
            </div>
            <div className="skill-box" style={{background:"#7b5ea7"}}>
                <img src={Reactjs} alt="reactjs" />
                <p className='skill-text'>React.js</p>
            </div>
        </div>
    );
}