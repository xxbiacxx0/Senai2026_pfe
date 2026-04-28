import Header from "../components/header";

export default function Relatorio() {
    const leituras = [
        { horario: "12:00", qualidadeAr: " Boa", iqa: 44,  temperatura: "32ºC", umidade: "40%" },
        { horario: "07:00", qualidadeAr: " Boa", iqa: 60,  temperatura: "20ºC", umidade: "45%" },
        { horario: "09:00", qualidadeAr: " Boa", iqa: 40,  temperatura: "25ºC", umidade: "60%" },
        { horario: "13:00", qualidadeAr: " Boa", iqa: 22,  temperatura: "32ºC", umidade: "40%" }

    ]

    return(
        <div className="container">
            <Header />
            <h2>Relatório da Estação Meteorológica</h2>
            <p>Dados sobre o clima em tempo real</p>

            <section className="graficos">
                {/* {inserir gráficos aqui} */}
            </section>
           
           <section className="leituras">
            <table>
                <thead>
                    <tr>
                        <th>Horário</th>
                        <th>Qualidade do Ar</th>
                        <th>IQA</th>
                        <th>Temperatura</th>
                        <th>Umidade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    leituras.map((item, index) => (
                        <tr key={index}>
                            <td>{item.horario}</td>
                            <td>{item.qualidadeAr}</td>
                            <td>{item.iqa}</td>
                            <td>{item.temperatura}</td>
                            <td>{item.umidade}</td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
           </section>
        </div>

    )
}