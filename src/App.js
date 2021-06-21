import '../src/App.css';
import {browserrouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import {Switch,Route} from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
     <div className="sidebar">
       <NavBar/>
     </div>
     <div className="main-content">
        <div className="content">
        <switch>
          <Route path="/" exact>
          <Homepage/>
          </Route>
          <Route path="/About" exact>
          <Aboutus/>
          </Route>
          <Route path="/Contact" exact>
          <Contact/>
          </Route>
          <Route path="/Portfolio" exact>
          <Portfolio/>
          </Route>

        </switch>
         
        </div>
    
    </div>
    </div>
  );
}

export default App;
