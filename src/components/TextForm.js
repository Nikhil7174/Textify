import React, { useState } from 'react';


// import PropTypes from 'prop-types'  //rfc
export default function Textform(props) {

    // program to convert first letter of a string to uppercase

    const firLetterUp = () => {
        let newText = text.split(" ");
        let finalArr = []
        newText.forEach((element) => {
            let afterUp = element[0].toUpperCase();
            afterUp = afterUp.concat(element.substring(1))
            finalArr.push(afterUp);
        })
        setText(finalArr.join(" "));
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert('Converted to UpperCase', 'success');
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        // props.showAlert('Converted to LowerCase', 'success');
    }

    const clearText = () => {
        setText('');
        // props.showAlert('Cleared text', 'warning');
    }

    const handleCopy = () => {

        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert('Text copied to Clipboard', 'success');
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        // props.showAlert('Removed extra spaces', 'primary');
    }

    //     const words = mySentence.split(" ");

    // for (let i = 0; i < words.length; i++) {
    //     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    // }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <h1 >{props.heading} </h1><form>

                    <div className="form-group">
                        {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'dark' : 'light' }} placeholder='Enter text here' id="myBox" rows="8"></textarea>
                    </div>
                </form>
                <button className="btn btn-primary my-2 mx-1" disabled={text.length === 0} onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary my-2 mx-1" disabled={text.length === 0} onClick={handleLoClick}>Convert To Lowercase</button>


                <button className="btn btn-primary my-2 mx-1" disabled={text.length === 0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary my-2 mx-1" disabled={text.length === 0} onClick={firLetterUp}>Capitalize First Letter</button>
                <button className="btn btn-success my-2 mx-1" disabled={text.length === 0} onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-danger my-2 mx-1" disabled={text.length === 0} onClick={clearText}>Clear Text</button>
            </div>
            <div className="container">
                <h2>Your text summary</h2>
                <p>{text === "" ? "0" : text.trim().split(" ").length} words and {text.length} characters</p>
                <p>{(0.008 * (text.trim().split(" ").length))} Minutes required to read for a slow reader</p>
                <p>{0.0032 * text.trim().split(" ").length} Minutes required to read for an average reader</p>
                <h2>Preview</h2>
                <p >{text.length > 0 ? text : "Enter Text to preview"}</p>
            </div>
        </>
    )
}
