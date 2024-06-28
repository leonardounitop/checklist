export const initialVeiculoState = {
    entregaDevolucao: null,
    placa: null,
    tipo: null,
    data: new Date().toLocaleDateString('pt-br'),
    filial: null,
    kmTotal: null,
    horimetro: '0',
    idPlaca: null,
    horimetroImagem: { conforme: null, img: null },
    numThermokingImagem: { conforme: null, img: null }
}

export function reducerVeiculo(state, action) {
    switch (action.type) {
        case 'SET_ENTREGA_DEVOLUCAO':
            return { ...state, entregaDevolucao: action.payload };
        case 'SET_PLACA':
            return { ...state, placa: action.payload };
        case 'SET_TIPO':
            return { ...state, tipo: action.payload };
        case 'SET_DATA':
            return { ...state, data: action.payload };
        case 'SET_FILIAL':
            return { ...state, filial: action.payload };
        case 'SET_KM_TOTAL':
            return { ...state, kmTotal: action.payload };
        case 'SET_HORIMETRO':
            return { ...state, horimetro: action.payload };
        case 'SET_IDPLACA':
            return { ...state, idPlaca: action.payload };
        case 'SET_HORIMETRO_IMAGEM':
            return { ...state, horimetroImagem: { ...state.horimetroImagem, ...action.payload } };
        case 'SET_NUM_THERMOKING_IMG':
            return { ...state, numThermokingImagem: { ...state.numThermokingImagem, ...action.payload } };
        case 'RESET':
            return {
                entregaDevolucao: null,
                placa: null,
                tipo: null,
                data: new Date().toLocaleDateString('pt-br'),
                filial: null,
                kmTotal: null,
                horimetro: '0',
                idPlaca: null,
                horimetroImagem: { conforme: null, img: null },
                numThermokingImagem: { conforme: null, img: null }
            };
        default:
            return state;
    }
}
