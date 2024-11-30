import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {Route,Routes} from "react-router-dom";
import React,{useState} from 'react'
function App() {
const [mode,Setmode] = useState('Light')

const toggleModeLight = ()=>{
if(mode==='Dark'){
        Setmode('Light');
        document.body.style.backgroundColor ='white';
        document.body.style.color ='black';
    }
}
const toggleModeDark = ()=>{
    if(mode==='Light'){
            Setmode('Dark');
            document.body.style.backgroundColor ='rgb(33 37 41';
            document.body.style.color ='wihte';
        }
    }
  return (
    <> 
<Navbar title="TextUtils" aboutText="About"  Mode={mode} TML={toggleModeLight} TMD={toggleModeDark} />

     <Routes>

          <Route path="/about" element={<About Mode={mode}/>}/>
          <Route path="/"element={ <TextForm heading="Enter your text to Analyze" Mode={mode}/>}/>

        </Routes>
        
    </>
  )
}

export default App;
