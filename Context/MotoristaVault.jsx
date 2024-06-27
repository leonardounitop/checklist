import React, { createContext, useCallback, useEffect, useMemo, useReducer } from 'react';
import { initialStateMotorista, reducerMotorista } from '../Reducers/reducerMotorista'

export const MotoristaContext = createContext();

export function MotoristaVault({ children }) {
    const [state, dispatch] = useReducer(reducerMotorista, initialStateMotorista);

    const setNome = useCallback((value) => dispatch({ type: 'SET_NOME', payload: value }), [dispatch]);
    const setValidacao = useCallback((value) => dispatch({ type: 'SET_VALIDACAO', payload: value }), [dispatch]);
    const setTermo = useCallback((value) => dispatch({ type: 'SET_TERMO', payload: value }), [dispatch]);
    const setResponsavel = useCallback((value) => dispatch({ type: 'SET_RESPONSAVEL', payload: value }), [dispatch]);
    const setObservacao = useCallback((value) => dispatch({ type: 'SET_OBSERVACAO', payload: value }), [dispatch]);



    const dadosCheckMotorista = useMemo(() => {
        let camposMotorista = [
            { label: 'Nome', type: 'input', inputProps: { editable: false }, state: state.nome, setState: setNome },
            { label: 'Validação do Motorista', type: 'img/checkbox', inputProps: { editable: false }, state: state.validacao, setState: setValidacao },
            { label: 'Validação do Termo', type: 'checkbox', inputProps: {}, state: state.termo, setState: setTermo },
            { label: 'Responsável', inputProps: {}, state: state.responsavel, setState: setResponsavel, inputProps: { editable: false } },
            { label: 'Observação', inputProps: {}, state: state.observacao, setState: setObservacao },
        ];



        return camposMotorista;
    }, [state]);


    return (
        <MotoristaContext.Provider value={{ dadosCheckMotorista, state, dispatch, setResponsavel }}>{children}</MotoristaContext.Provider>
    )
}

