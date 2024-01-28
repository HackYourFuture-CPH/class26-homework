import React from 'react'
import "./Header.css"
import  Timer from '../Timer'
function Header(){
    return(
    <>
    <header className='header'>
    <h1 className='headerTitle'>TODO LIST</h1>
    <Timer />
    </header>
    </>
    )
}

export default Header