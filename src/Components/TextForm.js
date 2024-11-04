import React,{useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handelOnChange = (event)=>{
console.log("Value changed")
setText(event.target.value)

    }

    const textToUppercase = ()=>{
console.log("upper case is clicked")
let UpperCaseText = text.toUpperCase()
setText(UpperCaseText)
    }

    const textToLowercase = ()=>{
        console.log("upper case is clicked")
        let LowerCaseText = text.toLowerCase()
        setText(LowerCaseText)
            }

    const Clear = ()=>{
              setText("")
                  }
        
    const Speak = ()=>{
console.log("Speaking")
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; 
  speechSynthesis.speak(utterance);

    }
      


  return (
  <>
    <h3>{props.heading}</h3>
<div className="mb-3">
  <textarea className="form-control" placeholder='Ener Your Text Here' value={text} onChange={handelOnChange}  id="myBox" rows="8"></textarea>
<button className='btn btn-primary my-3 mx-2' onClick={textToUppercase}>UpperCase</button>
<button className='btn btn-primary my-3 mx-2' onClick={textToLowercase}>LowerCase</button>
<button className='btn btn-primary my-3 mx-2' onClick={Clear}>Clear</button>
<button className='btn btn-primary my-3 mx-2' onClick={Speak}>Speak</button>
</div>





<div className="container my-4">
    <h3>Your Text Summary</h3>
    <p><b>Words : {text.split(" ").length}</b></p>
    <p><b>Characters : </b>{text.length}</p>
    <p>Average reader can read in<b> {(text.length/300).toFixed(3)} Minutes</b></p>
</div>
</>
  )
}
