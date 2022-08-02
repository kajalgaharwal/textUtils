//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alerts from './components/Alerts';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [textMatter, setTextMatter] = useState('Enable Dark Mode');
  const [textColor, setTextColor] = useState('dark');
  const [alert, setAlert] = useState(null);

  const toggleModes = () => {
    if (mode === 'light') {
      setMode('dark');
      setTextMatter('Enable Light Mode');
      setTextColor('light');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has deen activated', 'success   ');
    } else {
      setMode('light');
      setTextMatter('Enable Dark Mode');
      setTextColor('dark');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has deen activated', 'success   ');
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar
          title='TextUtils'
          mode={mode}
          toggleModes={toggleModes}
          textMatter={textMatter}
          textColor={textColor}
          aboutText='About textUtils'
        />
        <Alerts alert={alert} />
        <div className='container'>
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route
              exact
              path='/'
              element={
                <TextBox
                  heading='Enter the text below to analyze'
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
