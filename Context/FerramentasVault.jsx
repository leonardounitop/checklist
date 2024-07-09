import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react';
import { initialStateFerramentas, reducerFerramentas } from '../Reducers/reducerFerramentas';
import { GlobalContext } from './GlobalVault';

export const FerramentasContext = createContext();

export function FerramentasVault({ children }) {
    const [state, dispatch] = useReducer(reducerFerramentas, initialStateFerramentas);
    const { tipoCheckList, dadosRecebimento, isCavalo } = useContext(GlobalContext);



    const setExtintor = useCallback((value) => dispatch({ type: 'SET_EXTINTOR', payload: value }), [dispatch]);
    const setMacacoHidraulico = useCallback((value) => dispatch({ type: 'SET_MACACO_HIDRAULICO', payload: value }), [dispatch]);
    const setChaveRoda = useCallback((value) => dispatch({ type: 'SET_CHAVE_RODA', payload: value }), [dispatch]);
    const setTrianguloSinalizacao = useCallback((value) => dispatch({ type: 'SET_TRIANGULO_SINALIZACAO', payload: value }), [dispatch]);
    const setAntenasPX = useCallback((value) => dispatch({ type: 'SET_ANTENAS_PX', payload: value }), [dispatch]);
    const setRadioPX = useCallback((value) => dispatch({ type: 'SET_RADIO_PX', payload: value }), [dispatch]);
    const setJogoChinil = useCallback((value) => dispatch({ type: 'SET_JOGO_CHINIL', payload: value }), [dispatch]);
    const setCorrenteEstepe = useCallback((value) => dispatch({ type: 'SET_CORRENTE_ESTOPE', payload: value }), [dispatch]);
    const setLonaCobertura = useCallback((value) => dispatch({ type: 'SET_LONA_COBERTURA', payload: value }), [dispatch]);
    const setTabletRastreamento = useCallback((value) => dispatch({ type: 'SET_TABLET_RASTREAMENTO', payload: value }), [dispatch]);
    const setTravaPallet = useCallback((value) => dispatch({ type: 'SET_TRAVA_PALLET', payload: value }), [dispatch]);
    const setChapatex = useCallback((value) => dispatch({ type: 'SET_CHAPATEX', payload: value }), [dispatch]);
    const setCorote = useCallback((value) => dispatch({ type: 'SET_COROTE', payload: value }), [dispatch]);
    const setCordas = useCallback((value) => dispatch({ type: 'SET_CORDAS', payload: value }), [dispatch]);
    const setCintas = useCallback((value) => dispatch({ type: 'SET_CINTAS', payload: value }), [dispatch]);
    const setCones = useCallback((value) => dispatch({ type: 'SET_CONES', payload: value }), [dispatch]);
    const setCatracas = useCallback((value) => dispatch({ type: 'SET_CATRACAS', payload: value }), [dispatch]);
    const setQuebraSol = useCallback((value) => dispatch({ type: 'SET_QUEBRASOL', payload: value }), [dispatch]);
    const setSom = useCallback((value) => dispatch({ type: 'SET_SOM', payload: value }), [dispatch]);
    const setAcendedorCigarro = useCallback((value) => dispatch({ type: 'SET_ACENDEDOR_CIGARRO', payload: value }), [dispatch]);


    const dadosCheckFerramentas = useMemo(() => {
        let camposFerramentas = [
            { label: 'Corrente Estepe', type: 'checkbox', inputProps: {}, state: state.correnteEstepe, setState: setCorrenteEstepe },
            { label: 'Corote', type: 'checkbox', inputProps: {}, state: state.corote, setState: setCorote },
            { label: 'Cintas', type: 'checkbox', inputProps: {}, state: state.cintas, setState: setCintas },
            { label: 'Catracas', type: 'checkbox', inputProps: {}, state: state.catracas, setState: setCatracas },
            { label: 'Cones', type: 'checkbox', inputProps: {}, state: state.cones, setState: setCones },
            { label: 'Cordas', type: 'checkbox', inputProps: {}, state: state.cordas, setState: setCordas },
        ];

        if (tipoCheckList === 'checklist_graneleiro') {
            camposFerramentas = camposFerramentas.concat([
                { label: 'Lona de Cobertura', type: 'checkbox', inputProps: {}, state: state.lonaCobertura, setState: setLonaCobertura },
            ]);
        } else if (tipoCheckList === 'checklist_thermoking') {
            camposFerramentas = camposFerramentas.concat([
                { label: 'Trava Pallet', type: 'checkbox', inputProps: {}, state: state.travaPallet, setState: setTravaPallet },
            ]);
        } else if (tipoCheckList === 'checklist_sider') {
            camposFerramentas = camposFerramentas.concat([
                { label: 'Chapatex', type: 'checkbox', inputProps: {}, state: state.chapatex, setState: setChapatex },
            ]);
        } else if (tipoCheckList === 'checklist_toco_truck_3_4') {
            camposFerramentas = [
                { label: 'Corrente Estepe', type: 'checkbox', inputProps: {}, state: state.correnteEstepe, setState: setCorrenteEstepe },
                { label: 'Corote', type: 'checkbox', inputProps: {}, state: state.corote, setState: setCorote },
                { label: 'Extintor 1KG ou 2 KG', type: 'checkbox', inputProps: {}, state: state.extintor, setState: setExtintor },
                { label: 'Macaco Hidráulico C/ Cabo de Força', type: 'checkbox', inputProps: {}, state: state.macacoHidraulico, setState: setMacacoHidraulico },
                { label: 'Chave de Roda', type: 'checkbox', inputProps: {}, state: state.chaveRoda, setState: setChaveRoda },
                { label: 'Triângulo de Sinalização', type: 'checkbox', inputProps: {}, state: state.trianguloSinalizacao, setState: setTrianguloSinalizacao },
                { label: 'Antena', type: 'checkbox', inputProps: {}, state: state.antenasPX, setState: setAntenasPX },
                { label: 'Rádio', type: 'checkbox', inputProps: {}, state: state.radioPX, setState: setRadioPX },
                { label: 'Jogo de Chinil Completo', type: 'checkbox', inputProps: {}, state: state.jogoChinil, setState: setJogoChinil },
                { label: 'Tablet Rastreamento', type: 'checkbox', inputProps: {}, state: state.tabletRastreamento, setState: setTabletRastreamento },
                { label: 'Lona de Cobertura', type: 'checkbox', inputProps: {}, state: state.lonaCobertura, setState: setLonaCobertura },
            ];
            if (isCavalo) {
                camposFerramentas = [
                    { label: 'Extintor 1KG ou 2 KG', type: 'checkbox', inputProps: {}, state: state.extintor, setState: setExtintor },
                    { label: 'Macaco Hidráulico C/ Cabo de Força', type: 'checkbox', inputProps: {}, state: state.macacoHidraulico, setState: setMacacoHidraulico },
                    { label: 'Chave de Roda', type: 'checkbox', inputProps: {}, state: state.chaveRoda, setState: setChaveRoda },
                    { label: 'Triângulo de Sinalização', type: 'checkbox', inputProps: {}, state: state.trianguloSinalizacao, setState: setTrianguloSinalizacao },
                    { label: 'Antena', type: 'checkbox', inputProps: {}, state: state.antenasPX, setState: setAntenasPX },
                    { label: 'Rádio', type: 'checkbox', inputProps: {}, state: state.radioPX, setState: setRadioPX },
                    { label: 'Jogo de Chinil Completo', type: 'checkbox', inputProps: {}, state: state.jogoChinil, setState: setJogoChinil },
                    { label: 'Tablet Rastreamento', type: 'checkbox', inputProps: {}, state: state.tabletRastreamento, setState: setTabletRastreamento },
                ];
            }

        } else if (tipoCheckList === 'checklist_veiculo_leve') {
            camposFerramentas = [];
            camposFerramentas = camposFerramentas.concat([
                { label: 'Extintor 1KG ou 2 KG', type: 'checkbox', inputProps: {}, state: state.extintor, setState: setExtintor },
                { label: 'Macaco Hidráulico C/ Cabo de Força', type: 'checkbox', inputProps: {}, state: state.macacoHidraulico, setState: setMacacoHidraulico },
                { label: 'Chave de Roda', type: 'checkbox', inputProps: {}, state: state.chaveRoda, setState: setChaveRoda },
                { label: 'Triângulo de Sinalização', type: 'checkbox', inputProps: {}, state: state.trianguloSinalizacao, setState: setTrianguloSinalizacao },
                { label: 'Antena', type: 'checkbox', inputProps: {}, state: state.antenasPX, setState: setAntenasPX },
                { label: 'Quebra Sol', type: 'checkbox', inputProps: {}, state: state.quebraSol, setState: setQuebraSol },
                { label: 'Som', type: 'checkbox', inputProps: {}, state: state.som, setState: setSom },
                { label: 'Acendedor Cigarro', type: 'checkbox', inputProps: {}, state: state.acendedorCigarro, setState: setAcendedorCigarro },
            ]);
        }

        return camposFerramentas;
    }, [
        state,
        tipoCheckList,
        isCavalo
    ]);


    const hasValue = (value) => {
        if (value === true) {
            return true;
        } else if (value === false) {
            return false;
        }

        return null;
    };


    useEffect(() => {
        if (dadosRecebimento) {
            if (dadosRecebimento) {
                setExtintor({ conforme: hasValue(dadosRecebimento[0]['4_a']) });
                setMacacoHidraulico({ conforme: hasValue(dadosRecebimento[0]['4_b']) });
                setChaveRoda({ conforme: hasValue(dadosRecebimento[0]['4_c']) });
                setTrianguloSinalizacao({ conforme: hasValue(dadosRecebimento[0]['4_d'] == null ? dadosRecebimento[0]['4_t'] : dadosRecebimento[0]['4_d']) });
                setAntenasPX({ conforme: hasValue(dadosRecebimento[0]['4_e']) });
                setRadioPX({ conforme: hasValue(dadosRecebimento[0]['4_f']) });
                setJogoChinil({ conforme: hasValue(dadosRecebimento[0]['4_g']) });
                setCorrenteEstepe({ conforme: hasValue(dadosRecebimento[0]['4_h']) });
                setCorote({ conforme: hasValue(dadosRecebimento[0]['4_i']) });
                setLonaCobertura({ conforme: hasValue(dadosRecebimento[0]['4_j']) });
                setTabletRastreamento({ conforme: hasValue(dadosRecebimento[0]['4_k']) });
                setCordas({ conforme: hasValue(dadosRecebimento[0]['4_l']) });
                setCintas({ conforme: hasValue(dadosRecebimento[0]['4_m']) });
                setCatracas({ conforme: hasValue(dadosRecebimento[0]['4_n']) });
                setTravaPallet({ conforme: hasValue(dadosRecebimento[0]['4_o']) });
                setCones({ conforme: hasValue(dadosRecebimento[0]['4_p']) });
                setChapatex({ conforme: hasValue(dadosRecebimento[0]['4_q']) });
                setQuebraSol({ conforme: hasValue(dadosRecebimento[0]['4_r']) });
                setSom({ conforme: hasValue(dadosRecebimento[0]['4_s']) });
                setAcendedorCigarro({ conforme: hasValue(dadosRecebimento[0]['4_u']) });
            }

        }

    }, [dadosRecebimento]);



    return (
        <FerramentasContext.Provider value={{ dadosCheckFerramentas, state, dispatch }}>
            {children}
        </FerramentasContext.Provider>
    );
}
