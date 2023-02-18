import React, { useEffect, useState } from 'react'
import './Home.css'

import task from '../assets/task.svg'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import taskFetch from '../config/axios'


const Home = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        taskFetch.get('/')
            .then((data) => {
                setLoading(false)
            })
    }, [])

    return (
        <>
            {!loading ?
                <div className='home-box '>
                    <div className='infos'>
                        <h1>Bem-Vindo(a) ao MyTasks</h1>
                        <p>Escolha uma das opções abaixo para prosseguir com seu acesso</p>
                        <div className='buttons'>
                            <button onClick={() => navigate('/login')}>Acessar com código</button>
                            <button onClick={() => navigate('/code')}>Gerar novo código</button>
                        </div>
                    </div>
                    <div className='image'>
                        <img src={task} alt="" className='image-task' />

                        <p className='description'>Um gerenciador de tarefas simples e prático. Com esta aplicação você pode cadastrar suas tarefas e quando finalizar poderá marca-lá como concluída.</p>

                    </div>
                </div>

                :
                <Loading />
            }



        </>



    )

}

export default Home