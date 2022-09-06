// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import Form from './components/Textform';

//import name could be anything since its default export

function App() {
  return (
    //<></> this is jsx fragment to use multiple tags in one serve 
    <>
    <Navbar title="TextUtils" about="About Us"/>
    <div className="container">
    {/* <Form heading="Enter text to analyse below"/> */}
    <About/>
    </div>
    </> 
  );
}

export default App;
