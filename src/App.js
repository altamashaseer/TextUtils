// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Form from './components/Textform';


//import name could be anything since its default export

function App() {
  const [mode, setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    //<></> this is jsx fragment to use multiple tags in one serve 
    <>
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <Form heading="Enter text to analyse below" mode={mode}/>
    {/* <About/> */}
    </div>
    </> 
  );
}

export default App;
