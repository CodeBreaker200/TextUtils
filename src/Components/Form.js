import React, { useState } from 'react';

export default function Form(props) {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const msg = new SpeechSynthesisUtterance();

    const speakHandle = () => {
        msg.text = text;
        window.speechSynthesis.speak(msg);
    };

    const handleClear = () => {
        setText(''); 
        setText2('');
        setText3('');
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText3(newText);
    };

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText2(newText);
    };

    const handleUpperCopy = () => {
        var text = document.getElementById('mybox2');
        if (text) {
            text.select();
            text.setSelectionRange(0, 9999); 
            navigator.clipboard.writeText(text.value).then(() => {
                console.log('Text copied to clipboard');
            }).catch(err => {
                console.error('Error copying text: ', err);
            });
        } else {
            console.error('Element with ID mybox2 not found');
        }
    }
    
    const handleLowerCopy = () => {
        var text2 = document.getElementById('mybox3');
        if (text2) {
            text2.select();
            text2.setSelectionRange(0, 9999); 
            navigator.clipboard.writeText(text2.value).then(() => {
                console.log('Text copied to clipboard');
            }).catch(err => {
                console.error('Error copying text: ', err);
            });
        } else {
            console.error('Element with ID mybox3 not found');
        }
    }
    

    return (
        <>
            <div style={{color : props.mode === 'dark' ? 'white' : 'black'}} >
                <h2>{props.heading}</h2>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        style={{backgroundColor : props.mode === 'dark'? 'gray': 'white', color: props.mode === 'dark'? 'white':'black'}}
                        placeholder="Enter Text Here"
                        value={text}
                        onChange={handleOnChange}
                        id="mybox1"
                        rows="5"
                    ></textarea>
                    <h4 className="mt-3">UPPERCASE</h4>
                    <textarea
                        className="form-control mt-3"
                        disabled
                        style={{backgroundColor : props.mode === 'dark'? 'gray': 'white', color: props.mode === 'dark'? 'white':'black'}}
                        value={text2}
                        id="mybox2"
                        rows="5"
                    ></textarea>
                    <h4 className="mt-3">LOWERCASE</h4>
                    <textarea
                        className="form-control mt-3"
                        disabled
                        style={{backgroundColor : props.mode === 'dark'? 'gray': 'white', color: props.mode === 'dark'? 'white':'black'}}
                        value={text3}
                        id="mybox3"
                        rows="5"
                    ></textarea>
                </div>
                <button className="btn btn-primary mt-4" onClick={handleUpperCase}>
                    Convert To Uppercase
                </button>
                <button className="btn btn-warning mt-4 mx-3" onClick={handleLowerCase}>
                    Convert To Lowercase
                </button>
                <button className="btn btn-info mt-4 " onClick={speakHandle}>
                    Listen Paragraph
                </button>
                <button className="btn btn-danger mt-4 mx-3" onClick={handleUpperCopy}>
                    Copy Uppercase
                </button>
                <button className="btn btn-secondary mt-4 " onClick={handleLowerCopy}>
                    Copy Lowercase
                </button>

                <button className="btn btn-success mt-4 mx-3" onClick={handleClear}>
                    Clear Text
                </button>
            </div>

            <div className="container-fluid count my-3" style={{ backgroundColor : props.mode === 'dark' ? '#EEEEEE' : ''}}>
                <h2 className="text-primary">Your Text Summary</h2>
                <b>
                    <h5>Number Of Words: {text.split(/\s+/).filter(Boolean).length}</h5>
                </b> 
                <b>
                    <h5>Number Of Characters: {text.length}</h5>
                </b>
                <b>
                    <h5>Time To Read Paragraph: {0.008 * text.split(/\s+/).filter(Boolean).length} Minutes</h5>
                </b>
            </div>

            <div className="container para mt-4" style={{color : props.mode === 'dark' ? 'white' : 'black', backgroundColor : props.mode === 'dark' ? 'gray' : ''}}>
                <h4 className='text-warning'>Read Paragraph Here:</h4>
                <p className="cont-para">{text}</p>
            </div>
        </>
    );
}
