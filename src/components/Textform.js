import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        console.log('uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log('On change');
        setText(event.target.value) //to handle new inputs
    }


    const [text, setText] = useState('Enter text here...'); //pick from react doc


    
    
    return (
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" rows="8" value={text} onChange={handleOnChange} ></textarea>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            </div>
        )
}
