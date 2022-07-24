import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import {Footer} from "./components/footer";
import Home from './ex1/home';
import Changecar from './ex2/changecar';

function App() {
  return (
    <div className="App">
      <Changecar />
    </div>
  );
}

export default App;
