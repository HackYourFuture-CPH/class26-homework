import React from 'react'

function Header(){
    return(
    <>
    <header className='header'>
    <img src={process.env.PUBLIC_URL + '/logo192.png'} alt = "This is a logo" /> 
    <h1 className='headerTitle'>Hack Your Future</h1>
    </header>
    </>
    )
}

export default Header



