import React,{useState} from 'react'
import { useRef } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("");
    const [listening, setListening] = useState(false);

    // const [transcript, setTranscript] = useState("");
    const transcriptRef = useRef("");

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
  utterance.lang = `${props.lan}`; // Set the correct language

  const voices = speechSynthesis.getVoices();
  const Voice = voices.find(voice => voice.lang === `${props.lan}`);

  if (Voice) {
    utterance.voice = Voice;
  } else {
    console.warn("Hindi voice not found, using default voice");
  }

  speechSynthesis.speak(utterance);
    }

    
      const Copy = ()=>{
  navigator.clipboard.writeText(text);
  props.ShowAlert("Copied","success")
      }


      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionRef = useRef(null);


const startListening = () => {
  if (!SpeechRecognition) {
    alert("Speech Recognition not supported in this browser.");
    return;
  }

  recognitionRef.current = new SpeechRecognition();
  recognitionRef.current.continuous = true;
  recognitionRef.current.interimResults = true;
  recognitionRef.current.lang = `${props.lan}`;

  recognitionRef.current.onresult = (event) => {
    console.log("recongnitionRef.current:");
    let interimTranscript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const result = event.results[i];
      if (result.isFinal) {
        // setTranscript(prev => prev + result[0].transcript + " ");
        transcriptRef.current += result[0].transcript + " "; 
        // console.log("transcriptRef:", transcriptRef.current);
        // console.log("result:", result);
        // console.log("event:", event);
        // console.log("result.[0]:", result[0]);
        console.log("SetText:  ");
        setText(prev => prev + result[0].transcript + " ");
      } else {
        interimTranscript += result[0].transcript;
        
      }
    }
  };

  recognitionRef.current.start();
  setListening(true);
};

console.log("current language:", props.lan);

const stopListening = () => {
  recognitionRef.current?.stop();
  setListening(false);
};


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
<button  className='btn btn-primary my-3 mx-2' onClick={startListening}>Listen</button>
<button  disabled={!listening} className='btn btn-primary my-3 mx-2' onClick={stopListening}>Stop Lisening</button>
{listening && <div className='text-center mt-3 '> <p className='blockquote-footer'> <i>listening.....</i></p></div>}
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
