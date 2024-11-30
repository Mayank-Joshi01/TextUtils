import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {Route,Routes} from "react-router-dom";
function App() {
  return (
    <> 
<Navbar title="TextUtils" aboutText="About" />

     <Routes>

     <Route path="/about" element={<About/>}/>
           

          <Route path="/"element={ <TextForm heading="Enter your text to Analyze"/>}/>

    

          </Routes>
        

    </>
  );
}

export default App;
