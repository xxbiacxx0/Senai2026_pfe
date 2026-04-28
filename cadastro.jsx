import { useState } from "react";
import Header from "../components/header";  


// Mudamos o nome para PaginaCadastro para evitar conflito com o nome do arquivo
export default function PaginaCadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [celular, setCelular] = useState('');
    const [documento, setDocumento] = useState('');

    const realizarCadastro = (e) => {
        e.preventDefault(); // Impede o recarregamento da página
        console.log("Dados enviados:", { nome, email, senha, celular, documento });
    };

    return (
        <>
         <Header />
        <div className="cadastro-container">
           
            <h3>Cadastro de dados pessoais</h3>

            {/* APENAS UM FORMULÁRIO PARA TUDO */}
            <form onSubmit={realizarCadastro}>
                <div className="campo">
                    <label htmlFor="nome">Nome Completo</label>
                    <input type="text" id="nome" placeholder="Beatriz" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>

                <div className="campo">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" placeholder="123" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>

                <div className="campo">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="beatriz@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="campo">
                    <label htmlFor="celular">Celular</label>
                    <input type="text" id="celular" placeholder="(11) 99999-9999" value={celular} onChange={(e) => setCelular(e.target.value)} />
                </div>

                <div className="campo">
                    <label htmlFor="documento">Documento</label>
                    <input type="text" id="documento" placeholder="000.000.000-00" value={documento} onChange={(e) => setDocumento(e.target.value)} />
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
        </>
        
    );
}