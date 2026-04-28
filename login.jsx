import { useState } from "react";
import { Link } from "react-router-dom";
import imagemEstacao from '../assets/estacao.png';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    return (
        /* Mudamos de 'container' para 'login-page-custom' para ativar o seu CSS específico */
        <section className="login-page-custom"> 
            <div className="card">
                <img src={imagemEstacao} alt="Estação Meteorológica" />
                <div className="formulario">
                    <h2>Login</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="usuario">Usuário</label>
                        <input 
                            type="text" 
                            id="usuario" 
                            className="input" 
                            value={usuario} 
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                        
                        <label htmlFor="senha">Senha</label>
                        <input 
                            type="password" 
                            id="senha" 
                            className="input" 
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        
                        <Link to='/dashboard' className="botao">Login</Link>
                    </form>
                    <Link to='/registro' className="link-registro">
                        Não tem uma conta? Cadastre-se aqui
                    </Link>
                </div>
            </div>
        </section>
    );
}