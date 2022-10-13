import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Products from './components/props/Products';
import Parent from './components/props/Parent';
//import TrueFalse from './components/States/TrueFalse';
//import Counter from './components/States/Counter';
import Login from './components/States/Login';

function App() {

  const Heading = () => <h1>YO!</h1>
  return (
    <div className="App">

    <Login/>
    

    </div>
  );
}

export default App;