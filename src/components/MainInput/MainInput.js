import React from 'react'
import './MainInput.css'


export default function MainInput(props) {
    return (
        <textarea 
            className='MainInput'
            wrap="soft"
            placeholder='Input anythink there...'
        />
    )
}