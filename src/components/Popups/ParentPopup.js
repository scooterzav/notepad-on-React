import React, {useContext} from 'react'
import './ParentPopup.css'
import {popupContext} from '../../context/Сontexts'

export default function ParentPopup(props) {
    const [, popupDispatch] = useContext(popupContext);
    return (
        <>
            <div className='overlay' onClick={()=>popupDispatch({handler:"HIDE"})}/>
            <div className='popupwindow'>

                <div className='popuptitle'>{props.title}</div>
                <div className='parentpopup'>
                    {props.children}
                </div>
            </div>

        </>
    )
}