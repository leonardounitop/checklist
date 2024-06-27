import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { initialStateDocumentacao, reducerDocumentacao } from '../Reducers/reducerDocumentacao'
import { GlobalContext } from './GlobalVault';

export const DocumentacaoContext = createContext();

export function DocumentacaoVault({ children }) {
    const [state, dispatch] = useReducer(reducerDocumentacao, initialStateDocumentacao);
    const { tipoCheckList, dadosRecebimento } = useContext(GlobalContext);

    const setCrlv = useCallback((value) => dispatch({ type: 'SET_CRLV', payload: value }), [dispatch]);
    const setAet = useCallback((value) => dispatch({ type: 'SET_AET', payload: value }), [dispatch]);
    const setCertificadoTacografo = useCallback((value) => dispatch({ type: 'SET_CERTIFICADO_TACOGRAFO', payload: value }), [dispatch]);
    const setManual = useCallback((value) => dispatch({ type: 'SET_MANUAL', payload: value }), [dispatch]);
    const setPlacaLacre = useCallback((value) => dispatch({ type: 'SET_PLACA_LACRE', payload: value }), [dispatch]);

    const setTesteFrio = useCallback((value) => dispatch({ type: 'SET_TESTE_FRIO', payload: value }), [dispatch]);

    const dadosCheckDocumentacao = useMemo(() => {


        let camposDocumentacao = [
            { label: 'CRLV - Documento e Validade', type: 'checkbox', inputProps: { editable: false }, state: state.crlv, setState: setCrlv },
            { label: 'Manual do Veículo', type: 'checkbox', inputProps: {}, state: state.manual, setState: setManual },
            { label: 'Placa e Lacre', type: 'checkbox', inputProps: {}, state: state.placaLacre, setState: setPlacaLacre },
        ];

        if (tipoCheckList === 'checklist_thermoking') {
            // adicionar teste frio
            camposDocumentacao = camposDocumentacao.concat([
                { label: 'Teste Frio', type: 'checkbox', inputProps: {}, state: state.testeFrio, setState: setTesteFrio },
            ]);
        } else if (tipoCheckList === 'checklist_toco_truck_3_4') {
            camposDocumentacao = camposDocumentacao.concat([
                { label: 'AET - Documento e Validade', type: 'checkbox', inputProps: { editable: false }, state: state.aet, setState: setAet },
                { label: 'Val. Certificado Crono Tacógrafo', type: 'checkbox', inputProps: {}, state: state.certificadoTacografo, setState: setCertificadoTacografo },
            ]);
        }

        return camposDocumentacao;
    }, [state, tipoCheckList, dadosRecebimento]);




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
            setCrlv({ conforme: hasValue(dadosRecebimento[0]['3_a']) });
            setAet({ conforme: hasValue(dadosRecebimento[0]['3_b']) });
            setCertificadoTacografo({ conforme: hasValue(dadosRecebimento[0]['3_c']) });
            setManual({ conforme: hasValue(dadosRecebimento[0]['3_d']) });
            setPlacaLacre({ conforme: hasValue(dadosRecebimento[0]['3_e']) });
            setTesteFrio({ conforme: hasValue(dadosRecebimento[0]['3_f']) });
        }
    }, [dadosRecebimento])


    return (
        <DocumentacaoContext.Provider value={{ dadosCheckDocumentacao, state, dispatch }}>{children}</DocumentacaoContext.Provider>
    )
}

