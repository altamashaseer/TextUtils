// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Form from './components/Textform';
import Alert from './components/Alert';
//import name could be anything since its default export
import {
  BrowserRouter,
  Routes,
  Route,
  // Link to be imported where used (Navbar)
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode is enabled', 'success')
      // document.title = 'Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode is enabled', 'success')
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    //<></> this is jsx fragment to use multiple tags in one serve 
    <>
      <BrowserRouter>
      {/* below components does not use route */}
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} /> 
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Form heading="Enter text to analyse below" mode={mode} showAlert={showAlert} />}/>
          <Route path="about" element={<About mode={mode}/>}/>
        </Routes>
      </div>
    </BrowserRouter> 
    </>
  );
}

export default App;
