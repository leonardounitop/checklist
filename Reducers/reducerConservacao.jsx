export const initialStateConservacao = {
    parachoqueDianteiro: { conforme: null, img: null, obs: null },
    parachoqueTraseiro: { conforme: null, img: null, obs: null },
    protetorLateralEsquerdo: { conforme: null, img: null, obs: null },
    protetorLateralDireito: { conforme: null, img: null, obs: null },
    parabarroDireito: { conforme: null, img: null, obs: null },
    parabarroEsquerdo: { conforme: null, img: null, obs: null },
    paralamaDireito: { conforme: null, img: null, obs: null },
    paralamaEsquerdo: { conforme: null, img: null, obs: null },
    retrovisorExternoDireito: { conforme: null, img: null, obs: null },

    retrovisorExternoEsquerdo: { conforme: null, img: null, obs: null },
    retrovisorInterno: { conforme: null, img: null, obs: null },
    farois: { conforme: null, img: null, obs: null },
    latariaCapo: { conforme: null, img: null, obs: null },
    lentesLanternasTraseiras: { conforme: null, img: null, obs: null },
    latariaPortaDireita: { conforme: null, img: null, obs: null },
    latariaPortaEsquerda: { conforme: null, img: null, obs: null },
    tacografo: { conforme: null, img: null, obs: null },
    painelInstrumentos: { conforme: null, img: null, obs: null },
    caixaCozinha: { conforme: null, img: null, obs: null },
    parabrisa: { conforme: null, img: null, obs: null },
    aerofolio: { conforme: null, img: null, obs: null },
    nivelAgua: { conforme: null, img: null, obs: null },
    vazamentoAgua: { conforme: null, img: null, obs: null },
    nivelOleoMotor: { conforme: null, img: null, obs: null },
    vazamentoOleoMotor: { conforme: null, img: null, obs: null },
    avariaLataria: { conforme: null, img: null, obs: null },
    consertarBancos: { conforme: null, img: null, obs: null },
}


export function reducerConservacao(state, action) {
    switch (action.type) {
        case 'SET_PARACHOQUE_DIANTEIRO':
            return { ...state, parachoqueDianteiro: { ...state.parachoqueDianteiro, ...action.payload } };
        case 'SET_PARACHOQUE_TRASEIRO':
            return { ...state, parachoqueTraseiro: { ...state.parachoqueTraseiro, ...action.payload } };
        case 'SET_PROTETOR_LATERAL_ESQUERDO':
            return { ...state, protetorLateralEsquerdo: { ...state.protetorLateralEsquerdo, ...action.payload } };
        case 'SET_PROTETOR_LATERAL_DIREITO':
            return { ...state, protetorLateralDireito: { ...state.protetorLateralDireito, ...action.payload } };
        case 'SET_PARABARRO_DIREITO':
            return { ...state, parabarroDireito: { ...state.parabarroDireito, ...action.payload } };
        case 'SET_PARABARRO_ESQUERDO':
            return { ...state, parabarroEsquerdo: { ...state.parabarroEsquerdo, ...action.payload } };
        case 'SET_PARALAMA_DIREITO':
            return { ...state, paralamaDireito: { ...state.paralamaDireito, ...action.payload } };
        case 'SET_PARALAMA_ESQUERDO':
            return { ...state, paralamaEsquerdo: { ...state.paralamaEsquerdo, ...action.payload } };
        case 'SET_RETROVISOR_EXTERNO_DIREITO':
            return { ...state, retrovisorExternoDireito: { ...state.retrovisorExternoDireito, ...action.payload } };
        case 'SET_RETROVISOR_EXTERNO_ESQUERDO':
            return { ...state, retrovisorExternoEsquerdo: { ...state.retrovisorExternoEsquerdo, ...action.payload } };
        case 'SET_FAROIS':
            return { ...state, farois: { ...state.farois, ...action.payload } };
        case 'SET_LATARIA_CAPO':
            return { ...state, latariaCapo: { ...state.latariaCapo, ...action.payload } };
        case 'SET_LENTES_LANTERNAS_TRASEIRAS':
            return { ...state, lentesLanternasTraseiras: { ...state.lentesLanternasTraseiras, ...action.payload } };
        case 'SET_LATARIA_PORTA_DIREITA':
            return { ...state, latariaPortaDireita: { ...state.latariaPortaDireita, ...action.payload } };
        case 'SET_LATARIA_PORTA_ESQUERDA':
            return { ...state, latariaPortaEsquerda: { ...state.latariaPortaEsquerda, ...action.payload } };
        case 'SET_TACOGRAFO':
            return { ...state, tacografo: { ...state.tacografo, ...action.payload } };
        case 'SET_PAINEL_INSTRUMENTOS':
            return { ...state, painelInstrumentos: { ...state.painelInstrumentos, ...action.payload } };
        case 'SET_CAIXA_COZINHA':
            return { ...state, caixaCozinha: { ...state.caixaCozinha, ...action.payload } };
        case 'SET_PARABRISA':
            return { ...state, parabrisa: { ...state.parabrisa, ...action.payload } };
        case 'SET_AEROFOLIO':
            return { ...state, aerofolio: { ...state.aerofolio, ...action.payload } };
        case 'SET_RETROVISOR_INTERNO':
            return { ...state, retrovisorInterno: { ...state.retrovisorInterno, ...action.payload } };
        case 'SET_NIVEL_AGUA':
            return { ...state, nivelAgua: { ...state.nivelAgua, ...action.payload } };
        case 'SET_VAZAMENTO_AGUA':
            return { ...state, vazamentoAgua: { ...state.vazamentoAgua, ...action.payload } };
        case 'SET_NIVEL_OLEO_MOTOR':
            return { ...state, nivelOleoMotor: { ...state.nivelOleoMotor, ...action.payload } };
        case 'SET_VAZAMENTO_OLEO_MOTOR':
            return { ...state, vazamentoOleoMotor: { ...state.vazamentoOleoMotor, ...action.payload } };
        case 'SET_AVARIA_LATARIA':
            return { ...state, avariaLataria: { ...state.avariaLataria, ...action.payload } };
        case 'SET_CONSERTAR_BANCO':
            return { ...state, consertarBancos: { ...state.consertarBancos, ...action.payload } };
        case 'RESET':
            return { ...initialStateConservacao };
        default:
            return state;
    }
}

