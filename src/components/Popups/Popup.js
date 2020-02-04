import React from 'react'
import ServerPopup from './ServerPopup/ServerPopup'

export default function Popup(props) {
    if(props.type==='') alert('Не задан тип Popup');
    return (
        <>
            {props.type==='server' && <ServerPopup title={props.title} queryType={props.queryType} data={props.data}/>}
        </>
    )   
}