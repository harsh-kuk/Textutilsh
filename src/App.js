// import logo from './logo.svg';
import React ,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode,setmode]=useState('dark');
  const [alert,setalert]=useState(null)

  const showAlert=(message,type)=>{
     setalert({
      msg:message,
      type: type
})
setTimeout(() => {
  setalert(null); 
}, 3000);
  }


  const togglemode =()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor="grey";
      showAlert("dark mode has enabled","success")
      // document.title="Textutils -Dark mode"
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode has enabled","success")
      //   document.title="Textutils -light mode"

    }
  }
  return (
    <>
    <Router>

  <Navbar mode ={mode} togglemode={togglemode} /> 
  <Alert alert={alert}/>
  <div className='container my-3'> 
  <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={
          <TextForm showAlert={showAlert} heading ="Enter your text to analyze" mode={mode}/>}/>
         </Routes>  
   </div>
      </Router>  
     
   </>
  );
}

export default App;
