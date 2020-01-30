import React from 'react'
import './SubMenu.css'

export default function SubMenu(props) {
    return (
        <div className='SubMenu'>
            <ul>
                {props.items.map((item,index)=>
                    <li 
                        key={index}
                        onClick={(e)=>props.clickHandler(item)}
                    >
                        {item.caption} &emsp;&emsp;
                        {item.subMenu !== undefined ? '>' : ''}
                    </li>
                )}
            </ul>
        </div>
    )
}