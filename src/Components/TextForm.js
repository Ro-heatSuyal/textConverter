import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    // setText(" You have clicked on handleUpClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
  };
  const handleloClick = () => {
    // console.log("uppercase was clicked" + text);
    // setText(" You have clicked on handleUpClick");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success")
  };
  const handleClearClick = () => {
    // console.log("uppercase was clicked" + text);
    // setText(" You have clicked on handleUpClick");
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared","success")
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  // text("new text"); // wrong way to change the State
  //setText("new text"); // correct way to change the State
  return (
    <>
      <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{background:props.mode==='dark'?'#221e1e':'white', color:props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.lenght===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.lenght===0} className="btn btn-primary mx-2 my-1" onClick={handleloClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.lenght===0}  className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1> Your text summary</h1>

        <p>
          {text.split(" ").filter((element)=>{return element.lenght!==0}).length} words, {text.length} character
        </p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
