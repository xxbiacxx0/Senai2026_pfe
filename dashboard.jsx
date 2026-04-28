import Header from "../components/header";
import GraficoBarra from "../components/graficoBarras";
//import App from './App.css'

export default function Dashboard() {
    return (
        <>
            <Header />
            
            {/* Tag main para agrupar o conteúdo da página */}
            <main>
                {/* O título com a classe que estilizamos */}
                <h1 className="titulo-pagina">Estação Metereológica</h1>

                <section className="cards">
                    <div className="card">
                        <h2>Temperatura</h2>
                        <p>32°C</p>
                    </div>
                    <div className="card">
                        <h2>Temperatura</h2>
                        <p>68°C</p>
                    </div>
                    <div className="card">
                        <h2>Pressão</h2>
                        <p>1013 hPa</p>
                    </div>
                    <div className="card">
                        <h2>Vento</h2>
                        <p>12 km/h</p>
                    </div>
                </section>

                <section className="graficos">
                    <h6>Gráficos</h6>
                    <div className="graficos">
                    <GraficoBarra />
                    </div>  
                    <div className="graficos">
                    <GraficoBarra />
                    </div>  

                </section>

                <section className="leituras">
                    <h6>Leituras Recentes</h6>
                    <table>
                        <thead>
                            <tr>
                                <th>Horário</th>
                                <th>Temperatura</th>
                                <th>Pressão</th>
                                <th>Vento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12:00</td>
                                <td>47°C</td>
                                <td>50%</td>
                                <td>13 km/h</td>
                            </tr>
                            <tr>
                                <td>12:00</td>
                                <td>47°C</td>
                                <td>50%</td>
                                <td>13 km/h</td>
                            </tr>
                            <tr>
                                <td>12:00</td>
                                <td>47°C</td>
                                <td>50%</td>
                                <td>13 km/h</td>
                            </tr>
                        </tbody>
                    </table>
                    </section>
            </main>
        </>
    );
}