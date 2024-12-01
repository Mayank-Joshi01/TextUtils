import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {Route,Routes} from "react-router-dom";
import React,{useState} from 'react';
import Alert from './Components/Alert';

function App() {
const [style,Setstyle] = useState([]);
const [alert , Setalert] = useState(null)
const [mode,Setmode] = useState('Light')

const Showalert = (message,type)=>{
Setalert({
  msg:message,
 type:type,
})
setTimeout(() => {
  Setalert(null)
}, 1500);
}
const toggleModeLight = ()=>{
if(mode==='Dark'){
        Setmode('Light');
        document.body.style.backgroundColor ='white';
        document.body.style.color ='black';
        Showalert("Light mode is enabled","success");
    }
}
const toggleModeDark = ()=>{
    if(mode==='Light'){
            Setmode('Dark');
            document.body.style.backgroundColor ='rgb(33 37 41';
            document.body.style.color ='wihte';
            Showalert("Dark mode is enabled","success");

            Setstyle([{
              backgroundColor:"black",
              color:"white"
            },
            {
              backgroundColor:"#353535",
              color:"white"
            }])
        }
    }
  return (
    <> 
<Navbar title="TextUtils" aboutText="About"  Mode={mode} TML={toggleModeLight} TMD={toggleModeDark} />
<Alert Alert={alert}/>

     <Routes>

          <Route path="/about" element={<About Mode={mode} Style={style}/>}/>
          <Route path="/"element={ <TextForm heading="Enter your text to Analyze" Style={style} Mode={mode} ShowAlert={Showalert}/>}/>

        </Routes>
        
    </>
  )
}

export default App;
