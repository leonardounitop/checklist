import React, { useContext, useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { Text, useTheme, Button } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Container from '../../Components/Container/Container';
import { useNavigation } from '@react-navigation/native';
import { VeiculoContext } from '../../Context/VeiculooVault'
import { MotoristaContext } from '../../Context/MotoristaVault';
import { GlobalContext } from '../../Context/GlobalVault';

function HomeCheckList() {

    const contextVeiculo = useContext(VeiculoContext)
    const contextMotorista = useContext(MotoristaContext);
    const { setTipoCheckList } = useContext(GlobalContext);

    const [idPlaca, setIdPlaca] = useState(null);   // Armazenas o id do veiculo
    const [placaLabel, setPlacaLabel] = useState(''); //Armazenar o rótulo da placa selecionada
    const [listPlacas, setListPlacas] = useState(null); //Lista das placas

    const [dropOpenVeiculo, setDropOpenVeiculo] = useState(false);    // estado do dropdown
    const [dropOpenMotorista, setDropOpenMotorista] = useState(false);    // estado do dropdown
    const [dropOpenCheckList, setDropOpenCheckList] = useState(false);    // estado do dropdown

    const [tipoVeiculo, setTipoVeiculo] = useState(null);

    const [listMotorista, setListMotorista] = useState(null);
    const [motoristaLabel, setMotoristaLabel] = useState(null);
    const [idMotorista, setIdMotorista] = useState(null);


    const [listCheckListType, setListCheckListType] = useState(null);
    const [checkList, setCheckList] = useState(null);


    const navigation = useNavigation();


    const theme = useTheme();



    const handleChangeValuePlaca = (value) => {
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

    const handleChangeValueCheckList = (value) => {
        setCheckList(value);

        if (value) {
            setTipoCheckList(value);
        }
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
            try {
                const response = await fetch('https://homologacao.unitopconsultoria.com.br/AppCheckList/execute.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tipoConsulta: 'retornarTipoChecklists',
                        idVeiculo: idPlaca
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();
                const obj = JSON.parse(json);


                if (obj.autentic === 'sucess') {
                    setTipoVeiculo(obj.Tipo)
                    contextVeiculo.dispatch({ type: 'SET_TIPO', payload: obj.Tipo || 'Leve' })


                    const objListCheck = [];
                    obj.Checklist.forEach(v => {
                        let formatarValor = '';

                        if (v === 'checklist_veiculo_leve') {
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


                        objListCheck.push({ label: formatarValor, value: v })
                    });
                    setListCheckListType(objListCheck);

                }

            } catch (error) {
                console.error('Fetch error:', error);
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



        if (idPlaca && placaLabel && motoristaLabel && idMotorista && checkList) {
            navigation.navigate('Veiculo')
        } else {
            Alert.alert('Atenção! Escolha todas informações!');
        }
    }

    return (
        <Container>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={[styles.title, { color: theme.colors.primary }]}>Escolha uma placa</Text>
                <View >


                    {listPlacas ? <DropDownPicker
                        value={idPlaca}
                        items={listPlacas}
                        open={dropOpenVeiculo}
                        setValue={setIdPlaca}
                        onChangeValue={handleChangeValuePlaca}
                        setOpen={setDropOpenVeiculo}

                        searchable={true}
                        placeholder="Selecione a placa"
                        searchPlaceholder="Digite a placa"
                        style={{ marginBottom: 10 }}
                        listMode="MODAL" // Este modo facilita a navegação com muitas opções
                    /> : <Text>Carregando...</Text>}


                </View>
                <Text style={styles.text}>Tipo veiculo: {tipoVeiculo}</Text>

                <Text style={[styles.title, { color: theme.colors.primary }]}>Motorista</Text>
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


                <Text style={[styles.title, { color: theme.colors.primary }]}>Tipo CheckList</Text>

                {listCheckListType ? <DropDownPicker
                    value={checkList}
                    items={listCheckListType}
                    open={dropOpenCheckList}
                    setValue={setCheckList}
                    onChangeValue={handleChangeValueCheckList}
                    setOpen={setDropOpenCheckList}

                    searchable={true}
                    placeholder="Selecione o tipo da CheckList"
                    searchPlaceholder="Digite o nome"
                    style={{ marginBottom: 10 }}
                    listMode="MODAL" // Este modo facilita a navegação com muitas opções
                /> : ''}

                <Button mode="contained" onPress={handlePress} style={styles.button}>
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
    title: {
        fontSize: 20,
        marginBottom: 20,
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
        paddingVertical: 14
    }, button: {
        marginTop: 20
    }
});

export default HomeCheckList;
