export const initialStatePneus = {
    primeiroDE: { conforme: null, img: null },
    primeiroDI: { conforme: null, img: null },
    primeiroEE: { conforme: null, img: null },
    primeiroEI: { conforme: null, img: null },
    segundoDE: { conforme: null, img: null },
    segundoDI: { conforme: null, img: null },
    segundoEE: { conforme: null, img: null },
    segundoEI: { conforme: null, img: null },
    terceiroDE: { conforme: null, img: null },
    terceiroDI: { conforme: null, img: null },
    terceiroEE: { conforme: null, img: null },
    terceiroEI: { conforme: null, img: null },
    estepeUm: { conforme: null, img: null },
    estepeDois: { conforme: null, img: null },

    primeiroLeveD: { conforme: null, img: null },
    primeiroLeveE: { conforme: null, img: null },
    segundoLeveD: { conforme: null, img: null },
    segundoLeveE: { conforme: null, img: null },
    leveEstepeUm: { conforme: null, img: null },
}


export function reducerPneus(state, action) {
    switch (action.type) {
        case 'SET_PRIMEIRO_DE':
            return { ...state, primeiroDE: { ...state.primeiroDE, ...action.payload } };
        case 'SET_PRIMEIRO_DI':
            return { ...state, primeiroDI: { ...state.primeiroDI, ...action.payload } };
        case 'SET_PRIMEIRO_EE':
            return { ...state, primeiroEE: { ...state.primeiroEE, ...action.payload } };
        case 'SET_PRIMEIRO_EI':
            return { ...state, primeiroEI: { ...state.primeiroEI, ...action.payload } };
        case 'SET_SEGUNDO_DE':
            return { ...state, segundoDE: { ...state.segundoDE, ...action.payload } };
        case 'SET_SEGUNDO_DI':
            return { ...state, segundoDI: { ...state.segundoDI, ...action.payload } };
        case 'SET_SEGUNDO_EE':
            return { ...state, segundoEE: { ...state.segundoEE, ...action.payload } };
        case 'SET_SEGUNDO_EI':
            return { ...state, segundoEI: { ...state.segundoEI, ...action.payload } };
        case 'SET_TERCEIRO_DE':
            return { ...state, terceiroDE: { ...state.terceiroDE, ...action.payload } };
        case 'SET_TERCEIRO_DI':
            return { ...state, terceiroDI: { ...state.terceiroDI, ...action.payload } };
        case 'SET_TERCEIRO_EE':
            return { ...state, terceiroEE: { ...state.terceiroEE, ...action.payload } };
        case 'SET_TERCEIRO_EI':
            return { ...state, terceiroEI: { ...state.terceiroEI, ...action.payload } };
        case 'SET_ESTOPE_UM':
            return { ...state, estepeUm: { ...state.estepeUm, ...action.payload } };
        case 'SET_ESTOPE_DOIS':
            return { ...state, estepeDois: { ...state.estepeDois, ...action.payload } };
        case 'SET_PRIMEIRO_LEVE_D':
            return { ...state, primeiroLeveD: { ...state.primeiroLeveD, ...action.payload } };
        case 'SET_PRIMEIRO_LEVE_E':
            return { ...state, primeiroLeveE: { ...state.primeiroLeveE, ...action.payload } };
        case 'SET_SEGUNDO_LEVE_D':
            return { ...state, segundoLeveD: { ...state.segundoLeveD, ...action.payload } };
        case 'SET_SEGUNDO_LEVE_E':
            return { ...state, segundoLeveE: { ...state.segundoLeveE, ...action.payload } };
        case 'SET_LEVE_ESTEPE':
            return { ...state, leveEstepeUm: { ...state.leveEstepeUm, ...action.payload } };
        case 'RESET':
            return { ...initialStatePneus };
        default:
            return state;
    }
}