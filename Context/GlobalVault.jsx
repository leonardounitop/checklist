import React, { createContext, useCallback, useState, useReducer } from 'react';
import { initialStateCarroceria, reducerCarroceria } from '../Reducers/reducerCarroceria';
import { initialStateConservacao, reducerConservacao } from '../Reducers/reducerConservacao';
import { initialStatePneus, reducerPneus } from '../Reducers/reducerPneus';
import { initialStateFerramentas, reducerFerramentas } from '../Reducers/reducerFerramentas';
import { initialStateMotorista, reducerMotorista } from '../Reducers/reducerMotorista';

export const GlobalContext = createContext();

export function GlobalVault({ children }) {
    const [idUsuario, setIdUsuario] = useState(null);
    const [nomeUsuario, setNomeUsuario] = useState(null);
    const [tipoCheckList, setTipoCheckList] = useState(null);
    const [primaryKey, setPrimaryKey] = useState(null);
    const [dadosRecebimento, setDadosRecebimento] = useState(null);

    const [carroceriaState, carroceriaDispatch] = useReducer(reducerCarroceria, initialStateCarroceria);
    const [conservacaoState, conservacaoDispatch] = useReducer(reducerConservacao, initialStateConservacao);
    const [pneusState, pneusDispatch] = useReducer(reducerPneus, initialStatePneus);
    const [ferramentasState, ferramentasDispatch] = useReducer(reducerFerramentas, initialStateFerramentas);

    const resetAllStates = useCallback(() => {
        console.log('Chamando resetAllStates');
        carroceriaDispatch({ type: 'RESET' });
        conservacaoDispatch({ type: 'RESET' });
        pneusDispatch({ type: 'RESET' });
        ferramentasDispatch({ type: 'RESET' });
        console.log('Estados resetados');
    }, [carroceriaDispatch, conservacaoDispatch, pneusDispatch, ferramentasDispatch]);

    return (
        <GlobalContext.Provider value={{
            idUsuario, setIdUsuario,
            nomeUsuario, setNomeUsuario,
            tipoCheckList, setTipoCheckList,
            primaryKey, setPrimaryKey,
            dadosRecebimento, setDadosRecebimento,
            resetAllStates
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
