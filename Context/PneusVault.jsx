import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react';
import { initialStatePneus, reducerPneus } from '../Reducers/reducerPneus'
import { GlobalContext } from './GlobalVault';
import { VeiculoContext } from './VeiculooVault';

export const PneusContext = createContext();

export function PneusVault({ children }) {
    const [state, dispatch] = useReducer(reducerPneus, initialStatePneus);
    const { tipoCheckList, dadosRecebimento, numeroEixosVeiculo } = useContext(GlobalContext);
    const contextVeiculo = useContext(VeiculoContext);


    const setPrimeiroDE = useCallback((value) => dispatch({ type: 'SET_PRIMEIRO_DE', payload: value }), [dispatch]);
    const setPrimeiroDI = useCallback((value) => dispatch({ type: 'SET_PRIMEIRO_DI', payload: value }), [dispatch]);
    const setPrimeiroEE = useCallback((value) => dispatch({ type: 'SET_PRIMEIRO_EE', payload: value }), [dispatch]);
    const setPrimeiroEI = useCallback((value) => dispatch({ type: 'SET_PRIMEIRO_EI', payload: value }), [dispatch]);
    const setSegundoDE = useCallback((value) => dispatch({ type: 'SET_SEGUNDO_DE', payload: value }), [dispatch]);
    const setSegundoDI = useCallback((value) => dispatch({ type: 'SET_SEGUNDO_DI', payload: value }), [dispatch]);
    const setSegundoEE = useCallback((value) => dispatch({ type: 'SET_SEGUNDO_EE', payload: value }), [dispatch]);
    const setSegundoEI = useCallback((value) => dispatch({ type: 'SET_SEGUNDO_EI', payload: value }), [dispatch]);
    const setTerceiroDE = useCallback((value) => dispatch({ type: 'SET_TERCEIRO_DE', payload: value }), [dispatch]);
    const setTerceiroDI = useCallback((value) => dispatch({ type: 'SET_TERCEIRO_DI', payload: value }), [dispatch]);
    const setTerceiroEE = useCallback((value) => dispatch({ type: 'SET_TERCEIRO_EE', payload: value }), [dispatch]);
    const setTerceiroEI = useCallback((value) => dispatch({ type: 'SET_TERCEIRO_EI', payload: value }), [dispatch]);
    const setEstopeUm = useCallback((value) => dispatch({ type: 'SET_ESTOPE_UM', payload: value }), [dispatch]);
    const setEstopeDois = useCallback((value) => dispatch({ type: 'SET_ESTOPE_DOIS', payload: value }), [dispatch]);

    const setPrimeiroLeveD = useCallback((value) => dispatch({ type: 'SET_PRIMEIRO_LEVE_D', payload: value }), [dispatch]);
    const setPrimeiroLeveE = useCallback((value) => dispatch({ type: 'SET_PRIMEIRO_LEVE_E', payload: value }), [dispatch]);
    const setSegundoLeveD = useCallback((value) => dispatch({ type: 'SET_SEGUNDO_LEVE_D', payload: value }), [dispatch]);
    const setSegundoLeveE = useCallback((value) => dispatch({ type: 'SET_SEGUNDO_LEVE_E', payload: value }), [dispatch]);
    const setLeveEstepe = useCallback((value) => dispatch({ type: 'SET_LEVE_ESTEPE', payload: value }), [dispatch]);




    const dadosCheckPneus = useMemo(() => {

        /****************************************
         * JOÃO - 2024-07-09                    *
         * MODELO DE COMO SERÁ FEITO O PNEU     *
         ****************************************/


        let camposPneus = [
            { label: "1DE", state: state.primeiroDE, setState: setPrimeiroDE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
            { label: "1DI", state: state.primeiroDI, setState: setPrimeiroDI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
            { label: "1EE", state: state.primeiroEE, setState: setPrimeiroEE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
            { label: "1EI", state: state.primeiroEI, setState: setPrimeiroEI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
            { label: "2DE", state: state.segundoDE, setState: setSegundoDE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
            { label: "2DI", state: state.segundoDI, setState: setSegundoDI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
            { label: "2EE", state: state.segundoEE, setState: setSegundoEE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
            { label: "2EI", state: state.segundoEI, setState: setSegundoEI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
            { label: "3DE", state: state.terceiroDE, setState: setTerceiroDE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
            { label: "3DI", state: state.terceiroDI, setState: setTerceiroDI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
            { label: "3EE", state: state.terceiroEE, setState: setTerceiroEE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
            { label: "3EI", state: state.terceiroEI, setState: setTerceiroEI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
            { label: "E1", state: state.estepeUm, setState: setEstopeUm, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
            { label: "E2", state: state.estepeDois, setState: setEstopeDois, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
        ];


        switch (true) {
            case tipoCheckList != 'checklist_veiculo_leve' && tipoCheckList != 'checklist_carretabau' && numeroEixosVeiculo == 2:
                camposPneus = [
                    { label: "1DE", state: state.primeiroDE, setState: setPrimeiroDE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "1EE", state: state.primeiroEE, setState: setPrimeiroEE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2DE", state: state.segundoDE, setState: setSegundoDE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2DI", state: state.segundoDI, setState: setSegundoDI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2EE", state: state.segundoEE, setState: setSegundoEE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2EI", state: state.segundoEI, setState: setSegundoEI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "E1", state: state.estepeUm, setState: setEstopeUm, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "E2", state: state.estepeDois, setState: setEstopeDois, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                ];
                break;
            case tipoCheckList != 'checklist_veiculo_leve' && tipoCheckList != 'checklist_carretabau' && numeroEixosVeiculo == 3:
                camposPneus = [
                    { label: "1DE", state: state.primeiroDE, setState: setPrimeiroDE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "1EE", state: state.primeiroEE, setState: setPrimeiroEE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2DE", state: state.segundoDE, setState: setSegundoDE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2DI", state: state.segundoDI, setState: setSegundoDI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2EE", state: state.segundoEE, setState: setSegundoEE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2EI", state: state.segundoEI, setState: setSegundoEI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "3DE", state: state.terceiroDE, setState: setTerceiroDE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "3DI", state: state.terceiroDI, setState: setTerceiroDI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "3EE", state: state.terceiroEE, setState: setTerceiroEE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "3EI", state: state.terceiroEI, setState: setTerceiroEI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "E1", state: state.estepeUm, setState: setEstopeUm, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "E2", state: state.estepeDois, setState: setEstopeDois, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                ];
                break;
            case tipoCheckList == 'checklist_carretabau' && numeroEixosVeiculo == 2:
                camposPneus = [
                    { label: "1DE", state: state.primeiroDE, setState: setPrimeiroDE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "1DI", state: state.primeiroDI, setState: setPrimeiroDI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "1EE", state: state.primeiroEE, setState: setPrimeiroEE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "1EI", state: state.primeiroEI, setState: setPrimeiroEI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2DE", state: state.segundoDE, setState: setSegundoDE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2DI", state: state.segundoDI, setState: setSegundoDI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2EE", state: state.segundoEE, setState: setSegundoEE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2EI", state: state.segundoEI, setState: setSegundoEI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "E1", state: state.estepeUm, setState: setEstopeUm, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "E2", state: state.estepeDois, setState: setEstopeDois, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                ];
                break;
            case tipoCheckList == 'checklist_carretabau' && numeroEixosVeiculo == 3:
                camposPneus = [
                    { label: "1DE", state: state.primeiroDE, setState: setPrimeiroDE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "1DI", state: state.primeiroDI, setState: setPrimeiroDI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "1EE", state: state.primeiroEE, setState: setPrimeiroEE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "1EI", state: state.primeiroEI, setState: setPrimeiroEI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2DE", state: state.segundoDE, setState: setSegundoDE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2DI", state: state.segundoDI, setState: setSegundoDI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2EE", state: state.segundoEE, setState: setSegundoEE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "2EI", state: state.segundoEI, setState: setSegundoEI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "3DE", state: state.terceiroDE, setState: setTerceiroDE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "3DI", state: state.terceiroDI, setState: setTerceiroDI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "3EE", state: state.terceiroEE, setState: setTerceiroEE, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "3EI", state: state.terceiroEI, setState: setTerceiroEI, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "E1", state: state.estepeUm, setState: setEstopeUm, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                    { label: "E2", state: state.estepeDois, setState: setEstopeDois, type: 'img/input', inputProps: { keyboardType: 'numeric' } },
                ];
                break;
            case tipoCheckList == 'checklist_veiculo_leve':
                camposPneus = [
                    { label: "1º Eixo Direito", state: state.primeiroLeveD, setState: setPrimeiroLeveD, type: 'img/checkbox', inputProps: {} },
                    { label: "1º Eixo Esquerdo", state: state.primeiroLeveE, setState: setPrimeiroLeveE, type: 'img/checkbox', inputProps: {} },
                    { label: "2º Eixo Direito", state: state.segundoLeveD, setState: setSegundoLeveD, type: 'img/checkbox', inputProps: {} },
                    { label: "2º Eixo Esquerdo", state: state.segundoLeveE, setState: setSegundoLeveE, type: 'img/checkbox', inputProps: {} },
                    { label: "Estepe", state: state.leveEstepeUm, setState: setLeveEstepe, type: 'img/checkbox', inputProps: {} },
                ]
                break;
            default:
                break;
        }


        return camposPneus;
    }, [state, tipoCheckList, contextVeiculo.state]);





    useEffect(() => {

        const hasValue = (value) => {
            return value ? value : null;
        };

        const concatUri = (value) => {
            if (value) {
                return `https://carvalima.unitopconsultoria.com.br/${value}`;
            }

            return null;
        }

        if (dadosRecebimento) {

            setPrimeiroDE({ conforme: hasValue(dadosRecebimento[0]['7_a']), img: { uri: concatUri(dadosRecebimento[0]['7_b']) } });
            setPrimeiroDI({ conforme: hasValue(dadosRecebimento[0]['7_c']), img: { uri: concatUri(dadosRecebimento[0]['7_d']) } });
            setPrimeiroEE({ conforme: hasValue(dadosRecebimento[0]['7_e']), img: { uri: concatUri(dadosRecebimento[0]['7_f']) } });
            setPrimeiroEI({ conforme: hasValue(dadosRecebimento[0]['7_g']), img: { uri: concatUri(dadosRecebimento[0]['7_h']) } });
            setSegundoDE({ conforme: hasValue(dadosRecebimento[0]['7_i']), img: { uri: concatUri(dadosRecebimento[0]['7_j']) } });
            setSegundoDI({ conforme: hasValue(dadosRecebimento[0]['7_k']), img: { uri: concatUri(dadosRecebimento[0]['7_l']) } });
            setSegundoEE({ conforme: hasValue(dadosRecebimento[0]['7_m']), img: { uri: concatUri(dadosRecebimento[0]['7_n']) } });
            setSegundoEI({ conforme: hasValue(dadosRecebimento[0]['7_o']), img: { uri: concatUri(dadosRecebimento[0]['7_p']) } });
            setEstopeUm({ conforme: hasValue(dadosRecebimento[0]['7_q']), img: { uri: concatUri(dadosRecebimento[0]['7_r']) } });
            setEstopeDois({ conforme: hasValue(dadosRecebimento[0]['7_s']), img: { uri: concatUri(dadosRecebimento[0]['7_t']) } });
            setTerceiroDI({ conforme: hasValue(dadosRecebimento[0]['7_u']), img: { uri: concatUri(dadosRecebimento[0]['7_v']) } });
            setTerceiroDE({ conforme: hasValue(dadosRecebimento[0]['7_w']), img: { uri: concatUri(dadosRecebimento[0]['7_x']) } });
            setTerceiroEI({ conforme: hasValue(dadosRecebimento[0]['7_y']), img: { uri: concatUri(dadosRecebimento[0]['7_z']) } });
            setTerceiroEE({ conforme: hasValue(dadosRecebimento[0]['7_aa']), img: { uri: concatUri(dadosRecebimento[0]['7_ab']) } });
            setPrimeiroLeveD({ conforme: hasValue(dadosRecebimento[0]['7_ac']), img: { uri: concatUri(dadosRecebimento[0]['7_ad']) } });
            setPrimeiroLeveE({ conforme: hasValue(dadosRecebimento[0]['7_ae']), img: { uri: concatUri(dadosRecebimento[0]['7_af']) } });
            setSegundoLeveD({ conforme: hasValue(dadosRecebimento[0]['7_ag']), img: { uri: concatUri(dadosRecebimento[0]['7_ah']) } });
            setSegundoLeveE({ conforme: hasValue(dadosRecebimento[0]['7_ai']), img: { uri: concatUri(dadosRecebimento[0]['7_aj']) } });
            setLeveEstepe({ conforme: hasValue(dadosRecebimento[0]['7_ak']), img: { uri: concatUri(dadosRecebimento[0]['7_al']) } });
        }
    }, [dadosRecebimento])

    return (
        <PneusContext.Provider value={{ dadosCheckPneus, state, dispatch }}>{children}</PneusContext.Provider>
    )
}

