import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react';
import { initialStateConservacao, reducerConservacao } from '../Reducers/reducerConservacao'
import { GlobalContext } from './GlobalVault';

export const ConservacaoContext = createContext();

export function ConservacaoVault({ children }) {
    const [state, dispatch] = useReducer(reducerConservacao, initialStateConservacao);
    const { tipoCheckList, dadosRecebimento } = useContext(GlobalContext);

    const setParachoqueDianteiro = useCallback((value) => dispatch({ type: 'SET_PARACHOQUE_DIANTEIRO', payload: value }), [dispatch]);
    const setParachoqueTraseiro = useCallback((value) => dispatch({ type: 'SET_PARACHOQUE_TRASEIRO', payload: value }), [dispatch]);
    const setProtetorLateralEsquerdo = useCallback((value) => dispatch({ type: 'SET_PROTETOR_LATERAL_ESQUERDO', payload: value }), [dispatch]);
    const setProtetorLateralDireito = useCallback((value) => dispatch({ type: 'SET_PROTETOR_LATERAL_DIREITO', payload: value }), [dispatch]);
    const setParabarroDireito = useCallback((value) => dispatch({ type: 'SET_PARABARRO_DIREITO', payload: value }), [dispatch]);
    const setParabarroEsquerdo = useCallback((value) => dispatch({ type: 'SET_PARABARRO_ESQUERDO', payload: value }), [dispatch]);
    const setParalamaDireito = useCallback((value) => dispatch({ type: 'SET_PARALAMA_DIREITO', payload: value }), [dispatch]);
    const setParalamaEsquerdo = useCallback((value) => dispatch({ type: 'SET_PARALAMA_ESQUERDO', payload: value }), [dispatch]);
    const setRetrovisorExternoDireito = useCallback((value) => dispatch({ type: 'SET_RETROVISOR_EXTERNO_DIREITO', payload: value }), [dispatch]);
    const setRetrovisorExternoEsquerdo = useCallback((value) => dispatch({ type: 'SET_RETROVISOR_EXTERNO_ESQUERDO', payload: value }), [dispatch]);
    const setFarois = useCallback((value) => dispatch({ type: 'SET_FAROIS', payload: value }), [dispatch]);
    const setLatariaCapo = useCallback((value) => dispatch({ type: 'SET_LATARIA_CAPO', payload: value }), [dispatch]);
    const setLentesLanternasTraseiras = useCallback((value) => dispatch({ type: 'SET_LENTES_LANTERNAS_TRASEIRAS', payload: value }), [dispatch]);
    const setLatariaPortaDireita = useCallback((value) => dispatch({ type: 'SET_LATARIA_PORTA_DIREITA', payload: value }), [dispatch]);
    const setLatariaPortaEsquerda = useCallback((value) => dispatch({ type: 'SET_LATARIA_PORTA_ESQUERDA', payload: value }), [dispatch]);
    const setTacografo = useCallback((value) => dispatch({ type: 'SET_TACOGRAFO', payload: value }), [dispatch]);
    const setPainelInstrumentos = useCallback((value) => dispatch({ type: 'SET_PAINEL_INSTRUMENTOS', payload: value }), [dispatch]);
    const setCaixaCozinha = useCallback((value) => dispatch({ type: 'SET_CAIXA_COZINHA', payload: value }), [dispatch]);
    const setParabrisa = useCallback((value) => dispatch({ type: 'SET_PARABRISA', payload: value }), [dispatch]);
    const setAerofolio = useCallback((value) => dispatch({ type: 'SET_AEROFOLIO', payload: value }), [dispatch]);
    const setRetrovisorInterno = useCallback((value) => dispatch({ type: 'SET_RETROVISOR_INTERNO', payload: value }), [dispatch]);
    const setNivelAgua = useCallback((value) => dispatch({ type: 'SET_NIVEL_AGUA', payload: value }), [dispatch]);
    const setVazamentoAgua = useCallback((value) => dispatch({ type: 'SET_VAZAMENTO_AGUA', payload: value }), [dispatch]);
    const setNivelOleoMotor = useCallback((value) => dispatch({ type: 'SET_NIVEL_OLEO_MOTOR', payload: value }), [dispatch]);
    const setVazamentoOleoMotor = useCallback((value) => dispatch({ type: 'SET_VAZAMENTO_OLEO_MOTOR', payload: value }), [dispatch]);
    const setAvariaLataria = useCallback((value) => dispatch({ type: 'SET_AVARIA_LATARIA', payload: value }), [dispatch]);
    const setConsertarBanco = useCallback((value) => dispatch({ type: 'SET_CONSERTAR_BANCO', payload: value }), [dispatch]);




    const dadosCheckConservacaoVeiculo = useMemo(() => {
        let camposConservacao = [
            { label: 'PARA CHOQUE TRASEIRO', type: 'img/checkbox', state: state.parachoqueTraseiro, setState: setParachoqueTraseiro },
            { label: 'PROTETOR LATERAL ESQUERDO', type: 'img/checkbox', state: state.protetorLateralEsquerdo, setState: setProtetorLateralEsquerdo },
            { label: 'PROTETOR LATERAL DIREITO', type: 'img/checkbox', state: state.protetorLateralDireito, setState: setProtetorLateralDireito },
            { label: 'PARA BARRO LADO DIREITO', type: 'img/checkbox', state: state.parabarroDireito, setState: setParabarroDireito },
            { label: 'PARA BARRO LADO ESQUERDO', type: 'img/checkbox', state: state.parabarroEsquerdo, setState: setParabarroEsquerdo },
            { label: 'PARA LAMA LADO DIREITO', type: 'img/checkbox', state: state.paralamaDireito, setState: setParalamaDireito },
            { label: 'PARA LAMA LADO ESQUERDO', type: 'img/checkbox', state: state.paralamaEsquerdo, setState: setParalamaEsquerdo },
            { label: 'LENTES E LANTERNAS TRASEIRAS', type: 'img/checkbox', state: state.lentesLanternasTraseiras, setState: setLentesLanternasTraseiras },
        ];

        if (tipoCheckList === 'checklist_graneleiro') {
            camposConservacao = camposConservacao.concat([
                { label: 'CAIXA DE COZINHA', type: 'img/checkbox', state: state.caixaCozinha, setState: setCaixaCozinha },
            ]);
        } else if (tipoCheckList === 'checklist_carretabau') {
            camposConservacao = camposConservacao.concat([
                { label: 'CAIXA DE COZINHA', type: 'img/checkbox', state: state.caixaCozinha, setState: setCaixaCozinha },
            ]);
        } else if (tipoCheckList === 'checklist_thermoking') {
            camposConservacao = [{
                label: 'PARA CHOQUE DIANTEIRO',
                type: 'img/checkbox',
                state: state.parachoqueDianteiro,
                setState: setParachoqueDianteiro
            },
            ...camposConservacao, {
                label: 'RETROVISOR EXTERNO LADO DIREITO', type: 'img/checkbox',
                state: state.retrovisorExternoDireito, setState: setRetrovisorExternoDireito
            },
            {
                label: 'RETROVISOR EXTERNO LADO ESQUERDO',
                type: 'img/checkbox',
                state: state.retrovisorExternoEsquerdo,
                setState: setRetrovisorExternoEsquerdo
            },];
        } else if (tipoCheckList === 'checklist_sider') {
            camposConservacao = [{
                label: 'PARA CHOQUE DIANTEIRO',
                type: 'img/checkbox',
                state: state.parachoqueDianteiro,
                setState: setParachoqueDianteiro
            },
            ...camposConservacao, { label: 'CAIXA DE COZINHA', type: 'img/checkbox', state: state.caixaCozinha, setState: setCaixaCozinha }];
        } else if (tipoCheckList === 'checklist_toco_truck_3_4') {
            camposConservacao = [{
                label: 'PARA CHOQUE DIANTEIRO',
                type: 'img/checkbox',
                state: state.parachoqueDianteiro,
                setState: setParachoqueDianteiro
            },
            ...camposConservacao,
            { label: 'CAIXA DE COZINHA', type: 'img/checkbox', state: state.caixaCozinha, setState: setCaixaCozinha },
            { label: 'RETROVISOR EXTERNO LADO DIREITO', type: 'img/checkbox', state: state.retrovisorExternoDireito, setState: setRetrovisorExternoDireito },
            { label: 'RETROVISOR EXTERNO LADO ESQUERDO', type: 'img/checkbox', state: state.retrovisorExternoEsquerdo, setState: setRetrovisorExternoEsquerdo },
            { label: 'FARÓIS', type: 'img/checkbox', state: state.farois, setState: setFarois },
            { label: 'LATARIA CAPO', type: 'img/checkbox', state: state.latariaCapo, setState: setLatariaCapo },
            { label: 'LATARIA PORTA DIREITA', type: 'img/checkbox', state: state.latariaPortaDireita, setState: setLatariaPortaDireita },
            { label: 'LATARIA PORTA ESQUERDA', type: 'img/checkbox', state: state.latariaPortaEsquerda, setState: setLatariaPortaEsquerda },
            { label: 'TACÓGRAFO', type: 'img/checkbox', state: state.tacografo, setState: setTacografo },
            { label: 'PAINEL DE INSTRUMENTOS', type: 'img/checkbox', state: state.painelInstrumentos, setState: setPainelInstrumentos },
            { label: 'PARABRISA', type: 'img/checkbox', state: state.parabrisa, setState: setParabrisa },
            { label: 'AEROFÓLIO', type: 'img/checkbox', state: state.aerofolio, setState: setAerofolio },

            ];
        } else if (tipoCheckList === 'checklist_veiculo_leve') {
            camposConservacao = [{ label: 'PARA CHOQUE DIANTEIRO', type: 'img/checkbox', state: state.parachoqueDianteiro, setState: setParachoqueDianteiro },
            { label: 'PARA CHOQUE TRASEIRO', type: 'img/checkbox', state: state.parachoqueTraseiro, setState: setParachoqueTraseiro },
            { label: 'RETROVISOR EXTERNO LADO DIREITO', type: 'img/checkbox', state: state.retrovisorExternoDireito, setState: setRetrovisorExternoDireito },
            { label: 'RETROVISOR EXTERNO LADO ESQUERDO', type: 'img/checkbox', state: state.retrovisorExternoEsquerdo, setState: setRetrovisorExternoEsquerdo },
            { label: 'RETROVISOR INTERNO', type: 'img/checkbox', state: state.retrovisorInterno, setState: setRetrovisorInterno },
            { label: 'Verificar Nível D\'Água', type: 'img/checkbox', state: state.nivelAgua, setState: setNivelAgua },
            { label: 'Verificar Vazamento D\'Água', type: 'img/checkbox', state: state.vazamentoAgua, setState: setVazamentoAgua },
            { label: 'Verificar Nível do Óleo de Motor', type: 'img/checkbox', state: state.nivelOleoMotor, setState: setNivelOleoMotor },
            { label: 'Verificar Vazamentos de Óleo do Motor', type: 'img/checkbox', state: state.vazamentoOleoMotor, setState: setVazamentoOleoMotor },
            { label: 'Avaria na Lataria', type: 'img/checkbox', state: state.avariaLataria, setState: setAvariaLataria },
            { label: 'LATARIA CAPO', type: 'img/checkbox', state: state.latariaCapo, setState: setLatariaCapo },
            { label: 'LATARIA PORTA DIREITA', type: 'img/checkbox', state: state.latariaPortaDireita, setState: setLatariaPortaDireita },
            { label: 'LATARIA PORTA ESQUERDA', type: 'img/checkbox', state: state.latariaPortaEsquerda, setState: setLatariaPortaEsquerda },
            { label: 'Verificar e Consertar Bancos', type: 'img/checkbox', state: state.consertarBancos, setState: setConsertarBanco },
            ];
        }

        return camposConservacao;
    }, [
        state, tipoCheckList
    ]);


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


            setParachoqueDianteiro({ conforme: hasValue(dadosRecebimento[0]['5_a']), img: { uri: concatUri(dadosRecebimento[0]['5_b']) }, obs: dadosRecebimento[0]['5_c'] });
            setParachoqueTraseiro({ conforme: hasValue(dadosRecebimento[0]['5_d']), img: { uri: concatUri(dadosRecebimento[0]['5_e']) }, obs: dadosRecebimento[0]['5_f'] });
            setProtetorLateralEsquerdo({ conforme: hasValue(dadosRecebimento[0]['5_g']), img: { uri: concatUri(dadosRecebimento[0]['5_h']) }, obs: dadosRecebimento[0]['5_i'] });
            setProtetorLateralDireito({ conforme: hasValue(dadosRecebimento[0]['5_j']), img: { uri: concatUri(dadosRecebimento[0]['5_k']) }, obs: dadosRecebimento[0]['5_l'] });
            setParabarroDireito({ conforme: hasValue(dadosRecebimento[0]['5_m']), img: { uri: concatUri(dadosRecebimento[0]['5_n']) }, obs: dadosRecebimento[0]['5_o'] });
            setParabarroEsquerdo({ conforme: hasValue(dadosRecebimento[0]['5_p']), img: { uri: concatUri(dadosRecebimento[0]['5_q']) }, obs: dadosRecebimento[0]['5_r'] });
            setParalamaDireito({ conforme: hasValue(dadosRecebimento[0]['5_s']), img: { uri: concatUri(dadosRecebimento[0]['5_t']) }, obs: dadosRecebimento[0]['5_u'] });
            setParalamaEsquerdo({ conforme: hasValue(dadosRecebimento[0]['5_v']), img: { uri: concatUri(dadosRecebimento[0]['5_w']) }, obs: dadosRecebimento[0]['5_x'] });
            setRetrovisorExternoDireito({ conforme: hasValue(dadosRecebimento[0]['5_y']), img: { uri: concatUri(dadosRecebimento[0]['5_z']) }, obs: dadosRecebimento[0]['5_aa'] });
            setRetrovisorExternoEsquerdo({ conforme: hasValue(dadosRecebimento[0]['5_ab']), img: { uri: concatUri(dadosRecebimento[0]['5_ac']) }, obs: dadosRecebimento[0]['5_ad'] });
            setFarois({ conforme: hasValue(dadosRecebimento[0]['5_ae']), img: { uri: concatUri(dadosRecebimento[0]['5_af']) }, obs: dadosRecebimento[0]['5_ag'] });
            setLatariaCapo({ conforme: hasValue(dadosRecebimento[0]['5_ah']), img: { uri: concatUri(dadosRecebimento[0]['5_ai']) }, obs: dadosRecebimento[0]['5_aj'] });
            setLentesLanternasTraseiras({ conforme: hasValue(dadosRecebimento[0]['5_ak']), img: { uri: concatUri(dadosRecebimento[0]['5_al']) }, obs: dadosRecebimento[0]['5_am'] });
            setLatariaPortaDireita({ conforme: hasValue(dadosRecebimento[0]['5_an']), img: { uri: concatUri(dadosRecebimento[0]['5_ao']) }, obs: dadosRecebimento[0]['5_ap'] });
            setLatariaPortaEsquerda({ conforme: hasValue(dadosRecebimento[0]['5_aq']), img: { uri: concatUri(dadosRecebimento[0]['5_ar']) }, obs: dadosRecebimento[0]['5_as'] });
            setTacografo({ conforme: hasValue(dadosRecebimento[0]['5_at']), img: { uri: concatUri(dadosRecebimento[0]['5_au']) }, obs: dadosRecebimento[0]['5_av'] });
            setPainelInstrumentos({ conforme: hasValue(dadosRecebimento[0]['5_aw']), img: { uri: concatUri(dadosRecebimento[0]['5_ax']) }, obs: dadosRecebimento[0]['5_ay'] });
            setCaixaCozinha({ conforme: hasValue(dadosRecebimento[0]['5_az']), img: { uri: concatUri(dadosRecebimento[0]['5_aaa']) }, obs: dadosRecebimento[0]['5_aab'] });
            setParabrisa({ conforme: hasValue(dadosRecebimento[0]['5_aac']), img: { uri: concatUri(dadosRecebimento[0]['5_aad']) }, obs: dadosRecebimento[0]['5_aae'] });
            setAerofolio({ conforme: hasValue(dadosRecebimento[0]['5_aaf']), img: { uri: concatUri(dadosRecebimento[0]['5_aag']) }, obs: dadosRecebimento[0]['5_aah'] });
            setNivelAgua({ conforme: hasValue(dadosRecebimento[0]['5_aai']) });
            setVazamentoAgua({ conforme: hasValue(dadosRecebimento[0]['5_aaj']) });
            setNivelOleoMotor({ conforme: hasValue(dadosRecebimento[0]['5_aak']) });
            setVazamentoOleoMotor({ conforme: hasValue(dadosRecebimento[0]['5_aal']) });
            setAvariaLataria({ conforme: hasValue(dadosRecebimento[0]['5_aam']), img: { uri: concatUri(dadosRecebimento[0]['5_aan']) }, obs: dadosRecebimento[0]['5_aao'] });
            setConsertarBanco({ conforme: hasValue(dadosRecebimento[0]['5_aap']), img: { uri: concatUri(dadosRecebimento[0]['5_aaq']) }, obs: dadosRecebimento[0]['5_aar'] });

        }

    }, [dadosRecebimento])



    // '5_a': contextConservacao.state.parachoqueDianteiro.conforme,
    // '5_b': isBase64(contextConservacao.state.parachoqueDianteiro.img),
    // '5_c': contextConservacao.state.parachoqueDianteiro.obs,
    // '5_d': contextConservacao.state.parachoqueTraseiro.conforme,
    // '5_e': isBase64(contextConservacao.state.parachoqueTraseiro.img),
    // '5_f': contextConservacao.state.parachoqueTraseiro.obs,
    // '5_g': contextConservacao.state.protetorLateralEsquerdo.conforme,
    // '5_h': isBase64(contextConservacao.state.protetorLateralEsquerdo.img),
    // '5_i': contextConservacao.state.protetorLateralEsquerdo.obs,
    // '5_j': contextConservacao.state.protetorLateralDireito.conforme,
    // '5_k': isBase64(contextConservacao.state.protetorLateralDireito.img),
    // '5_l': contextConservacao.state.protetorLateralDireito.obs,
    // '5_m': contextConservacao.state.parabarroDireito.conforme,
    // '5_n': isBase64(contextConservacao.state.parabarroDireito.img),
    // '5_o': contextConservacao.state.parabarroDireito.os,
    // '5_p': contextConservacao.state.parabarroEsquerdo.conforme,
    // '5_q': isBase64(contextConservacao.state.parabarroEsquerdo.img),
    // '5_r': contextConservacao.state.parabarroEsquerdo.os,
    // '5_s': contextConservacao.state.paralamaDireito.conforme,
    // '5_t': isBase64(contextConservacao.state.paralamaDireito.img),
    // '5_u': contextConservacao.state.paralamaDireito.os,
    // '5_v': contextConservacao.state.paralamaEsquerdo.conforme,
    // '5_w': isBase64(contextConservacao.state.paralamaEsquerdo.img),
    // '5_x': contextConservacao.state.paralamaEsquerdo.os,
    // '5_y': contextConservacao.state.retrovisorExternoDireito.conforme,
    // '5_z': isBase64(contextConservacao.state.retrovisorExternoDireito.img),
    // '5_aa': contextConservacao.state.retrovisorExternoDireito.os,
    // '5_ab': contextConservacao.state.retrovisorExternoEsquerdo.conforme,
    // '5_ac': isBase64(contextConservacao.state.retrovisorExternoEsquerdo.img),
    // '5_ad': contextConservacao.state.retrovisorExternoEsquerdo.os,
    // '5_ae': contextConservacao.state.farois.conforme,
    // '5_af': isBase64(contextConservacao.state.farois.img),
    // '5_ag': contextConservacao.state.farois.os,
    // '5_ah': contextConservacao.state.latariaCapo.conforme,
    // '5_ai': isBase64(contextConservacao.state.latariaCapo.img),
    // '5_aj': contextConservacao.state.latariaCapo.os,
    // '5_ak': contextConservacao.state.lentesLanternasTraseiras.conforme,
    // '5_al': isBase64(contextConservacao.state.lentesLanternasTraseiras.img),
    // '5_am': contextConservacao.state.lentesLanternasTraseiras.os,
    // '5_an': contextConservacao.state.latariaPortaDireita.conforme,
    // '5_ao': isBase64(contextConservacao.state.latariaPortaDireita.img),
    // '5_ap': contextConservacao.state.latariaPortaDireita.os,
    // '5_aq': contextConservacao.state.latariaPortaEsquerda.conforme,
    // '5_ar': isBase64(contextConservacao.state.latariaPortaEsquerda.img),
    // '5_as': contextConservacao.state.latariaPortaEsquerda.os,
    // '5_at': contextConservacao.state.tacografo.conforme,
    // '5_au': isBase64(contextConservacao.state.tacografo.img),
    // '5_av': contextConservacao.state.tacografo.os,
    // '5_aw': contextConservacao.state.painelInstrumentos.conforme,
    // '5_ax': isBase64(contextConservacao.state.painelInstrumentos.img),
    // '5_ay': contextConservacao.state.painelInstrumentos.os,
    // '5_az': contextConservacao.state.caixaCozinha.conforme,
    // '5_aaa': isBase64(contextConservacao.state.caixaCozinha.img),
    // '5_aab': contextConservacao.state.caixaCozinha.os,
    // '5_aac': contextConservacao.state.parabrisa.conforme,
    // '5_aad': isBase64(contextConservacao.state.parabrisa.img),
    // '5_aae': contextConservacao.state.parabrisa.os,
    // '5_aaf': contextConservacao.state.aerofolio.conforme,
    // '5_aag': isBase64(contextConservacao.state.aerofolio.img),
    // '5_aah': contextConservacao.state.aerofolio.os,
    // '5_aaf': contextConservacao.state.aerofolio.conforme,
    // '5_aag': isBase64(contextConservacao.state.aerofolio.img),
    // '5_aah': contextConservacao.state.aerofolio.os,
    // '5_aai': contextConservacao.state.nivelAgua.conforme,
    // '5_aaj': contextConservacao.state.vazamentoAgua.conforme,
    // '5_aak': contextConservacao.state.nivelOleoMotor.conforme,
    // '5_aal': contextConservacao.state.vazamentoOleoMotor.conforme,
    // '5_aam': contextConservacao.state.avariaLataria.conforme,
    // '5_aan': isBase64(contextConservacao.state.avariaLataria.img),
    // '5_aao': contextConservacao.state.avariaLataria.obs,
    // '5_aap': contextConservacao.state.consertarBancos.conforme,
    // '5_aaq': isBase64(contextConservacao.state.consertarBancos.img),
    // '5_aar': contextConservacao.state.consertarBancos.obs,

    return (
        <ConservacaoContext.Provider value={{ dadosCheckConservacaoVeiculo, state, dispatch }}>{children}</ConservacaoContext.Provider>
    )
}

