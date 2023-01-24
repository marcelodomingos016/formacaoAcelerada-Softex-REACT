import React from 'react'
import Logo from './imgs/logo-softex.png'

export default function Header(){
    return(
      <header> 
       <img src={Logo}/>
       <h1>Primeiro componente em React</h1>
    </header>
    )
    
    }