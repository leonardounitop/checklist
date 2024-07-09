export const initialStateCarroceria = {
    frenteInterno: { conforme: null, img: null, obs: null },
    traseiroInterno: { conforme: null, img: null, obs: null },
    ladoDireitoInterno: { conforme: null, img: null, obs: null },
    ladoEsquerdoInterno: { conforme: null, img: null, obs: null },
    tetoInterno: { conforme: null, img: null, obs: null },
    frenteExterno: { conforme: null, img: null, obs: null },
    traseiroExterno: { conforme: null, img: null, obs: null },
    ladoDireitoExterno: { conforme: null, img: null, obs: null },
    ladoEsquerdoExterno: { conforme: null, img: null, obs: null },

    ganchos: { conforme: null, img: null, obs: null },
    tendal: { conforme: null, img: null, obs: null },
    cortina: { conforme: null, img: null, obs: null },
    statusPreventiva: { conforme: null, img: null, obs: null },

    partidaVeiculo: { conforme: null, img: null, obs: null },
    limpadoresParaBrisa: { conforme: null, img: null, obs: null },
    esguichoParabrisa: { conforme: null, img: null, obs: null },
    buzina: { conforme: null, img: null, obs: null },
    setasDianteira: { conforme: null, img: null, obs: null },
    setasTraseiras: { conforme: null, img: null, obs: null },
    farolAltoBaixo: { conforme: null, img: null, obs: null },
    verificarRe: { conforme: null, img: null, obs: null },

    piscaDianteira: { conforme: null, img: null, obs: null },
    piscaTraseira: { conforme: null, img: null, obs: null },
    luzFreio: { conforme: null, img: null, obs: null },
    luzPlaca: { conforme: null, img: null, obs: null },
    iluminacaoPainel: { conforme: null, img: null, obs: null },
    vidroEletrico: { conforme: null, img: null, obs: null },
    travaEletrica: { conforme: null, img: null, obs: null },

}


export function reducerCarroceria(state, action) {
    switch (action.type) {
        case 'SET_FRENTE_INTERNO':
            return { ...state, frenteInterno: { ...state.frenteInterno, ...action.payload } };
        case 'SET_TRASEIRO_INTERNO':
            return { ...state, traseiroInterno: { ...state.traseiroInterno, ...action.payload } };
        case 'SET_LADO_DIREITO_INTERNO':
            return { ...state, ladoDireitoInterno: { ...state.ladoDireitoInterno, ...action.payload } };
        case 'SET_LADO_ESQUERDO_INTERNO':
            return { ...state, ladoEsquerdoInterno: { ...state.ladoEsquerdoInterno, ...action.payload } };
        case 'SET_TETO_INTERNO':
            return { ...state, tetoInterno: { ...state.tetoInterno, ...action.payload } };
        case 'SET_FRENTE_EXTERNO':
            return { ...state, frenteExterno: { ...state.frenteExterno, ...action.payload } };
        case 'SET_TRASEIRO_EXTERNO':
            return { ...state, traseiroExterno: { ...state.traseiroExterno, ...action.payload } };
        case 'SET_LADO_DIREITO_EXTERNO':
            return { ...state, ladoDireitoExterno: { ...state.ladoDireitoExterno, ...action.payload } };
        case 'SET_LADO_ESQUERDO_EXTERNO':
            return { ...state, ladoEsquerdoExterno: { ...state.ladoEsquerdoExterno, ...action.payload } };
        case 'SET_GANCHOS':
            return { ...state, ganchos: { ...state.ganchos, ...action.payload } };
        case 'SET_TENDAL':
            return { ...state, tendal: { ...state.tendal, ...action.payload } };
        case 'SET_CORTINA':
            return { ...state, cortina: { ...state.cortina, ...action.payload } };
        case 'SET_STATUS_PREVENTIVA':
            return { ...state, statusPreventiva: { ...state.statusPreventiva, ...action.payload } };

        case 'SET_PARTIDA_VEICULO':
            return { ...state, partidaVeiculo: { ...state.partidaVeiculo, ...action.payload } };
        case 'SET_LIMPADORES_PARABRISA':
            return { ...state, limpadoresParaBrisa: { ...state.limpadoresParaBrisa, ...action.payload } };
        case 'SET_BUZINA':
            return { ...state, buzina: { ...state.buzina, ...action.payload } };
        case 'SET_SETAS_DIANTEIRA':
            return { ...state, setasDianteira: { ...state.setasDianteira, ...action.payload } };
        case 'SET_SETAS_TRAZEIRA':
            return { ...state, setasTraseiras: { ...state.setasTraseiras, ...action.payload } };
        case 'SET_FAROL_ALTO_BAIXO':
            return { ...state, farolAltoBaixo: { ...state.farolAltoBaixo, ...action.payload } };
        case 'SET_VERIFICAR_RE':
            return { ...state, verificarRe: { ...state.verificarRe, ...action.payload } };
        case 'SET_PISCA_DIANTEIRA':
            return { ...state, piscaDianteira: { ...state.piscaDianteira, ...action.payload } };
        case 'SET_PISCA_TRASEIRA':
            return { ...state, piscaTraseira: { ...state.piscaTraseira, ...action.payload } };
        case 'SET_LUZ_FREIO':
            return { ...state, luzFreio: { ...state.luzFreio, ...action.payload } };
        case 'SET_LUZ_PLACA':
            return { ...state, luzPlaca: { ...state.luzPlaca, ...action.payload } };
        case 'SET_ILUMINACAO_PAINEL':
            return { ...state, iluminacaoPainel: { ...state.iluminacaoPainel, ...action.payload } };
        case 'SET_VIDRO_ELETRICO':
            return { ...state, vidroEletrico: { ...state.vidroEletrico, ...action.payload } };
        case 'SET_TRAVA_ELETRICA':
            return { ...state, travaEletrica: { ...state.travaEletrica, ...action.payload } };
        case 'SET_ESGUICHO_PARABRISA':
            return { ...state, esguichoParabrisa: { ...state.esguichoParabrisa, ...action.payload } };
        case 'RESET':
            return initialStateCarroceria;
        default:
            return state;
    }
}