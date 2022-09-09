import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState(''); //pick from react doc
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
    const handleCopy=()=>{
        var text =document.getElementById('myBox');
        text.select();
        // text.setSelectionRange(0,9999); no use 
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '));
    }
    const handleOnChange=(event)=>{
        console.log('On change');
        setText(event.target.value) //to handle new inputs
    }

    return (
            <>
            <div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h1 className='my-2'>{props.heading}</h1>
                {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label> */}
                <textarea className="form-control" rows="8" id='myBox' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey' , color:props.mode==='light'?'black':'white'}} ></textarea>
                <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words, {text.length} Characters</p>
                <p> {.008*text.split(" ").length} minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter text to preview'}</p>
            </div>

            </>
        )
    }
