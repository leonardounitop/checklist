export const initialStateFerramentas = {
    extintor: { conforme: null },
    cordas: { confome: null },
    correnteEstepe: { conforme: null },
    cintas: { conforme: null },
    catracas: { conforme: null },
    cones: { conforme: null },
    corote: { conforme: null },
    macacoHidraulico: { conforme: null },
    chaveRoda: { conforme: null },
    trianguloSinalizacao: { conforme: null },
    antenasPX: { conforme: null },
    radioPX: { conforme: null },
    jogoChinil: { conforme: null },
    lonaCobertura: { conforme: null },
    tabletRastreamento: { conforme: null },
    travaPallet: { conforme: null },
    chapatex: { conforme: null },
    quebraSol: { conforme: null },
    som: { conforme: null },
    acendedorCigarro: { conforme: null },
};

export function reducerFerramentas(state, action) {
    switch (action.type) {
        case 'SET_EXTINTOR':
            return { ...state, extintor: { ...state.extintor, ...action.payload } };
        case 'SET_MACACO_HIDRAULICO':
            return { ...state, macacoHidraulico: { ...state.macacoHidraulico, ...action.payload } };
        case 'SET_CHAVE_RODA':
            return { ...state, chaveRoda: { ...state.chaveRoda, ...action.payload } };
        case 'SET_TRIANGULO_SINALIZACAO':
            return { ...state, trianguloSinalizacao: { ...state.trianguloSinalizacao, ...action.payload } };
        case 'SET_ANTENAS_PX':
            return { ...state, antenasPX: { ...state.antenasPX, ...action.payload } };
        case 'SET_RADIO_PX':
            return { ...state, radioPX: { ...state.radioPX, ...action.payload } };
        case 'SET_JOGO_CHINIL':
            return { ...state, jogoChinil: { ...state.jogoChinil, ...action.payload } };
        case 'SET_CORRENTE_ESTOPE':
            return { ...state, correnteEstepe: { ...state.correnteEstepe, ...action.payload } };
        case 'SET_COROTE':
            return { ...state, corote: { ...state.corote, ...action.payload } };
        case 'SET_LONA_COBERTURA':
            return { ...state, lonaCobertura: { ...state.lonaCobertura, ...action.payload } };
        case 'SET_TABLET_RASTREAMENTO':
            return { ...state, tabletRastreamento: { ...state.tabletRastreamento, ...action.payload } };
        case 'SET_CORDAS':
            return { ...state, cordas: { ...state.cordas, ...action.payload } };
        case 'SET_CONES':
            return { ...state, cones: { ...state.cones, ...action.payload } };
        case 'SET_CINTAS':
            return { ...state, cintas: { ...state.cintas, ...action.payload } };
        case 'SET_CATRACAS':
            return { ...state, catracas: { ...state.catracas, ...action.payload } };
        case 'SET_TRAVA_PALLET':
            return { ...state, travaPallet: { ...state.travaPallet, ...action.payload } };
        case 'SET_CHAPATEX':
            return { ...state, chapatex: { ...state.chapatex, ...action.payload } };

        case 'SET_QUEBRASOL':
            return { ...state, quebraSol: { ...state.quebraSol, ...action.payload } };
        case 'SET_SOM':
            return { ...state, som: { ...state.som, ...action.payload } };
        case 'SET_ACENDEDOR_CIGARRO':
            return { ...state, acendedorCigarro: { ...state.acendedorCigarro, ...action.payload } };
        case 'RESET':
            return initialStateFerramentas;
        default:
            return state;
    }
}
