import { useState } from "react";
import { Link } from "react-router-dom";
import imagemEstacao from '../assets/estacao.png';


export default function Registro() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmasenha, setConfirmaSenha] = useState('');

    return (
        <section className="container-fluid login-page-custom">
            <div className="card">
                <img src={imagemEstacao} alt="Estação Meteorológica" />
                <div className="formulario">
                    <h2>Cadastro de Usuário</h2>
                    <form action="">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" id="usuario" className="input" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" className="input" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                        <label htmlFor="confSenha">Confirme Senha</label>
                        <input type="password" id="confSenha" className="input" value={confirmasenha} onChange={(e) => setConfirmaSenha(e.target.value)}/>
                        <Link to='/dashboard' className="botao">Cadastrar</Link>
                    </form>
                </div>
            </div>
        </section>
    )
}


