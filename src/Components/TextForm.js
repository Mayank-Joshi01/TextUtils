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
      const Copy = ()=>{
  // Get the text field
  var copyText = document.getElementById("myBox");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  props.ShowAlert("Copied","success")
      }

  return (
  <><div className="container">
    <h3 style={{color: props.Mode==='Light'?"black":"white"}}>{props.heading}</h3>
<div className="mb-3 container p-0">
  <textarea className="form-control" placeholder='Ener Your Text Here' value={text} onChange={handelOnChange} style={props.Style[1]}  id="myBox" rows="8"></textarea>
<button className='btn btn-primary my-3 mx-2' onClick={textToUppercase}>UpperCase</button>
<button className='btn btn-primary my-3 mx-2' onClick={textToLowercase}>LowerCase</button>
<button className='btn btn-primary my-3 mx-2' onClick={Clear}>Clear</button>
<button className='btn btn-primary my-3 mx-2' onClick={Speak}>Speak</button>
<button className='btn btn-primary my-3 mx-2' onClick={Copy}>Copy</button>
</div>





<div className="my-4" style={{color: props.Mode==='Light'?"black":"white"}}>
    <h3>Your Text Summary</h3>
    <p><b>Words : {text.split(" ").length}</b></p>
    <p><b>Characters : </b>{text.length}</p>
    {text.length>0?<p>Average reader can read in<b> {(text.length/300).toFixed(3)} Minutes</b></p>:"Enter Something to summarise"}
    
</div>
</div>
</>
  )
}
