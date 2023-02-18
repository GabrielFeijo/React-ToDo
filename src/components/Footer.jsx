import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Footer.css'

const Footer = ({ theme, itens, handleClick }) => {
    const navigate = useNavigate();

    const themeStyle = {
        dark: {
            box: {
                backgroundColor: 'hsl(235, 24%, 19%)'
            },
        },
        light: {
            box: {
                backgroundColor: 'white'
            },

        }

    };

    return (
        <div className='f-container' style={themeStyle[theme].box}>
            <p className='item'>{itens} itens</p>
            <button className={`r-${theme} btn-return`} onClick={() => navigate('/')}>Página Inicial</button>
            <p className={`c${theme}`} onClick={handleClick}>Incompletos</p>
        </div>
    )
}

export default Footer