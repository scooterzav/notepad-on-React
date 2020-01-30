import React, {useContext, useState} from 'react'
import {popupContext} from '../../context/Сontexts'
import SubMenu from './SubMenu/SubMenu'
import * as handlers from './menuHandlers.js'
import './Menu.css'

const menu = [
    {
        caption:'File',
        subMenu: [
            {
                caption: 'Server actions',
                subMenu: [
                    {
                        caption: 'Open file',
                        handler: ()=>handlers.open()
                    },
                    {
                        caption: 'Save file',
                        subMenu: [
                            {
                                caption: 'Save',
                                handler: ()=>handlers.save()
                            },
                            {
                                caption: 'Save as',
                                handler: ()=>handlers.saveAs()
                            }
                        ]
                    }
                ]
            },
            {
                caption: 'Clear',
                handler: ()=>handlers.clear()
            },
        ]
    },
    {
        caption:'Edit',
        subMenu: [
            {
                caption: 'Copy',
                handler: ''
            },
            {
                caption: 'Cut',
                handler: ''
            },
            {
                caption: 'Paste',
                handler: ''
            }
        ]
    },
    {
        caption:'About',
        handler: ''
    }
]

export default function Menu(props) {
    const [popupState, popupDispatch] = useContext(popupContext);
    const [subMenu, setSubMenu] = useState({items:[],visible:false});

    return (
        <div className='Menu' 
            onClick={()=>{
                 if(popupState.visible) popupDispatch({type:"HIDE"})
                 else popupDispatch({type:"SHOW"})
            }}
        >
            <ul>
                {menu.map((item,index)=>
                    <li 
                        key={index}
                        onClick={(e) => showSubMenu(item)}
                    >
                        {item.caption}
                    </li>
                )} 
            </ul>     
            {subMenu.visible && <SubMenu clickHandler={showSubMenu} items={subMenu.items}/>} 
        </div>
    )


    function showSubMenu(parentMenu) {
        //const [mainInput, setInput] = useContext(textContext);
        //console.log(mainInput.text)
        //setInput({type:'SET_TEXT', text:'test'});

        if(parentMenu.subMenu===subMenu.items) 
            return setSubMenu({items:[],visible:false})

        if(parentMenu.subMenu!==undefined) {
            return setSubMenu({items:parentMenu.subMenu,visible:true})
        } else {
            if(parentMenu.handler!==undefined)
                if (parentMenu.handler!=='') {
                    setSubMenu({items:[],visible:false});
                    parentMenu.handler();
                }
                else console.log('Обработчик ' + parentMenu.caption + ' не написан!');           
        }
    }
}

