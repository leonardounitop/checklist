import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react';
import { initialStateCarroceria, reducerCarroceria } from '../Reducers/reducerCarroceria'
import { GlobalContext } from './GlobalVault';

export const CarroceriaContext = createContext();

export function CarroceriaVault({ children }) {
    const [state, dispatch] = useReducer(reducerCarroceria, initialStateCarroceria);
    const { tipoCheckList, dadosRecebimento, isCavalo } = useContext(GlobalContext);


    const setFrenteInterno = useCallback((value) => dispatch({ type: 'SET_FRENTE_INTERNO', payload: value }), [dispatch]);
    const setTraseiroInterno = useCallback((value) => dispatch({ type: 'SET_TRASEIRO_INTERNO', payload: value }), [dispatch]);
    const setLadoDireitoInterno = useCallback((value) => dispatch({ type: 'SET_LADO_DIREITO_INTERNO', payload: value }), [dispatch]);
    const setLadoEsquerdoInterno = useCallback((value) => dispatch({ type: 'SET_LADO_ESQUERDO_INTERNO', payload: value }), [dispatch]);
    const setTetoInterno = useCallback((value) => dispatch({ type: 'SET_TETO_INTERNO', payload: value }), [dispatch]);
    const setFrenteExterno = useCallback((value) => dispatch({ type: 'SET_FRENTE_EXTERNO', payload: value }), [dispatch]);
    const setTraseiroExterno = useCallback((value) => dispatch({ type: 'SET_TRASEIRO_EXTERNO', payload: value }), [dispatch]);
    const setLadoDireitoExterno = useCallback((value) => dispatch({ type: 'SET_LADO_DIREITO_EXTERNO', payload: value }), [dispatch]);
    const setLadoEsquerdoExterno = useCallback((value) => dispatch({ type: 'SET_LADO_ESQUERDO_EXTERNO', payload: value }), [dispatch]);

    const setGanchos = useCallback((value) => dispatch({ type: 'SET_GANCHOS', payload: value }), [dispatch]);
    const setTendal = useCallback((value) => dispatch({ type: 'SET_TENDAL', payload: value }), [dispatch]);
    const setCortina = useCallback((value) => dispatch({ type: 'SET_CORTINA', payload: value }), [dispatch]);
    const setStatusPreventiva = useCallback((value) => dispatch({ type: 'SET_STATUS_PREVENTIVA', payload: value }), [dispatch]);



    const setPartidaVeiculo = useCallback((value) => dispatch({ type: 'SET_PARTIDA_VEICULO', payload: value }), [dispatch]);
    const setLimpadoresParabrisa = useCallback((value) => dispatch({ type: 'SET_LIMPADORES_PARABRISA', payload: value }), [dispatch]);
    const setBuzina = useCallback((value) => dispatch({ type: 'SET_BUZINA', payload: value }), [dispatch]);
    const setSetasDianteira = useCallback((value) => dispatch({ type: 'SET_SETAS_DIANTEIRA', payload: value }), [dispatch]);
    const setSetasTrazeira = useCallback((value) => dispatch({ type: 'SET_SETAS_TRAZEIRA', payload: value }), [dispatch]);
    const setFarolAltoBaixo = useCallback((value) => dispatch({ type: 'SET_FAROL_ALTO_BAIXO', payload: value }), [dispatch]);
    const setVerificarRe = useCallback((value) => dispatch({ type: 'SET_VERIFICAR_RE', payload: value }), [dispatch]);
    const setPiscaDianteira = useCallback((value) => dispatch({ type: 'SET_PISCA_DIANTEIRA', payload: value }), [dispatch]);
    const setPiscaTraseira = useCallback((value) => dispatch({ type: 'SET_PISCA_TRASEIRA', payload: value }), [dispatch]);
    const setLuzFreio = useCallback((value) => dispatch({ type: 'SET_LUZ_FREIO', payload: value }), [dispatch]);
    const setLuzPlaca = useCallback((value) => dispatch({ type: 'SET_LUZ_PLACA', payload: value }), [dispatch]);
    const setIluminacaoPainel = useCallback((value) => dispatch({ type: 'SET_ILUMINACAO_PAINEL', payload: value }), [dispatch]);
    const setVidroEletrico = useCallback((value) => dispatch({ type: 'SET_VIDRO_ELETRICO', payload: value }), [dispatch]);
    const setTravaEletrica = useCallback((value) => dispatch({ type: 'SET_TRAVA_ELETRICA', payload: value }), [dispatch]);
    const setEsguichoParabrisa = useCallback((value) => dispatch({ type: 'SET_ESGUICHO_PARABRISA', payload: value }), [dispatch]);



    const dadosCheckConservacaoCarroceria = useMemo(() => {
        let camposCarroceria = [
            { label: "Frente Externo", state: state.frenteExterno, setState: setFrenteExterno, type: 'img/checkbox' },
            { label: "Frente Interno", state: state.frenteInterno, setState: setFrenteInterno, type: 'img/checkbox' },
            { label: "Traseiro Externo", state: state.traseiroExterno, setState: setTraseiroExterno, type: 'img/checkbox' },
            { label: "Traseiro Interno", state: state.traseiroInterno, setState: setTraseiroInterno, type: 'img/checkbox' },
            { label: "Lado Direito Externo", state: state.ladoDireitoExterno, setState: setLadoDireitoExterno, type: 'img/checkbox' },
            { label: "Lado Direito Interno", state: state.ladoDireitoInterno, setState: setLadoDireitoInterno, type: 'img/checkbox' },
            { label: "Lado Esquerdo Externo", state: state.ladoEsquerdoExterno, setState: setLadoEsquerdoExterno, type: 'img/checkbox' },
            { label: "Lado Esquerdo Interno", state: state.ladoEsquerdoInterno, setState: setLadoEsquerdoInterno, type: 'img/checkbox' },
            { label: "Teto Interno", state: state.tetoInterno, setState: setTetoInterno, type: 'img/checkbox' },
        ];

        if (tipoCheckList === 'checklist_thermoking') {
            camposCarroceria = camposCarroceria.concat([
                { label: "Ganchos", state: state.ganchos, setState: setGanchos, type: 'img/input' },
                { label: "Tendal", state: state.tendal, setState: setTendal, type: 'img/input' },
                { label: "Cortina", state: state.cortina, setState: setCortina, type: 'img/input' },
                { label: "Status Preventiva", state: state.statusPreventiva, setState: setStatusPreventiva, type: 'checkbox' },
            ]);
        } else if (tipoCheckList === 'checklist_veiculo_leve') {
            camposCarroceria = [
                { label: "Partida do Veículo", state: state.partidaVeiculo, setState: setPartidaVeiculo, type: 'checkbox' },
                { label: "Limpadores de Para-brisa", state: state.limpadoresParaBrisa, setState: setLimpadoresParabrisa, type: 'checkbox' },
                { label: "Esguicho Para-brisa", state: state.esguichoParabrisa, setState: setEsguichoParabrisa, type: 'checkbox' },
                { label: "buzina", state: state.buzina, setState: setBuzina, type: 'checkbox' },
                { label: "Luzes das Setas Dianteira", state: state.setasDianteira, setState: setSetasDianteira, type: 'checkbox' },
                { label: "Luzes das Setas Traseiras", state: state.setasTraseiras, setState: setSetasTrazeira, type: 'checkbox' },
                { label: "Luzes  de Faróis alto e Baixo", state: state.farolAltoBaixo, setState: setFarolAltoBaixo, type: 'checkbox' },
                { label: "Verificar Ré", state: state.verificarRe, setState: setVerificarRe, type: 'checkbox' },
                { label: "Luz Pisca Alerta Dianteira", state: state.piscaDianteira, setState: setPiscaDianteira, type: 'checkbox' },
                { label: "Luzes Pisca Alerta Traseira", state: state.piscaTraseira, setState: setPiscaTraseira, type: 'checkbox' },
                { label: "Luzes de Freio", state: state.luzFreio, setState: setLuzFreio, type: 'checkbox' },
                { label: "Luz de Placa", state: state.luzPlaca, setState: setLuzPlaca, type: 'checkbox' },
                { label: "Iluminação do Painel", state: state.iluminacaoPainel, setState: setIluminacaoPainel, type: 'checkbox' },
                { label: "Vidro Elétrico", state: state.vidroEletrico, setState: setVidroEletrico, type: 'checkbox' },
                { label: "Trava Elétrica", state: state.travaEletrica, setState: setTravaEletrica, type: 'checkbox' },
            ]
        }

        if (isCavalo) {
            camposCarroceria = [];
        }

        return camposCarroceria;
    }, [
        state, tipoCheckList, isCavalo
    ]);

    const hasInput = (value) => {
        return value ? value : null;
    };

    const hasValue = (value) => {
        if (value === true) {
            return true;
        } else if (value === false) {
            return false;
        }

        return null;
    };

    const concatUri = (value) => {
        if (value) {
            return `https://carvalima.unitopconsultoria.com.br/${value}`;
        }

        return null;
    }


    useEffect(() => {
        if (dadosRecebimento) {
            setFrenteInterno({ conforme: hasValue(dadosRecebimento[0]['6_a']), img: { uri: concatUri(dadosRecebimento[0]['6_b']) }, obs: dadosRecebimento[0]['6_c'] });
            setTraseiroInterno({ conforme: hasValue(dadosRecebimento[0]['6_d']), img: { uri: concatUri(dadosRecebimento[0]['6_e']) }, obs: dadosRecebimento[0]['6_f'] });
            setLadoDireitoInterno({ conforme: hasValue(dadosRecebimento[0]['6_g']), img: { uri: concatUri(dadosRecebimento[0]['6_h']) }, obs: dadosRecebimento[0]['6_i'] });
            setLadoEsquerdoInterno({ conforme: hasValue(dadosRecebimento[0]['6_j']), img: { uri: concatUri(dadosRecebimento[0]['6_k']) }, obs: dadosRecebimento[0]['6_l'] });
            setTetoInterno({ conforme: hasValue(dadosRecebimento[0]['6_m']), img: { uri: concatUri(dadosRecebimento[0]['6_n']) }, obs: dadosRecebimento[0]['6_o'] });
            setFrenteExterno({ conforme: hasValue(dadosRecebimento[0]['6_p']), img: { uri: concatUri(dadosRecebimento[0]['6_q']) }, obs: dadosRecebimento[0]['6_r'] });
            setTraseiroExterno({ conforme: hasValue(dadosRecebimento[0]['6_s']), img: { uri: concatUri(dadosRecebimento[0]['6_t']) }, obs: dadosRecebimento[0]['6_u'] });
            setLadoDireitoExterno({ conforme: hasValue(dadosRecebimento[0]['6_v']), img: { uri: concatUri(dadosRecebimento[0]['6_w']) }, obs: dadosRecebimento[0]['6_x'] });
            setLadoEsquerdoExterno({ conforme: hasValue(dadosRecebimento[0]['6_y']), img: { uri: concatUri(dadosRecebimento[0]['6_z']) }, obs: dadosRecebimento[0]['6_aa'] });

            setGanchos({ conforme: hasInput(dadosRecebimento[0]['6_ab']), img: { uri: concatUri(dadosRecebimento[0]['6_ac']) }, obs: dadosRecebimento[0]['6_ad'] });
            setTendal({ conforme: hasInput(dadosRecebimento[0]['6_ad']), img: { uri: concatUri(dadosRecebimento[0]['6_ae']) }, obs: dadosRecebimento[0]['6_ag'] });
            setCortina({ conforme: hasInput(dadosRecebimento[0]['6_af']), img: { uri: concatUri(dadosRecebimento[0]['6_ag']) }, obs: dadosRecebimento[0]['6_ah'] });

            setStatusPreventiva({ conforme: hasValue(dadosRecebimento[0]['6_ah']) });
            setPartidaVeiculo({ conforme: hasValue(dadosRecebimento[0]['6_ai']) });
            setEsguichoParabrisa({ conforme: hasValue(dadosRecebimento[0]['6_aj']) });
            setLimpadoresParabrisa({ conforme: hasValue(dadosRecebimento[0]['6_ak']) });
            setBuzina({ conforme: hasValue(dadosRecebimento[0]['6_al']) });
            setSetasDianteira({ conforme: hasValue(dadosRecebimento[0]['6_am']) });
            setSetasTrazeira({ conforme: hasValue(dadosRecebimento[0]['6_an']) });
            setFarolAltoBaixo({ conforme: hasValue(dadosRecebimento[0]['6_ao']) });
            setVerificarRe({ conforme: hasValue(dadosRecebimento[0]['6_ap']) });
            setPiscaDianteira({ conforme: hasValue(dadosRecebimento[0]['6_aq']) });
            setPiscaTraseira({ conforme: hasValue(dadosRecebimento[0]['6_ar']) });
            setLuzFreio({ conforme: hasValue(dadosRecebimento[0]['6_as']) });
            setLuzPlaca({ conforme: hasValue(dadosRecebimento[0]['6_at']) });
            setIluminacaoPainel({ conforme: hasValue(dadosRecebimento[0]['6_au']) });
            setVidroEletrico({ conforme: hasValue(dadosRecebimento[0]['6_av']) });
            setTravaEletrica({ conforme: hasValue(dadosRecebimento[0]['6_aw']) });
        }
    }, [dadosRecebimento])


    return (
        <CarroceriaContext.Provider value={{ dadosCheckConservacaoCarroceria, state, dispatch }}>{children}</CarroceriaContext.Provider>
    )
}

