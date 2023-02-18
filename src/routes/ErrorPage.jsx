import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ErrorPage.css'

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='error'>
            <h1>Página não encontrada!</h1>
            <h2>Erro 404 :(</h2>
            <button onClick={() => navigate('/')}>Página inicial</button>
        </div>
    )
}

export default ErrorPage