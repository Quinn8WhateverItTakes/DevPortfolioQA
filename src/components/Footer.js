import React from 'react'
import { Email, GitHub, LinkedIn } from '@material-ui/icons'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedIn/>
            <GitHub/>
            <Email/>
        </div>
        <p>&copy;2023 quintessatech.com</p>
    </div>
  )
}

export default Footer
