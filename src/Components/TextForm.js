import React,{useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handelOnChange = (event)=>{
setText(event.target.value)

    }

    const textToUppercase = ()=>{
let UpperCaseText = text.toUpperCase()
setText(UpperCaseText)
    }

    const textToLowercase = ()=>{
        let LowerCaseText = text.toLowerCase()
        setText(LowerCaseText)
            }

    const Clear = ()=>{
              setText("")
                  }
        
    const Speak = ()=>{
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; 
  speechSynthesis.speak(utterance);

    }
      const Copy = ()=>{
  navigator.clipboard.writeText(text);
  props.ShowAlert("Copied","success")
      }

  return (
  <><div className="container">
    <h3 style={{color: props.Mode==='Light'?"black":"white"}}>{props.heading}</h3>
<div className="mb-3 container p-0">
  <textarea className={`form-control ${(props.Mode==='Light')?'':'placeholderColor'}`} placeholder='Ener Your Text Here' value={text} onChange={handelOnChange} style={props.Style[1]}  id="myBox" rows="8"></textarea>
<button  disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0} className='btn btn-primary my-3 mx-2' onClick={textToUppercase}>UpperCase</button>
<button  disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0} className='btn btn-primary my-3 mx-2' onClick={textToLowercase}>LowerCase</button>
<button  disabled={text.length===0} className='btn btn-primary my-3 mx-2' onClick={Clear}>Clear</button>
<button  disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0} className='btn btn-primary my-3 mx-2' onClick={Speak}>Speak</button>
<button  disabled={text.length===0} className='btn btn-primary my-3 mx-2' onClick={Copy}>Copy</button>
</div>





<div className="my-4" style={{color: props.Mode==='Light'?"black":"white"}}>
    <h3>Your Text Summary</h3>
    <p><b>Words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b></p>
    <p><b>Characters : </b>{text.length}</p>
    {text.split(" ").filter((element)=>{return element.length!==0}).length>0?<p>Average reader can read in<b> {(text.split(" ").filter((element)=>{return element.length!==0}).length/300).toFixed(3)} Minutes</b></p>:"Enter Something to summarise"}
    
</div>
</div>
</>
  )
}
