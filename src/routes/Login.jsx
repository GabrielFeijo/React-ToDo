import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import taskFetch from '../config/axios'
import './Home.css'
import './Login.css'


const Login = () => {
    const navigate = useNavigate()
    const [code, setCode] = useState('');


    const loginTask = () => {
        if (code != '') {
            taskFetch.get(`/code`, { params: { code: code } })
                .then((data) => {
                    const uriCode = encodeURIComponent(code)
                    navigate(`/task/${uriCode}`)
                })
                .catch((erro) => {
                    if (erro.response.status == 404) {
                        alert('Código não encontrado!')
                    } else {
                        console.log(erro)

                    }
                })
        } else {
            alert('Código não pode estar vazio!')
        }

    }
    return (

        <div className='home-box '>

            <div className='infos'>
                <h2 className='title'>Digite seu código de acesso !</h2>
                <input type="text" placeholder='Insira o código' className='input' value={code} onChange={(event) => setCode(event.target.value)} />

                <div className='buttons'>
                    <button onClick={loginTask}>Acessar minhas tarefas</button>
                    <button onClick={() => navigate('/')}>Página inicial</button>
                </div>
            </div>

        </div>
    )
}

export default Login