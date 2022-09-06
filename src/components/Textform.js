import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter text here...'); //pick from react doc
    const handleUpClick=()=>{
        console.log('uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText)
    }    
    const handleLoClick=()=>{
        console.log('lowercase was clicked');
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        console.log('clear was clicked');
        let newText = ' ';
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log('On change');
        setText(event.target.value) //to handle new inputs
    }

    return (
            <>
            <div className="mb-3">
                <h1 className='my-2'>{props.heading}</h1>
                {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label> */}
                <textarea className="form-control" rows="8" value={text} onChange={handleOnChange} ></textarea>
                <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words, {text.length} Characters</p>
                <p> {.008*text.split(" ").length} minutes read </p>
            </div>

            <h2>Preview</h2>
            <p>{text}</p>
            </>
        )
    }
