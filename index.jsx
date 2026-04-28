import { Routes, Route } from "react-router-dom";

import Login from '../pages/login.jsx';
import Registro from '../pages/registro.jsx';
import Relatorio from '../pages/relatorio.jsx';


// Verifique se este arquivo existe na pasta pages com este nome exato:
import Dashboard from '../pages/dashboard.jsx'; 
import PaginaCadastro from "../pages/cadastro.jsx";

export default function Rotas() {
    return (
        <Routes>
            {/* Rota inicial: Login */}
            <Route path="/" element={<Login />} />
            
            {/* Rota de Registro */}
            <Route path="/registro" element={<Registro />}/>
            
            {/* Rota do Dashboard (REATIVADA) */}
            <Route path="/dashboard" element={<Dashboard />}/>
            
            {/* Rota de Cadastro */}
            <Route path="/cadastro" element={<PaginaCadastro />}/>
            
            {/* Rota do Relatório */}
            <Route path="/relatorio" element={<Relatorio />}/>

            {/* Dica: Adicione uma rota de segurança para caminhos inexistentes */}
            <Route path="*" element={<div>Página não encontrada</div>} />
        </Routes>
    );
}

