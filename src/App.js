import './assets/css/App.css';
import {Nav} from './components/Nav';
import {Home} from './components/Home';


function App() {
  return (
    <>
      <Nav />
      <Home 
        name="Rishav"
        role="Software Developer"
        bio_line_1="You’ve come to the right person."
        bio_line_2="I design and develop software applications..."
      />
      <div className="footer">
        <p className='footer-text'>Copyright &copy; Rishav Karna, 2023. </p>
      </div>
    </>
  );
}

export default App;
