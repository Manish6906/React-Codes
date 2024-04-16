
import PropTypes from 'prop-types'
import React, { useState } from 'react'





export default function TextForm(props) {

    // const [text,setText] = useState("Enter your name");
    const [text , setText] =useState("");
    // setText("abc");   // correct way to change text

   

    const abc=()=>
    {
        // console.log("UpperCase was clicked"+ text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Convert successfully to UpperCase","success:")
        // document.write("button was clicked")
    }
    const small=()=>
    {
        // console.log("UpperCase was clicked"+ text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Convert successfully to LowerCase","success:")
        // document.write("button was clicked")
    }

    const clearA=()=>
    {
        setText("")
        props.showAlert("Clear successfully","success:")
        
    }

    const xyz=(e)=>
    {
        // console.log("onchange function run")
        setText(e.target.value)
    }

    const copyText=()=>
    {
      console.log("text was copy");
      let text=document.getElementById('box1')
      text.select();
      navigator.clipboard.writeText(text.value)
      document.getSelection().removeAllRanges();
      props.showAlert("Copy successfully","success:")
    }

  return (
    <>
    <h1 className={`container text-center text-${props.mode==='light' ? 'dark' : 'light'}`}>Word Counter</h1>
    <div>
    <h1 className={`text-${props.mode==='light' ? 'dark' : 'light'}`}>{props.heading}</h1> 
   
<div className="" >
  <textarea className="form-control border border-1" onChange={xyz} value={text} style={{backgroundColor: props.mode==='light' ? 'white' : '#616161', color : props.mode==='light' ? 'black' : 'white' }} id="box1" rows="10"></textarea>
</div>
      <button disabled={text.length===0} className="btn btn-primary my-2" onClick={abc} >Convert to upperCase</button>
      <button  disabled={text.length===0} className="btn btn-primary my-2  d-table" onClick={small}>Convert to LowerCase</button>
      <button  disabled={text.length===0} className="btn btn-primary my-2  d-table" onClick={clearA}>Clear text in one click </button>
      <button  disabled={text.length===0} className="btn btn-primary my-2  d-table" onClick={copyText}> Copy text in one click </button>
    </div>
    <div className="">
      <h1 className={`text-${props.mode==='light' ? 'dark' : 'light'}`}>Your summary</h1>
      <p className={`text-${props.mode==='light' ? 'dark' : 'light'}`}>{text.split(" ").filter((element)=>{return element.length!==0}).length}  words AND {text.split(" ").filter((element)=>{return element.length!==0}).length} Characters</p>
      <p className={`text-${props.mode==='light' ? 'dark' : 'light'}`}>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h3 className={`text-${props.mode==='light' ? 'dark' : 'light'}`}>Preview</h3>
      <p className={`text-${props.mode==='light' ? 'dark' : 'light'}`}>{text.length>0 ? text : 'Enter something to preview it'}</p>
    </div>
    </>
  );
}
TextForm.propTypes={
    address: PropTypes.string.isRequired
    
}

TextForm.defaultProps={
    address:"Set Address here"

}




























// let res=[2,4].map(val=> {
//   if(typeof val === 'number')return;
//   console.log(val*5)
// })
// console.log(res)