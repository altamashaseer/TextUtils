import logo from './logo.svg';
import './App.css';
let name = 'altamash';

function App() {
  return (
    //<></> this is jsx fragment to use multiple tags in one serve 
    <>
      <div className="container">
        hello from react {name}
      </div>
    </>
  );
}

export default App;
