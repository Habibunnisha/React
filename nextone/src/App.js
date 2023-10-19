import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Display from './Display';
import Register from './Register';
import IncrementCounter from './IncrementCounter';
import TitleProgram from './TitleProgram';

function App() {
  return (
    <div className="App">
    <h1>Hello welcome to react  js first output</h1>
    <Home name='habi' practice='Reactjs'>iam a child</Home>
    <Display name='bubbly'></Display>
    <Register></Register>
    <IncrementCounter></IncrementCounter>
    <TitleProgram></TitleProgram>
    </div>
  );
}

export default App;
