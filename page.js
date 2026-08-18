'use client';

import { useState } from 'react';

export default function Page() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = (operacao) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    // Validação da Raiz Quadrada
    if (operacao === 'raiz') {
      if (isNaN(n1)) return setResultado('Digite o 1º número');
      if (n1 < 0) return setResultado('Erro: número negativo');
      return setResultado(Math.sqrt(n1));
    }

    // Validação de campos vazios
    if (isNaN(n1) || isNaN(n2)) {
      return setResultado('Preencha os dois números');
    }

    // Operações básicas
    if (operacao === 'somar') setResultado(n1 + n2);
    if (operacao === 'subtrair') setResultado(n1 - n2);
    if (operacao === 'multiplicar') setResultado(n1 * n2);
    if (operacao === 'potencia') setResultado(Math.pow(n1, n2));
    if (operacao === 'dividir') {
      if (n2 === 0) setResultado('Erro: Divisão por 0');
      else setResultado(n1 / n2);
    }
  };

  return (
    <main className="caixa-calculadora">
      <h1 className="titulo">Calculadora</h1>

      <input
        type="number"
        placeholder="Primeiro número"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="campo-texto"
      />

      <input
        type="number"
        placeholder="Segundo número"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="campo-texto"
      />

      <div className="grade-botoes">
        <button onClick={() => calcular('somar')} className="botao">+</button>
        <button onClick={() => calcular('subtrair')} className="botao">-</button>
        <button onClick={() => calcular('multiplicar')} className="botao">×</button>
        <button onClick={() => calcular('dividir')} className="botao">÷</button>
        <button onClick={() => calcular('potencia')} className="botao">xʸ</button>
        <button onClick={() => calcular('raiz')} className="botao">√x</button>
      </div>

      <div className="caixa-resultado">
        Resultado: {resultado !== '' ? resultado : '—'}
      </div>
    </main>
  );
}


/*  export default function Calculadora() {
       const [num1, setNum1] = useState('');
        const [num2, setNum2] = useState('');
        const [result, setResult] = useState(null);

        function Somar() {
         setResult(Number(num1) + Number(num2));
        }

        return (
            <main className="container">
                <h1 className="calc-title">Calculadora</h1>
                <div className="quadro">
                    <input
                        type="number"
                        placeholder="Primeiro número"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Segundo número"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                    />
                </div>
                <button onClick={Somar}>Somar</button>
                <div className="resultado">
                    <span>Resultado</span>
                    <div>{result !== null ? result : '—'}</div>
                </div>
            </main>
        );
    } */