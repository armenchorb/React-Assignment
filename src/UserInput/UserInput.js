import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    }
    return (
        <div className='App'>
            <input style={inputStyle} type='text' onChange={props.changed} value={props.currentName}/>
        </div>
    )
}

export default userInput;