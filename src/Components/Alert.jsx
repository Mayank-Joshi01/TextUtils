// rfc
import React from 'react'

export default function Alert(props) {
    const Capetalize = (text)=>{
const Text = text.toLowerCase();
return Text.charAt(0).toUpperCase()+Text.slice(1);
    }
  return (
    
   props.Alert && <div class={`alert alert-${props.Alert.type} d-flex align-items-center mx-1`} role="alert">
  <div>
    <strong>{Capetalize(props.Alert.type)}</strong> : {props.Alert.msg}
  </div>
</div>
    
  )
}
