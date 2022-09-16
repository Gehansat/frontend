// import './App.css';
import Header from './components/Header';
import AddBoat from "./components/AddBoat";
//import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    //<Router>
    <div>
      <Header/>

   

      <AddBoat/>
    </div>
    //</Router> <Route path="/add" exact component={AddBoat}/>
  );
}

export default App;
