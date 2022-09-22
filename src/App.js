
import './App.css';
import Info from './Info.js';
import Help from './Help'; 
import Demo from './Demo';
import Review from './Review';
import Section from './Section';
import FAQ from './FAQ';
import Footer from './Footer';


function App() {

  return (
    <div>
      <Info />
      <Help/>
      <br></br><Demo/>
      <Review/>
      <br></br><br></br><br></br><Section/>
      <br></br><br></br><FAQ/>
      <br></br><Footer/>
    </div>
  );

}

export default App;
