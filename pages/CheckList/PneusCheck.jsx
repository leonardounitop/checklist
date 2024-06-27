import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { PneusContext } from '../../Context/PneusVault';
import RadioCardImg from '../../Components/Radio/RadioCardImg';
import { MotoristaContext } from '../../Context/MotoristaVault';
import { VeiculoContext } from '../../Context/VeiculooVault';
import { FerramentasContext } from '../../Context/FerramentasVault';
import { DocumentacaoContext } from '../../Context/DocumentacaoVault'
import { ConservacaoContext } from '../../Context/ConservacaoVault'
import { CarroceriaContext } from '../../Context/CarroceriaVault'
import { GlobalContext } from '../../Context/GlobalVault';



function PneusCheck() {

    const [loading, setLoading] = useState(false);

    const contextPneu = useContext(PneusContext);
    const contextMotorista = useContext(MotoristaContext);
    const contextVeiculo = useContext(VeiculoContext);
    const contextFerramentas = useContext(FerramentasContext);
    const contextDocumentacao = useContext(DocumentacaoContext);
    const contextConservacao = useContext(ConservacaoContext);

    const contextCarroceria = useContext(CarroceriaContext)
    const contextGlobal = useContext(GlobalContext);
    const { resetAllStates } = useContext(GlobalContext);

    const navigation = useNavigation();


    // Funcoes para limpar a base64
    const isBase64 = (value) => {

        if (typeof value === 'object' && value != null) {

            if (value.base64) {
                return value.base64;
            }

            if (value.uri) {
                const img = value.uri.replace('https://carvalima.unitopconsultoria.com.br/', '');
                return img;
            }
        }
        return null;
    };

    const removeImgType = (value) => value ? value.replace('data:image/png;base64,', '') : null;
    const isBool = (value) => value ? `true` : `false`;





    const fetchData = async () => {
        console.log('enviando...');
        try {
            setLoading(true);
            const response = await fetch('https://homologacao.unitopconsultoria.com.br/AppCheckList/execute.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tipoConsulta: 'onSave',
                    tipoChecklist: contextGlobal.tipoCheckList,
                    primaryKey: contextGlobal.primaryKey,
                    idUser: contextGlobal.idUsuario,
                    // idUser: 1,
                    '1_a': contextVeiculo.state.entregaDevolucao,
                    '1_b': contextVeiculo.state.idPlaca,
                    '1_c': contextVeiculo.state.tipo,
                    '1_d': contextVeiculo.state.data,
                    '1_e': contextVeiculo.state.filial,
                    '1_f': contextVeiculo.state.kmTotal,
                    '1_g': contextVeiculo.state.horimetro,
                    '1_h': isBase64(contextVeiculo.state.horimetroImagem.img),
                    '1_i': isBase64(contextVeiculo.state.numThermokingImagem.img),
                    '2_a': contextMotorista.state.idMotorista,
                    '2_b': isBool(contextMotorista.state.validacao.conforme),
                    '2_c': isBase64(contextMotorista.state.validacao.img),
                    '2_d': isBool(contextMotorista.state.termo.conforme),
                    '2_e': contextMotorista.state.responsavel,
                    '2_f': contextMotorista.state.observacao,
                    '2_g': removeImgType(contextMotorista.state.assMotorista),
                    '2_h': removeImgType(contextMotorista.state.assResponsavel),

                    '3_a': isBool(contextDocumentacao.state.crlv.conforme),
                    '3_b': isBool(contextDocumentacao.state.aet.conforme),
                    '3_c': isBool(contextDocumentacao.state.certificadoTacografo.conforme),
                    '3_d': isBool(contextDocumentacao.state.manual.conforme),
                    '3_e': isBool(contextDocumentacao.state.placaLacre.conforme),
                    '3_f': isBool(contextDocumentacao.state.testeFrio.conforme),

                    '4_a': isBool(contextFerramentas.state.extintor.conforme),
                    '4_b': isBool(contextFerramentas.state.macacoHidraulico.conforme),
                    '4_c': isBool(contextFerramentas.state.chaveRoda.conforme),
                    '4_d': isBool(contextFerramentas.state.trianguloSinalizacao.conforme),
                    '4_e': isBool(contextFerramentas.state.antenasPX.conforme),
                    '4_f': isBool(contextFerramentas.state.radioPX.conforme),
                    '4_g': isBool(contextFerramentas.state.jogoChinil.conforme),
                    '4_h': isBool(contextFerramentas.state.correnteEstepe.conforme),
                    '4_i': isBool(contextFerramentas.state.corote.conforme),
                    '4_j': isBool(contextFerramentas.state.lonaCobertura.conforme),
                    '4_k': isBool(contextFerramentas.state.tabletRastreamento.conforme),
                    '4_l': isBool(contextFerramentas.state.cordas.conforme),
                    '4_m': isBool(contextFerramentas.state.cintas.conforme),
                    '4_n': isBool(contextFerramentas.state.catracas.conforme),
                    '4_o': isBool(contextFerramentas.state.travaPallet.conforme),
                    '4_p': isBool(contextFerramentas.state.cones.conforme),
                    '4_q': isBool(contextFerramentas.state.chapatex.conforme),
                    '4_r': isBool(contextFerramentas.state.quebraSol.conforme),
                    '4_s': isBool(contextFerramentas.state.som.conforme),
                    '4_t': isBool(contextFerramentas.state.trianguloSinalizacao.conforme),
                    '4_u': isBool(contextFerramentas.state.acendedorCigarro.conforme),

                    '5_a': isBool(contextConservacao.state.parachoqueDianteiro.conforme),
                    '5_b': isBase64(contextConservacao.state.parachoqueDianteiro.img),
                    '5_c': contextConservacao.state.parachoqueDianteiro.obs,
                    '5_d': isBool(contextConservacao.state.parachoqueTraseiro.conforme),
                    '5_e': isBase64(contextConservacao.state.parachoqueTraseiro.img),
                    '5_f': contextConservacao.state.parachoqueTraseiro.obs,
                    '5_g': isBool(contextConservacao.state.protetorLateralEsquerdo.conforme),
                    '5_h': isBase64(contextConservacao.state.protetorLateralEsquerdo.img),
                    '5_i': contextConservacao.state.protetorLateralEsquerdo.obs,
                    '5_j': isBool(contextConservacao.state.protetorLateralDireito.conforme),
                    '5_k': isBase64(contextConservacao.state.protetorLateralDireito.img),
                    '5_l': contextConservacao.state.protetorLateralDireito.obs,
                    '5_m': isBool(contextConservacao.state.parabarroDireito.conforme),
                    '5_n': isBase64(contextConservacao.state.parabarroDireito.img),
                    '5_o': contextConservacao.state.parabarroDireito.os,
                    '5_p': isBool(contextConservacao.state.parabarroEsquerdo.conforme),
                    '5_q': isBase64(contextConservacao.state.parabarroEsquerdo.img),
                    '5_r': contextConservacao.state.parabarroEsquerdo.os,
                    '5_s': isBool(contextConservacao.state.paralamaDireito.conforme),
                    '5_t': isBase64(contextConservacao.state.paralamaDireito.img),
                    '5_u': contextConservacao.state.paralamaDireito.os,
                    '5_v': isBool(contextConservacao.state.paralamaEsquerdo.conforme),
                    '5_w': isBase64(contextConservacao.state.paralamaEsquerdo.img),
                    '5_x': contextConservacao.state.paralamaEsquerdo.os,
                    '5_y': isBool(contextConservacao.state.retrovisorExternoDireito.conforme),
                    '5_z': isBase64(contextConservacao.state.retrovisorExternoDireito.img),
                    '5_aa': contextConservacao.state.retrovisorExternoDireito.os,
                    '5_ab': isBool(contextConservacao.state.retrovisorExternoEsquerdo.conforme),
                    '5_ac': isBase64(contextConservacao.state.retrovisorExternoEsquerdo.img),
                    '5_ad': contextConservacao.state.retrovisorExternoEsquerdo.os,
                    '5_ae': isBool(contextConservacao.state.farois.conforme),
                    '5_af': isBase64(contextConservacao.state.farois.img),
                    '5_ag': contextConservacao.state.farois.os,
                    '5_ah': isBool(contextConservacao.state.latariaCapo.conforme),
                    '5_ai': isBase64(contextConservacao.state.latariaCapo.img),
                    '5_aj': contextConservacao.state.latariaCapo.os,
                    '5_ak': isBool(contextConservacao.state.lentesLanternasTraseiras.conforme),
                    '5_al': isBase64(contextConservacao.state.lentesLanternasTraseiras.img),
                    '5_am': contextConservacao.state.lentesLanternasTraseiras.os,
                    '5_an': isBool(contextConservacao.state.latariaPortaDireita.conforme),
                    '5_ao': isBase64(contextConservacao.state.latariaPortaDireita.img),
                    '5_ap': contextConservacao.state.latariaPortaDireita.os,
                    '5_aq': isBool(contextConservacao.state.latariaPortaEsquerda.conforme),
                    '5_ar': isBase64(contextConservacao.state.latariaPortaEsquerda.img),
                    '5_as': contextConservacao.state.latariaPortaEsquerda.os,
                    '5_at': isBool(contextConservacao.state.tacografo.conforme),
                    '5_au': isBase64(contextConservacao.state.tacografo.img),
                    '5_av': contextConservacao.state.tacografo.os,
                    '5_aw': isBool(contextConservacao.state.painelInstrumentos.conforme),
                    '5_ax': isBase64(contextConservacao.state.painelInstrumentos.img),
                    '5_ay': contextConservacao.state.painelInstrumentos.os,
                    '5_az': isBool(contextConservacao.state.caixaCozinha.conforme),
                    '5_aaa': isBase64(contextConservacao.state.caixaCozinha.img),
                    '5_aab': contextConservacao.state.caixaCozinha.os,
                    '5_aac': isBool(contextConservacao.state.parabrisa.conforme),
                    '5_aad': isBase64(contextConservacao.state.parabrisa.img),
                    '5_aae': contextConservacao.state.parabrisa.os,
                    '5_aaf': isBool(contextConservacao.state.aerofolio.conforme),
                    '5_aag': isBase64(contextConservacao.state.aerofolio.img),
                    '5_aah': contextConservacao.state.aerofolio.os,
                    '5_aaf': isBool(contextConservacao.state.aerofolio.conforme),
                    '5_aag': isBase64(contextConservacao.state.aerofolio.img),
                    '5_aah': contextConservacao.state.aerofolio.os,
                    '5_aai': isBool(contextConservacao.state.nivelAgua.conforme),
                    '5_aaj': isBool(contextConservacao.state.vazamentoAgua.conforme),
                    '5_aak': isBool(contextConservacao.state.nivelOleoMotor.conforme),
                    '5_aal': isBool(contextConservacao.state.vazamentoOleoMotor.conforme),
                    '5_aam': isBool(contextConservacao.state.avariaLataria.conforme),
                    '5_aan': isBase64(contextConservacao.state.avariaLataria.img),
                    '5_aao': contextConservacao.state.avariaLataria.obs,
                    '5_aap': isBool(contextConservacao.state.consertarBancos.conforme),
                    '5_aaq': isBase64(contextConservacao.state.consertarBancos.img),
                    '5_aar': contextConservacao.state.consertarBancos.obs,


                    '6_a': isBool(contextCarroceria.state.frenteInterno.conforme),
                    '6_b': isBase64(contextCarroceria.state.frenteInterno.img),
                    '6_c': contextCarroceria.state.frenteInterno.obs,
                    '6_d': isBool(contextCarroceria.state.traseiroInterno.conforme),
                    '6_e': isBase64(contextCarroceria.state.traseiroInterno.img),
                    '6_f': contextCarroceria.state.traseiroInterno.obs,
                    '6_g': isBool(contextCarroceria.state.ladoDireitoInterno.conforme),
                    '6_h': isBase64(contextCarroceria.state.ladoDireitoInterno.img),
                    '6_i': contextCarroceria.state.ladoDireitoInterno.obs,
                    '6_j': isBool(contextCarroceria.state.ladoEsquerdoInterno.conforme),
                    '6_k': isBase64(contextCarroceria.state.ladoEsquerdoInterno.img),
                    '6_l': contextCarroceria.state.ladoEsquerdoInterno.obs,
                    '6_m': isBool(contextCarroceria.state.tetoInterno.conforme),
                    '6_n': isBase64(contextCarroceria.state.tetoInterno.img),
                    '6_o': contextCarroceria.state.tetoInterno.obs,
                    '6_p': isBool(contextCarroceria.state.frenteExterno.conforme),
                    '6_q': isBase64(contextCarroceria.state.frenteExterno.img),
                    '6_r': contextCarroceria.state.frenteExterno.obs,
                    '6_s': isBool(contextCarroceria.state.traseiroExterno.conforme),
                    '6_t': isBase64(contextCarroceria.state.traseiroExterno.img),
                    '6_u': contextCarroceria.state.traseiroExterno.obs,
                    '6_v': isBool(contextCarroceria.state.ladoDireitoExterno.conforme),
                    '6_w': isBase64(contextCarroceria.state.ladoDireitoExterno.img),
                    '6_x': contextCarroceria.state.ladoDireitoExterno.obs,
                    '6_y': isBool(contextCarroceria.state.ladoEsquerdoExterno.conforme),
                    '6_z': isBase64(contextCarroceria.state.ladoEsquerdoExterno.img),
                    '6_aa': contextCarroceria.state.ladoEsquerdoExterno.obs,
                    '6_y': isBool(contextCarroceria.state.ladoEsquerdoExterno.conforme),
                    '6_z': isBase64(contextCarroceria.state.ladoEsquerdoExterno.img),
                    '6_aa': contextCarroceria.state.ladoEsquerdoExterno.obs,
                    '6_ab': contextCarroceria.state.ganchos.conforme,
                    '6_ac': isBase64(contextCarroceria.state.ganchos.img),
                    '6_ad': contextCarroceria.state.tendal.conforme,
                    '6_ae': isBase64(contextCarroceria.state.tendal.img),
                    '6_af': contextCarroceria.state.cortina.conforme,
                    '6_ag': isBase64(contextCarroceria.state.cortina.img),
                    '6_ah': isBool(contextCarroceria.state.statusPreventiva.conforme),
                    '6_ai': isBool(contextCarroceria.state.partidaVeiculo.conforme),
                    '6_aj': isBool(contextCarroceria.state.esguichoParabrisa.conforme),
                    '6_ak': isBool(contextCarroceria.state.limpadoresParaBrisa.conforme),
                    '6_al': isBool(contextCarroceria.state.buzina.conforme),
                    '6_am': isBool(contextCarroceria.state.setasDianteira.conforme),
                    '6_an': isBool(contextCarroceria.state.setasTraseiras.conforme),
                    '6_ao': isBool(contextCarroceria.state.farolAltoBaixo.conforme),
                    '6_ap': isBool(contextCarroceria.state.verificarRe.conforme),
                    '6_aq': isBool(contextCarroceria.state.piscaDianteira.conforme),
                    '6_ar': isBool(contextCarroceria.state.piscaTraseira.conforme),
                    '6_as': isBool(contextCarroceria.state.luzFreio.conforme),
                    '6_at': isBool(contextCarroceria.state.luzPlaca.conforme),
                    '6_au': isBool(contextCarroceria.state.iluminacaoPainel.conforme),
                    '6_av': isBool(contextCarroceria.state.vidroEletrico.conforme),
                    '6_aw': isBool(contextCarroceria.state.travaEletrica.conforme),

                    '7_a': contextPneu.state.primeiroDE.conforme,
                    '7_b': isBase64(contextPneu.state.primeiroDE.img),
                    '7_c': contextPneu.state.primeiroDI.conforme,
                    '7_d': isBase64(contextPneu.state.primeiroDI.img),
                    '7_e': contextPneu.state.primeiroEE.conforme,
                    '7_f': isBase64(contextPneu.state.primeiroEE.img),
                    '7_g': contextPneu.state.primeiroEI.conforme,
                    '7_h': isBase64(contextPneu.state.primeiroEI.img),
                    '7_i': contextPneu.state.segundoDE.conforme,
                    '7_j': isBase64(contextPneu.state.segundoDE.img),
                    '7_k': contextPneu.state.segundoDI.conforme,
                    '7_l': isBase64(contextPneu.state.segundoDI.img),
                    '7_m': contextPneu.state.segundoEE.conforme,
                    '7_n': isBase64(contextPneu.state.segundoEE.img),
                    '7_o': contextPneu.state.segundoEI.conforme,
                    '7_p': isBase64(contextPneu.state.segundoEI.img),
                    '7_q': contextPneu.state.estepeUm.conforme,
                    '7_r': isBase64(contextPneu.state.estepeUm.img),
                    '7_s': contextPneu.state.estepeDois.conforme,
                    '7_t': isBase64(contextPneu.state.estepeDois.img),
                    '7_u': contextPneu.state.terceiroDI.conforme,
                    '7_v': isBase64(contextPneu.state.terceiroDI.img),
                    '7_w': contextPneu.state.terceiroDE.conforme,
                    '7_x': isBase64(contextPneu.state.terceiroDE.img),
                    '7_y': contextPneu.state.terceiroEI.conforme,
                    '7_z': isBase64(contextPneu.state.terceiroEI.img),
                    '7_aa': contextPneu.state.terceiroEE.conforme,
                    '7_ab': isBase64(contextPneu.state.terceiroEE.img),

                    '7_ac': isBool(contextPneu.state.primeiroLeveD.conforme),
                    '7_ad': isBase64(contextPneu.state.primeiroLeveD.img),
                    '7_ae': isBool(contextPneu.state.primeiroLeveE.conforme),
                    '7_af': isBase64(contextPneu.state.primeiroLeveE.img),
                    '7_ag': isBool(contextPneu.state.segundoLeveD.conforme),
                    '7_ah': isBase64(contextPneu.state.segundoLeveD.img),
                    '7_ai': isBool(contextPneu.state.segundoLeveE.conforme),
                    '7_aj': isBase64(contextPneu.state.segundoLeveE.img),
                    '7_ak': isBool(contextPneu.state.leveEstepeUm.conforme),
                    '7_al': isBase64(contextPneu.state.leveEstepeUm.img),

                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }


            const json = await response.json();
            const obj = JSON.parse(json);


            if (obj.autentic === 'sucess') {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    })
                );
                resetAllStates();
                Alert.alert('Checklist Finalizada com Sucesso!');

            } else {
                Alert.alert('Ocorreu um erro!');
            }



        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setLoading(false);
        }
    };












    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text variant="headlineLarge" style={styles.title}>Pneus</Text>
                {contextPneu.dadosCheckPneus.map((item, index) => {
                    const { label, state, setState, type } = item;

                    return (
                        <RadioCardImg
                            key={index}
                            label={label}
                            state={state}
                            setState={setState}
                            type={type}
                        />
                    );
                })}
                <View style={styles.containerBtns}>

                    <Button mode="contained" onPress={() => navigation.goBack()} style={styles.button}>
                        Voltar
                    </Button>

                    <Button
                        mode="contained" onPress={fetchData}
                        style={styles.button}
                        loading={loading}
                        disabled={loading}
                    >
                        Finalizar CheckList
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
}

export default PneusCheck;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        gap: 4,
    },
    button: {
        marginTop: 24,
        alignSelf: 'center',
    },
    title: {
        textAlign: 'center',
    },
    textLabel: {
        textAlign: "center",
        marginBottom: 10
    },
    containerRadio: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    }, containerBtns: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        marginTop: 20
    }
});
