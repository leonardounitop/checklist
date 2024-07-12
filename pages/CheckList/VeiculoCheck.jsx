// VeiculoCheck.js
import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import Input from '../../Components/Input/Input';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { VeiculoContext } from '../../Context/VeiculooVault';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioCardImg from '../../Components/Radio/RadioCardImg';
import { GlobalContext } from '../../Context/GlobalVault';
import { GlobalStyles } from '../../Styles/GlobalStyles';


function VeiculoCheck() {
    const contextVeiculo = useContext(VeiculoContext);
    const { tipoCheckList, setDadosRecebimento, setPrimaryKey } = useContext(GlobalContext)
    const navigation = useNavigation();


    const [listFiliais, setListFiliais] = useState(null);
    const [filial, setFilial] = useState(null);
    const [dropOpen, setDropOpen] = useState(false);

    const handleChangeValueFiliais = (value) => {
        setFilial(value)

        if (value) {
            contextVeiculo.dispatch({ type: 'SET_FILIAL', payload: value })
        }
    };


    // Fetch para verificar entrega ou devolucao
    useEffect(() => {

        const { idPlaca } = contextVeiculo.state;


        const fetchData = async () => {
            try {
                const response = await fetch('https://homologacao.unitopconsultoria.com.br/AppCheckList/execute.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tipoConsulta: 'retornarEntregaDevolucao',
                        idVeiculo: idPlaca,
                        tipoChecklist: tipoCheckList,

                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();
                const obj = JSON.parse(json);



                if (obj.autentic == 'sucess') {
                    contextVeiculo.dispatch({ type: 'SET_ENTREGA_DEVOLUCAO', payload: obj.EntregaRecebimento })


                    const isRecebimento = obj.EntregaRecebimento === 'Recebimento';

                    if (isRecebimento) {

                        const responseRecebimento = await fetch('https://homologacao.unitopconsultoria.com.br/AppCheckList/execute.php', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                tipoConsulta: 'gerarDevolucao',
                                tipoChecklist: tipoCheckList,
                                tipo: obj.EntregaRecebimento,
                                idVeiculo: idPlaca,
                            })
                        });

                        const jsonRecebimento = JSON.parse(await responseRecebimento.json());

                        // console.log(jsonRecebimento);

                        if (jsonRecebimento.autentic === 'sucess') {
                            setDadosRecebimento(jsonRecebimento.Objecto);


                            setPrimaryKey(jsonRecebimento.PrimaryKey);
                        }

                    }

                }

            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        if (idPlaca && tipoCheckList) {
            fetchData();
        }
    }, []);

    // Fetch para o KM
    useEffect(() => {

        const { idPlaca } = contextVeiculo.state;

        const fetchData = async () => {
            try {
                const response = await fetch('https://homologacao.unitopconsultoria.com.br/AppCheckList/execute.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tipoConsulta: 'retornarKmVeiculo',
                        idVeiculo: idPlaca
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();
                const obj = JSON.parse(json);


                if (obj.autentic == 'sucess') {
                    contextVeiculo.dispatch({ type: 'SET_KM_TOTAL', payload: obj.km })

                }

            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        if (idPlaca) {
            fetchData();
        }
    }, []);

    // Fetch para as filiais
    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await fetch('https://homologacao.unitopconsultoria.com.br/AppCheckList/execute.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tipoConsulta: 'buscarFilial',
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();
                const obj = JSON.parse(json);


                if (obj.autentic == 'sucess') {
                    setListFiliais(obj.filiais);
                }

            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);





    function handlePress() {

        const { dadosCheckVeiculo, state } = contextVeiculo;
        let checkValues = true;

        dadosCheckVeiculo.forEach(v => {
            if (typeof v.state === 'object' && v.state !== null) {
                if (v.state.img === null) {
                    checkValues = false;
                }
            } else if (v.state === null) {
                checkValues = false;
            }
        });


        if (checkValues && state.filial) {
            navigation.navigate('Documentacao')
        } else {
            Alert.alert('Atenção! Preencha todos os campos!');
        }

    }


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text variant="headlineLarge" style={GlobalStyles.pageTitle}>Veículo</Text>
                {contextVeiculo.dadosCheckVeiculo.map((item, index) => {

                    if (item.type === 'img/checkbox') {
                        return <RadioCardImg
                            key={index}
                            label={item.label}
                            state={item.state}
                            setState={item.setState}
                            type={item.type}
                        />
                    }

                    return <View key={index}>
                        <Input
                            label={item.label}
                            value={item.state}
                            {...item.inputProps}
                            setState={item.setState}
                        />
                    </View>
                }
                )}


                {listFiliais ? <DropDownPicker
                    value={filial}
                    items={listFiliais}
                    open={dropOpen}
                    setValue={setFilial}
                    onChangeValue={handleChangeValueFiliais}
                    setOpen={setDropOpen}

                    searchable={true}
                    placeholder="Selecione a Filial"
                    searchPlaceholder="Digite a Filial"
                    style={{ marginVertical: 10 }}
                    listMode="MODAL" // Este modo facilita a navegação com muitas opções
                /> : <Text>Carregando...</Text>}


                <View style={styles.containerBtns}>
                    <Button mode="contained" onPress={() => navigation.goBack()} style={styles.button}>
                        Voltar
                    </Button>

                    <Button mode="contained" onPress={handlePress} style={styles.button}>
                        Continuar
                    </Button>
                </View>

            </View>
        </ScrollView>
    );
}

export default VeiculoCheck;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    button: {
        marginTop: 24,
        alignSelf: 'center',
    },
    title: {
        textAlign: 'center',
        marginBottom: 8
    }, containerBtns: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        marginTop: 20
    },
});
