import React, { createContext, useState } from 'react';
import { faixasIniciais } from '../dados/inicio'; // Ajustado para buscar da pasta dados

export const MusicContext = createContext();

export function MusicProvider({ children }) {
  const [faixas, setFaixas] = useState(faixasIniciais);

  const toggleFavorito = (id) => {
    setFaixas(prevFaixas =>
      prevFaixas.map(faixa =>
        faixa.id === id ? { ...faixa, favoritado: !faixa.favoritado } : faixa
      )
    );
  };

  return (
    <MusicContext.Provider value={{ faixas, toggleFavorito }}>
      {children}
    </MusicContext.Provider>
  );
}