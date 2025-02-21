import "./register.css"
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Register() {
    return <div className="container vh-100 d-flex justify-content-center align-items-center">

        <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
            <form className="form-register">
                <img src={logo} className="logo mb-4"/>
                <h5 className="mb-5">Crie sua conta.</h5>
                <h5 className="mb-4 text-secondary">Preencha os campos abaixo.</h5>

                <div className="mt-4">
                    <input type="text" placeholder="Nome" className="form-control"/>
                </div>

                <div className="mt-2">
                    <input type="email" placeholder="E-mail" className="form-control"/>
                </div>

                <div className="mt-2">
                    <input type="password" placeholder="Senha" className="form-control"/>
                </div>

                <div className="mt-2">
                    <input type="password" placeholder="Confirmar Senha" className="form-control"/>
                </div>

                <div className="mt-3 mb-5">
                    <button className="btn btn-success w-100">Criar minha conta.</button>
                </div>

                <div>
                    <span className="me-1">Já tenho uma conta.</span>
                    <Link to="/login">Acessar agora</Link>
                </div>

            </form>
        </div>
    </div>
}


export default Register