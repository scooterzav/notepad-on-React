import React, {useContext, useState} from 'react'
import './ServerPopup.css'
import ParentPopup from './../ParentPopup'
import {popupContext} from './../../../context/Сontexts'
import {setMainText} from './../../../mainTextFunctions'
import * as fireBase from './../../../fireBase'
import {getMainText} from './../../../mainTextFunctions'

export default function ServerPopup(props) {
    const [, popupDispatch] = useContext(popupContext);
    const [fileName, setFileName] = useState("");

    // transform JSON to array of objects
    const dataArray = [];
    for(let id in props.data.serverData) {
        dataArray.push({...props.data.serverData[id], id});
    }

    return (
        <ParentPopup title={props.title}>
            <div className='serverpopup'>
                <ul>
                    {dataArray.map((file,index)=>
                        <li 
                            key={index}
                            onClick={()=>setFileName(file.name)}
                            onDoubleClick={()=>{
                                if (props.data.query==='get') {
                                    popupDispatch({handler:'HIDE'});
                                    openFile(file.name);
                                }
                            }}
                        >
                            <span>{file.name}</span>
                            <span className='textLen'>{` length: ${file.text.length}`}</span>
                        </li>
                    )}
                </ul>
                <form>
                    <input 
                        type='text' 
                        placeholder='filename'
                        value={fileName}
                        onChange={(e)=>setFileName(e.target.value)}
                    />
                    {props.data.query==='get'
                        ? <button onClick={(e)=>{
                            e.preventDefault();
                            popupDispatch({handler:'HIDE'});
                            openFile(fileName)
                        }}>
                            Open
                        </button> 
                        : <button onClick={(e)=>{
                            e.preventDefault();
                            popupDispatch({handler:'HIDE'});
                            saveFile()
                        }}>
                            Save
                        </button> 
                    }
                </form>
            </div>
        </ParentPopup>
    )

    async function saveFile() {
        const data={name:fileName,text:getMainText(), date:new Date()};
        await fireBase.post(data);
    }

    function openFile(name){
        const data = dataArray.find(e=>e.name===name)
        if(data!== undefined) setMainText(data.text)
        else alert('No such file')       
    }
}