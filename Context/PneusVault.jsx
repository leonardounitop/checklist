import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react';
import { initialStatePneus, reducerPneus } from '../Reducers/reducerPneus'
import { GlobalContext } from './GlobalVault';

export const PneusContext = createContext();

export function PneusVault({ children }) {
    const [state, dispatch] = useReducer(reducerPneus, initialStatePneus);
    const { tipoCheckList, dadosRecebimento } = useContext(GlobalContext);


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

        if (tipoCheckList === 'checklist_thermoking') {
            camposPneus = []

        } else if (tipoCheckList === 'checklist_veiculo_leve') {
            camposPneus = [
                { label: "1º Eixo Direito", state: state.primeiroLeveD, setState: setPrimeiroLeveD, type: 'img/checkbox', inputProps: {} },
                { label: "1º Eixo Esquerdo", state: state.primeiroLeveE, setState: setPrimeiroLeveE, type: 'img/checkbox', inputProps: {} },
                { label: "2º Eixo Direito", state: state.segundoLeveD, setState: setSegundoLeveD, type: 'img/checkbox', inputProps: {} },
                { label: "2º Eixo Esquerdo", state: state.segundoLeveE, setState: setSegundoLeveE, type: 'img/checkbox', inputProps: {} },
                { label: "Estepe", state: state.leveEstepeUm, setState: setLeveEstepe, type: 'img/checkbox', inputProps: {} },
            ]
        } else if (tipoCheckList === 'checklist_toco_truck_3_4') {
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
        } else if (tipoCheckList === 'checklist_graneleiro') {
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
        }

        return camposPneus;
    }, [state, tipoCheckList]);





    useEffect(() => {

        const hasValue = (value) => {
            // if (value === true) {
            //     return true;
            // } else if (value === false) {
            //     return false;
            // }

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



    // '7_a': contextPneu.state.primeiroDE.conforme,
    // '7_b': isBase64(contextPneu.state.primeiroDE.img),
    // '7_c': contextPneu.state.primeiroDI.conforme,
    // '7_d': isBase64(contextPneu.state.primeiroDI.img),
    // '7_e': contextPneu.state.primeiroEE.conforme,
    // '7_f': isBase64(contextPneu.state.primeiroEE.img),
    // '7_g': contextPneu.state.primeiroEI.conforme,
    // '7_h': isBase64(contextPneu.state.primeiroEI.img),
    // '7_i': contextPneu.state.segundoDE.conforme,
    // '7_j': isBase64(contextPneu.state.segundoDE.img),
    // '7_k': contextPneu.state.segundoDI.conforme,
    // '7_l': isBase64(contextPneu.state.segundoDI.img),
    // '7_m': contextPneu.state.segundoEE.conforme,
    // '7_n': isBase64(contextPneu.state.segundoEE.img),
    // '7_o': contextPneu.state.segundoEI.conforme,
    // '7_p': isBase64(contextPneu.state.segundoEI.img),
    // '7_q': contextPneu.state.estepeUm.conforme,
    // '7_r': isBase64(contextPneu.state.estepeUm.img),
    // '7_s': contextPneu.state.estepeDois.conforme,
    // '7_t': isBase64(contextPneu.state.estepeDois.img),
    // '7_u': contextPneu.state.terceiroDI.conforme,
    // '7_v': isBase64(contextPneu.state.terceiroDI.img),
    // '7_w': contextPneu.state.terceiroDE.conforme,
    // '7_x': isBase64(contextPneu.state.terceiroDE.img),
    // '7_y': contextPneu.state.terceiroEI.conforme,
    // '7_z': isBase64(contextPneu.state.terceiroEI.img),
    // '7_aa': contextPneu.state.terceiroEE.conforme,
    // '7_ab': isBase64(contextPneu.state.terceiroEE.img),

    // '7_ac': contextPneu.state.primeiroLeveD.conforme,
    // '7_ad': isBase64(contextPneu.state.primeiroLeveD.img),
    // '7_ae': contextPneu.state.primeiroLeveE.conforme,
    // '7_af': isBase64(contextPneu.state.primeiroLeveE.img),
    // '7_ag': contextPneu.state.segundoLeveD.conforme,
    // '7_ah': isBase64(contextPneu.state.segundoLeveD.img),
    // '7_ai': contextPneu.state.segundoLeveE.conforme,
    // '7_aj': isBase64(contextPneu.state.segundoLeveE.img),
    // '7_ak': contextPneu.state.leveEstepeUm.conforme,
    // '7_al': isBase64(contextPneu.state.leveEstepeUm.img),

    return (
        <PneusContext.Provider value={{ dadosCheckPneus, state, dispatch }}>{children}</PneusContext.Provider>
    )
}

