export const initialStateDocumentacao = {
    crlv: { conforme: null },
    aet: { conforme: null },
    certificadoTacografo: { conforme: null },
    manual: { conforme: null },
    placaLacre: { conforme: null },
    testeFrio: { conforme: null }
}


export function reducerDocumentacao(state, action) {
    switch (action.type) {
        case 'SET_CRLV':
            return { ...state, crlv: { ...state.crlv, ...action.payload } };
        case 'SET_AET':
            return { ...state, aet: { ...state.aet, ...action.payload } };
        case 'SET_CERTIFICADO_TACOGRAFO':
            return { ...state, certificadoTacografo: { ...state.certificadoTacografo, ...action.payload } };
        case 'SET_MANUAL':
            return { ...state, manual: { ...state.manual, ...action.payload } };
        case 'SET_PLACA_LACRE':
            return { ...state, placaLacre: { ...state.placaLacre, ...action.payload } };
        case 'SET_TESTE_FRIO':
            return { ...state, testeFrio: { ...state.testeFrio, ...action.payload } };
        case 'RESET':
            return { ...initialStateDocumentacao }
        default:
            return state;
    }
}