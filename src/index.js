import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React,{useState} from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const [mode, Setmode] = useState("Light");

const toggleMode = ()=>{
  if (mode==="Light"){
    Setmode("Dark");
  }
  else if(mode==="Dark"){
    Setmode("Light");
  }
}


const router = createBrowserRouter([
  {
    path: "/", 
    element: <Navbar Mode={mode}/>,
    children:[
         {
             path: "/", 
             element:<TextForm heading="Enter your text to Analyze" Mode={mode}/>
             
         },
         {
             path: "/About",
             element: <About Mode={mode}/>
         },
    ]
}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
