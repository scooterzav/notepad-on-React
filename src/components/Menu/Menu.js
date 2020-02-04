import React, {useContext, useState} from 'react'
import {CSSTransition} from 'react-transition-group';

import {popupContext} from '../../context/Сontexts'
import SubMenu from './SubMenu/SubMenu'
import * as handlers from './menuHandlers.js'
import './Menu.css'



export default function Menu(props) {
    const [, popupDispatch] = useContext(popupContext);
    const [subMenu, setSubMenu] = useState({items:[],visible:false,shift:0});
    const menu = [
        {
            caption:'File',
            subMenu: [
                {
                    caption: 'Server actions',
                    subMenu: [
                        {
                            caption: 'Open file',
                            handler: ()=>handlers.open(popupDispatch)
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
                                    handler: ()=>handlers.saveAs(popupDispatch)
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

    return (
        <div className='Menu'>
            <ul>
                {menu.map((item,index)=>
                    <li 
                        key={index}
                        onClick={(e) => showSubMenu(item,e.target.offsetLeft)}
                    >
                        {item.caption}
                    </li>
                )} 
            </ul>     
            <CSSTransition
                in={subMenu.visible}
                timeout={500}
                classNames='sub'
                mountOnEnter
                unmountOnExit
            >
                <SubMenu 
                    style={{ transform: `translateX(${subMenu.shift}px)`}} 
                    clickHandler={showSubMenu} 
                    items={subMenu.items}
                />
            </CSSTransition>
        </div>
    )


    function showSubMenu(parentMenu, shift=0) {
        if(parentMenu.subMenu!==undefined) {
            if((JSON.stringify(parentMenu.subMenu)===JSON.stringify(subMenu.items))&&(subMenu.visible)) {
                setSubMenu({items:parentMenu.subMenu,visible:false});
            } else {
                setSubMenu({items:parentMenu.subMenu,visible:true,shift})
            }
        } else {
            if(parentMenu.handler!==undefined)
                if (parentMenu.handler!=='') {
                    setSubMenu({items:subMenu.items,visible:false});
                    parentMenu.handler();
                }
                else console.log('Обработчик ' + parentMenu.caption + ' не написан!');           
        }
        

    }
}

