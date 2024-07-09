import React, { createContext, useState } from 'react';


export const GlobalContext = createContext();

export function GlobalVault({ children }) {

    const [idUsuario, setIdUsuario] = useState(null);
    const [nomeUsuario, setNomeUsuario] = useState(null);
    const [tipoCheckList, setTipoCheckList] = useState(null);
    const [primaryKey, setPrimaryKey] = useState(null);
    const [dadosRecebimento, setDadosRecebimento] = useState(null);
    const [tipoDoVeiculo, setTipoDoVeiculo] = useState(null);
    const [numeroEixosVeiculo, setNumeroEixosVeiculo] = useState(null);

    return (
        <GlobalContext.Provider value={{
            idUsuario, setIdUsuario,
            nomeUsuario, setNomeUsuario,
            tipoCheckList, setTipoCheckList,
            primaryKey, setPrimaryKey,
            dadosRecebimento, setDadosRecebimento,
            tipoDoVeiculo, setTipoDoVeiculo,
            numeroEixosVeiculo, setNumeroEixosVeiculo
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
