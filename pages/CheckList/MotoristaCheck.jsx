import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import Input from '../../Components/Input/Input';
import Signature from '../../Components/Signature/Signature';
import { useNavigation } from '@react-navigation/native';
import { Text, Button } from 'react-native-paper';
import RadioCardImg from '../../Components/Radio/RadioCardImg';
import { MotoristaContext } from '../../Context/MotoristaVault';
import { GlobalStyles } from '../../Styles/GlobalStyles';

function MotoristaCheck() {
    const { dadosCheckMotorista, state, dispatch } = useContext(MotoristaContext);
    const navigation = useNavigation();



    const handleSetState = (type, value) => {
        dispatch({ type, payload: value });
    };


    function handlePress() {


        let checkValues = true;


        dadosCheckMotorista.forEach(v => {
            if (typeof v.state === 'object' && v.state !== null) {
                if (v.state.img === null || v.state.conforme === null) {
                    checkValues = false;
                }
            } else if (v.state === null) {
                checkValues = false;
            }
        });


        if (checkValues && state.assMotorista && state.assResponsavel) {
            navigation.navigate('Documentacao');
        } else {
            Alert.alert('Atenção! Preencha todos os campos!')
        }

    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text variant="headlineLarge" style={GlobalStyles.pageTitle}>Motorista</Text>

                {dadosCheckMotorista.map((item, index) => {

                    return (
                        item.type === 'img/checkbox' || item.type === 'checkbox' ? (
                            <RadioCardImg
                                key={index}
                                label={item.label}
                                type={item.type}
                                state={item.state}
                                setState={item.setState}
                            />
                        ) : (
                            <View key={index}>
                                <Input
                                    label={item.label}
                                    value={item.state}
                                    {...item.inputProps}
                                    setState={item.setState}
                                />
                            </View>
                        )
                    )
                })}

                <View style={styles.containerAssinatura}>
                    <Signature assinatura='Ass. Motorista' state={state.assMotorista} setState={(value) => handleSetState('SET_ASS_MOTORISTA', value)} />
                    <Signature assinatura='Ass. Responsável' state={state.assResponsavel} setState={(value) => handleSetState('SET_ASS_RESPONSAVEL', value)} />
                </View>

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

export default MotoristaCheck;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    button: {
        marginTop: 24,
    },
    title: {
        textAlign: 'center',
        marginBottom: 8
    },
    containerAssinatura: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerBtns: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        marginTop: 20
    },
    textLabel: {
        textAlign: "center",
    },
});
