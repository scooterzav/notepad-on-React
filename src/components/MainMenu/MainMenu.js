import React from 'react'
import { NavLink } from 'react-router-dom';
import './MainMenu.css'

export default function MainMenu(props) {
    return (
            <ul className='MainMenu'>
                <li><NavLink  to='/'>Главная</NavLink></li> |
                <li><NavLink  to='/about'>О программе</NavLink></li>
            </ul>
    )
}