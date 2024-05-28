import './App.css';
import Form from './Components/Form';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import React, {useState} from 'react'

function App() {

   const [mode, Setmode] = useState('light')
  
   const togglemode = ()=>{
    if(mode === 'light' )
      {
        Setmode('dark');
         document.body.style.backgroundColor = '#191919'
      }

      else
      {
        Setmode('light');
        document.body.style.backgroundColor = 'white'
      }

    };



  return (
    <>
      <Navbar brand={'TextUtils'} aboutText='About Us'  mode={mode} togglemode={togglemode}  contactText='Contact US' />
      <div className="container mt-4 my-3">
        <Form mode={mode} heading = 'Enter Text To Analyze Below'/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
