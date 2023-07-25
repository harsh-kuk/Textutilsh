import React, { useState } from "react";
export default function TextForm(props) {

  const handleupclick = () => {
    console.log("uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to uppercase","success")
  };
  const handleloclick = () => {
    console.log("lowercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to lowercase","success")

  };
  const handleclearclick = () => {
    let newtext = " ";
    setText(newtext);
    props.showAlert("clear text enabled","success")

  };

  const handleonchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container"  style={{
              Color: props.mode === "dark" ? "white" : "black"
            }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white", Color: props.mode === "dark" ? "white" : "black"
            }}
            id="Mybox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleupclick}>
          Convert to uppercase 
        </button> 
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloclick}>
          Convert to lowercase 
        </button> 
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclearclick}>
          Clear text
        </button>
      </div>
      <div className="container my-3" style={{
              Color: props.mode === "dark" ? "white" : "black",
            }}>
        <h2>your text summary</h2>
        <p>
          {" "}
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
