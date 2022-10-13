import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Products from './components/props/Products';
import Parent from './components/props/Parent';
import TrueFalse from './components/States/TrueFalse';
import Counter from './components/States/Counter';

function App() {

  const Heading = () => <h1>YO!</h1>
  return (
    <div className="App">

    <TrueFalse/>
    <Counter/>
    </div>
  );
}

export default App;