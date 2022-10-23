// import './App.css';
import Header from './components/Header';
import AddBoat from "./components/AddBoat";
import ViewBoat from "./components/ViewBoat";
import BoatUpdate from "./components/BoatUpdate";
import './ViewBoat.css';
//import './Header.css';
import './AddBoat.css';
import './BoatUpdate.css';

//import {BrowserRouter as Router, Route} from "react-router-dom";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//import UpdateBoat from './components/UpdateBoat';


function App() {
  return (
    //<Router>
    <div>
      <Header/>

      <BrowserRouter>
          <Routes>

            
            <Route path="/add" exact element={<AddBoat/>} />
            <Route path="/" exact element={<ViewBoat/>} />
            <Route path="/update" exact element={<BoatUpdate/>} />
          </Routes>
        </BrowserRouter>


      
    </div>
    
  );
}

export default App;
