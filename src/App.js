import logo from './logo.svg';
import './App.css';
import LoginControl from './LoginControl';
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
//import Person from './Person';
//import Products from './components/props/Products';
//import Parent from './components/props/Parent';
//import TrueFalse from './components/States/TrueFalse';
//import Counter from './components/States/Counter';
//import Login from './components/States/Login';

function App() {

  const Heading = () => <h1>Login!</h1>
  return (
    <div className="App">

    <LoginControl/>
    <Greeting/>
    <LoginButton/>
    <LogoutButton/>
    
    </div>
  );
}

export default App;