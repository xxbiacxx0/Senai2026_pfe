import { Link } from "react-router-dom";
import "./header.css"; // Certifique-se de criar este arquivo para estilizar o header


export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/dashboard">Home</Link></li>
                    <li><Link to="/cadastro">Cadastros</Link></li>
                    <li><Link to="/relatorio">Relatórios</Link></li>
                    <li><Link to="/">Sair</Link></li>
                </ul>
            </nav>
        </header>
    );
}