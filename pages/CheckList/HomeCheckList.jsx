import React, { useContext, useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { Text, useTheme, Button, ActivityIndicator } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Container from '../../Components/Container/Container';
import { useNavigation } from '@react-navigation/native';
import { VeiculoContext } from '../../Context/VeiculooVault'
import { MotoristaContext } from '../../Context/MotoristaVault';
import { GlobalContext } from '../../Context/GlobalVault';
import { PneusContext } from '../../Context/PneusVault';
import { FerramentasContext } from '../../Context/FerramentasVault';
import { DocumentacaoContext } from '../../Context/DocumentacaoVault';
import { ConservacaoContext } from '../../Context/ConservacaoVault';
import { CarroceriaContext } from '../../Context/CarroceriaVault';
import { GlobalStyles } from '../../Styles/GlobalStyles';

function HomeCheckList() {

    const contextVeiculo = useContext(VeiculoContext)
    const contextMotorista = useContext(MotoristaContext);
    const contextPneu = useContext(PneusContext);
    const contextFerramentas = useContext(FerramentasContext);
    const contextDocumentacao = useContext(DocumentacaoContext);
    const contextConservacao = useContext(ConservacaoContext);
    const contextCarroceria = useContext(CarroceriaContext)


    const [loading, setLoading] = useState(null);



    function resetFields() {
        contextPneu.dispatch({ type: 'RESET' });
        contextMotorista.dispatch({ type: 'RESET' });
        contextVeiculo.dispatch({ type: 'RESET' });
        contextFerramentas.dispatch({ type: 'RESET' });
        contextDocumentacao.dispatch({ type: 'RESET' });
        contextConservacao.dispatch({ type: 'RESET' });
        contextCarroceria.dispatch({ type: 'RESET' });
    }


    const { setTipoCheckList, setNumeroEixosVeiculo, numeroEixosVeiculo, setIsCavalo } = useContext(GlobalContext);

    const [idPlaca, setIdPlaca] = useState(null);   // Armazenas o id do veiculo
    const [placaLabel, setPlacaLabel] = useState(''); //Armazenar o rótulo da placa selecionada
    const [listPlacas, setListPlacas] = useState(null); //Lista das placas

    const [dropOpenVeiculo, setDropOpenVeiculo] = useState(false);    // estado do dropdown
    const [dropOpenMotorista, setDropOpenMotorista] = useState(false);    // estado do dropdown
    // const [dropOpenCheckList, setDropOpenCheckList] = useState(false);    // estado do dropdown

    const [tipoVeiculo, setTipoVeiculo] = useState(null);
    const [checkList, setCheckList] = useState(null);
    const [listMotorista, setListMotorista] = useState(null);
    const [motoristaLabel, setMotoristaLabel] = useState(null);
    const [idMotorista, setIdMotorista] = useState(null);


    const navigation = useNavigation();



    const handleChangeValuePlaca = (value) => {
        resetFields();
        setCheckList(null);
        setTipoCheckList(null);
        setIdPlaca(value);
        const selectedPlaca = listPlacas.find(item => item.value === value);
        if (selectedPlaca) {
            contextVeiculo.dispatch({ type: 'SET_PLACA', payload: selectedPlaca.label });
            contextVeiculo.dispatch({ type: 'SET_IDPLACA', payload: selectedPlaca.value });
        }
        setPlacaLabel(selectedPlaca ? selectedPlaca.label : '');
    };

    const handleChangeValueMotorista = (value) => {
        setIdMotorista(value);
        const selectedMotorista = listMotorista.find(item => item.value === value);


        if (selectedMotorista) {
            contextMotorista.dispatch({ type: 'SET_NOME', payload: selectedMotorista.label })
            contextMotorista.dispatch({ type: 'SET_IDMOTORISTA', payload: selectedMotorista.value })
        }


        setMotoristaLabel(selectedMotorista ? selectedMotorista.label : '');
    };


    // Primeiro fetch para pegar a lista de placas
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://homologacao.unitopconsultoria.com.br/AppCheckList/execute.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ tipoConsulta: 'buscarVeiculos' })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();
                const obj = JSON.parse(json);

                if (obj.autentic == 'sucess')
                    setListPlacas(obj.veiculos);

            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);


    // verificar o tipo do veiculo e pegar o tipo da checklist
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch('https://homologacao.unitopconsultoria.com.br/AppCheckList/execute.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tipoConsulta: 'retornarTipoChecklists',
                        idVeiculo: idPlaca
                    })
                });

                const responseNumeroEixos = await fetch('https://homologacao.unitopconsultoria.com.br/AppCheckList/execute.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tipoConsulta: 'retornarNumeroEixos',
                        idVeiculo: idPlaca
                    })
                });

                if (!response.ok || !responseNumeroEixos.ok) {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Erro Fetch Tipo Checklist status: ${response.status}`);
                    } else if (!responseNumeroEixos.ok) {
                        throw new Error(`HTTP error! Erro Fetch numero Eixos status: ${responseNumeroEixos.status}`);
                    }
                }


                // Atualizando a quantidade de eixos do veiculo.
                const jsonNumeroEixos = await responseNumeroEixos.json();

                if ('coalesce' in jsonNumeroEixos[0]) {
                    setNumeroEixosVeiculo(jsonNumeroEixos[0].coalesce);
                }

                const json = await response.json();
                const obj = JSON.parse(json);

                if (obj.autentic === 'sucess') {
                    setTipoVeiculo(obj.Tipo)
                    contextVeiculo.dispatch({ type: 'SET_TIPO', payload: obj.Tipo || "Não Cadastrado" })


                    obj.Checklist.forEach(v => {
                        let formatarValor = '';

                        setIsCavalo(obj.isCavalo);

                        if (obj.isCavalo) {
                            formatarValor = 'Checklist Cavalo';

                        } else if (v === 'checklist_veiculo_leve') {

                            formatarValor = 'Checklist Veículo Leve';
                        } else if (v === 'checklist_toco_truck_3_4') {

                            formatarValor = 'Checklist Troco,Truck 3/4';
                        } else if (v === 'checklist_graneleiro') {

                            formatarValor = 'Checklist Graneleiro';
                        } else if (v === 'checklist_carretabau') {

                            formatarValor = 'Checklist Carreta Baú';
                        } else if (v === 'checklist_thermoking') {

                            formatarValor = 'Checklist Thermoking';
                        } else if (v === 'checklist_sider') {

                            formatarValor = 'Checklist Sider';
                        }


                        setTipoCheckList(v);
                        setCheckList(formatarValor);
                    });

                }

            } catch (error) {
                console.error('Fetch error:', error);
            } finally {
                setLoading(false);
            }
        };

        if (idPlaca) {
            fetchData();
        }
    }, [idPlaca]);



    // retornar motoristas
    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch('https://homologacao.unitopconsultoria.com.br/AppCheckList/execute.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tipoConsulta: 'buscarMotoristas',
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();
                const obj = JSON.parse(json);


                if (obj.autentic === 'sucess')
                    setListMotorista(obj.motoristas)

            } catch (error) {
                console.error('Fetch error retornar motoristas:', error);
            }
        };


        fetchData();

    }, []);


    function handlePress() {


        if (idPlaca && placaLabel && motoristaLabel && idMotorista && checkList && numeroEixosVeiculo) {
            navigation.navigate('Veiculo');
        } else {
            Alert.alert('Atenção! Escolha todas informações!');
        }
    }

    return (
        <Container>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={GlobalStyles.title}>Escolha uma placa</Text>


                {listPlacas ? <DropDownPicker
                    value={idPlaca}
                    items={listPlacas}
                    open={dropOpenVeiculo}
                    setValue={setIdPlaca}
                    onChangeValue={handleChangeValuePlaca}
                    setOpen={setDropOpenVeiculo}
                    style={{ marginBottom: 10 }}
                    searchable={true}
                    placeholder="Selecione a placa"
                    searchPlaceholder="Digite a placa"
                    listMode="MODAL" // Este modo facilita a navegação com muitas opções
                /> : <Text>Carregando...</Text>}




                <Text style={GlobalStyles.title}>Motorista</Text>
                {listMotorista ? <DropDownPicker
                    value={idMotorista}
                    items={listMotorista}
                    open={dropOpenMotorista}
                    setValue={setIdMotorista}
                    onChangeValue={handleChangeValueMotorista}
                    setOpen={setDropOpenMotorista}
                    searchable={true}
                    placeholder="Selecione o motorista"
                    searchPlaceholder="Digite o nome"
                    style={{ marginBottom: 10 }}
                    listMode="MODAL" // Este modo facilita a navegação com muitas opções
                /> : <Text>Carregando...</Text>}


                <Text style={GlobalStyles.title}>Tipo CheckList </Text>
                <Text style={styles.textCheck}>{loading ? 'Carregando...' : checkList ? `${checkList}. Nº Eixos: ${numeroEixosVeiculo}` : 'Informe uma placa para carregar a checklist'}</Text>


                <Button
                    mode="contained"
                    onPress={handlePress}
                    style={styles.button}
                    loading={loading}
                    disabled={loading}

                >
                    Continuar
                </Button>
            </ScrollView>
        </Container>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        padding: 20,
        flexGrow: 1,
        justifyContent: 'center',
    },
    pickerContainer: {
        width: '100%',
    },
    picker: {
        width: '100%',
        backgroundColor: '#f0f0f0',
        height: 50,
    },
    pickerItem: {
        height: 50,
        color: '#333',
    }, text: {
        fontSize: 20,
        paddingVertical: 14,
        textAlign: `left`
    }, button: {
        marginTop: 20
    }, containerPlacaTipo: {
        flexDirection: "row"
    }, textCheck: {
        fontSize: 16,
    }
});

export default HomeCheckList;
