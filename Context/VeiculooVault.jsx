import React, { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import { initialVeiculoState, reducerVeiculo } from '../Reducers/reducerVeiculo';
import { GlobalContext } from './GlobalVault';

export const VeiculoContext = createContext();

export function VeiculoVault({ children }) {
    const [state, dispatch] = useReducer(reducerVeiculo, initialVeiculoState);
    const { tipoCheckList } = useContext(GlobalContext)

    // Memoizar Handlers
    const setEntregaDevolucao = useCallback((value) => dispatch({ type: 'SET_ENTREGA_DEVOLUCAO', payload: value }), [dispatch]);
    const setPlaca = useCallback((value) => dispatch({ type: 'SET_PLACA', payload: value }), [dispatch]);
    const setTipo = useCallback((value) => dispatch({ type: 'SET_TIPO', payload: value }), [dispatch]);
    const setData = useCallback((value) => dispatch({ type: 'SET_DATA', payload: value }), [dispatch]);
    const setKmTotal = useCallback((value) => dispatch({ type: 'SET_KM_TOTAL', payload: value }), [dispatch]);
    const setHorimetro = useCallback((value) => dispatch({ type: 'SET_HORIMETRO', payload: value }), [dispatch]);

    const setHorimetroImagem = useCallback((value) => dispatch({ type: 'SET_HORIMETRO_IMAGEM', payload: value }), [dispatch]);
    const setNumThermokingImagem = useCallback((value) => dispatch({ type: 'SET_NUM_THERMOKING_IMG', payload: value }), [dispatch]);



    // Dados do veiculo
    const dadosCheckVeiculo = useMemo(() => {
        let camposComuns = [
            { label: 'Entrega/Devolução', state: state.entregaDevolucao, inputProps: { editable: false }, setState: setEntregaDevolucao },
            { label: 'Placa', state: state.placa, inputProps: { editable: false }, setState: setPlaca },
            { label: 'Tipo', state: state.tipo, setState: setTipo, inputProps: { editable: false } },
            { label: 'Data', state: state.data, setState: setData, inputProps: { editable: false } },
            // { label: 'Filial', state: state.filial, inputProps: {}, setState: setFilial },
            { label: 'KM', state: state.kmTotal, inputProps: { keyboardType: 'numeric' }, setState: setKmTotal },
            { label: 'Horimetro', state: state.horimetro, inputProps: { keyboardType: 'numeric' }, setState: setHorimetro },
        ];

        if (tipoCheckList === 'checklist_thermoking') {
            camposComuns = camposComuns.concat([
                { label: 'Imagem Horimetro', state: state.horimetroImagem, inputProps: {}, setState: setHorimetroImagem, type: 'img/checkbox' },
                { label: 'Imagem Numero Thermoking', state: state.numThermokingImagem, inputProps: {}, setState: setNumThermokingImagem, type: 'img/checkbox' },
            ]);
        }

        return camposComuns;
    }, [state, tipoCheckList]);

    return (
        <VeiculoContext.Provider value={{ dadosCheckVeiculo, state, dispatch }}>
            {children}
        </VeiculoContext.Provider>
    );
}
