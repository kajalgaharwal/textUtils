import React, { useState } from 'react';

export default function TextBox(props) {
  const [text, setText] = useState('enter text here');

  const handleUpClick = () => {
    let upperTxt = text.toUpperCase();
    setText(upperTxt);
    props.showAlert('  Text changed to upper case', 'success  ');
  };

  const handleLowClick = () => {
    let lowerTxt = text.toLowerCase();
    setText(lowerTxt);
    props.showAlert('  Text changed to lower case', 'success  ');
  };

  const handleFirstUpClick = () => {
    let words = text.split(' ');
    let capitalTxt = '';
    words.forEach(element => {
      capitalTxt += element.charAt(0).toUpperCase() + element.slice(1) + ' ';
    });
    setText(capitalTxt);
    props.showAlert('  Text first letter capitalized', 'success  ');
  };
  const handleCopyClick = () => {
    let copyTxt = document.getElementById('myBox');
    navigator.clipboard.writeText(copyTxt.value);
  };

  const handleExtraSpace = () => {
    let extraSpace = text.split(/[ ]+/);
    setText(extraSpace.join(' '));
    props.showAlert('  Text extra spaces handled', 'success  ');
  };
  const handleOnChange = event => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className='container'
        style={{
          color: props.mode === 'dark' ? 'white' : 'black'
        }}>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            style={{
              background: props.mode === 'dark' ? '#042743' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            className='form-control'
            value={text}
            onChange={handleOnChange}
            id='myBox'
            rows='3'></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className='btn btn-primary mx-3' onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button className='btn btn-primary mx-3' onClick={handleFirstUpClick}>
          Convert First letter to UPPER CASE
        </button>
        <button className='btn btn-primary mx-3' onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className='btn btn-primary my-3' onClick={handleExtraSpace}>
          Handle Extra Spaces
        </button>
      </div>
      <div
        className='container my-3'
        style={{
          color: props.mode === 'dark' ? 'white' : 'black'
        }}>
        <h3>Summary</h3>
        <p>
          {text.split(' ').length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').length} minutes to read!!</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
