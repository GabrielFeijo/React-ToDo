import './Loading.css'

const Loading = () => {

    return (
        <div className='box-loader'>
            <div className="loader"></div>
            <h1>Carregando aguarde ...</h1>
            <p>Estamos tentado conectar a API MyTasks</p>
        </div>
    )
}

export default Loading