import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login/login'
import Register from './pages/register/register'
import "./styles/global.css"
import Rotas from './rotas'

//Comando para renderizar dentro da div root o componente App
ReactDOM.createRoot(document.getElementById('root')).render(
    <Rotas/>
)
