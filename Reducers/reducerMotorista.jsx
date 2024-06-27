export const initialStateMotorista = {
    nome: null,
    idMotorista: null,
    validacao: { conforme: null, img: null },
    termo: { conforme: null },
    responsavel: null,
    observacao: null,
    assMotorista: null,
    assResponsavel: null,
}


export function reducerMotorista(state, action) {
    switch (action.type) {
        case 'SET_NOME':
            return { ...state, nome: action.payload };
        case 'SET_IDMOTORISTA':
            return { ...state, idMotorista: action.payload };
        case 'SET_VALIDACAO':
            return { ...state, validacao: { ...state.validacao, ...action.payload } };
        case 'SET_TERMO':
            return { ...state, termo: action.payload };
        case 'SET_RESPONSAVEL':
            return { ...state, responsavel: action.payload };
        case 'SET_OBSERVACAO':
            return { ...state, observacao: action.payload };
        case 'SET_ASS_MOTORISTA':
            return { ...state, assMotorista: action.payload };
        case 'SET_ASS_RESPONSAVEL':
            return { ...state, assResponsavel: action.payload };
        case 'RESET':
            return {
                ...state,
                validacao: { conforme: null, img: null },
                termo: { conforme: null },
                observacao: null,
                assMotorista: null,
                assResponsavel: null,
            }
        default:
            return state;
    }
}