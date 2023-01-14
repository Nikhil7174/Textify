// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {


  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(51 64 76)';
      document.getElementById("myBox").style.background = '#1d252e'
      document.getElementById("myBox").style.color = 'white'
      document.body.style.color = 'white';
      // showAlert("Dark mode has been activated", "success");
      document.title = 'Textify';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.getElementById("myBox").style.background = 'white'
      document.getElementById("myBox").style.color = 'black'
      document.body.style.color = 'black';
      // showAlert("Light mode has been activated", "success");
      document.title = 'Textify';
    }
  }

  return (
    <>


      {/* <TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert} />
        <About /> */}
      <BrowserRouter>

        <Navbar title='Textify' mode={mode} toggleMode={toggleMode} aboutTextify='About Us' />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />

            < Route exact path="/"
              element={<TextForm heading="Enter the text to analyse: " mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </BrowserRouter>


    </>
  );
}

export default App;
