import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { ConservacaoContext } from '../../Context/ConservacaoVault';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import RadioCardImg from '../../Components/Radio/RadioCardImg';
import { GlobalStyles } from '../../Styles/GlobalStyles';
import { GlobalContext } from '../../Context/GlobalVault';


function ConservacaoCheck() {
    const { dadosCheckConservacaoVeiculo } = useContext(ConservacaoContext);
    const { isCavalo } = useContext(GlobalContext)
    const navigation = useNavigation();




    function handlePress() {

        let checkValues = true;

        dadosCheckConservacaoVeiculo.forEach(v => {
            if (typeof v.state === 'object' && v.state !== null) {


                if (v.type === 'checkbox') {
                    checkValues = v.state.conforme === null ? false : checkValues;
                } else if (v.state.img === null || v.state.conforme === null) {
                    checkValues = false;
                }
            } else if (v.state === null) {
                checkValues = false;
            }
        });


        if (checkValues) {
            if (isCavalo) {
                navigation.navigate('Pneus');
            } else {
                navigation.navigate('Carroceria');
            }

        } else {
            Alert.alert('Atenção! Preencha todos os campos!')
        }

    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text variant="headlineLarge" style={GlobalStyles.pageTitle}>Conservacao</Text>
                {dadosCheckConservacaoVeiculo.map((item, index) => (
                    <RadioCardImg
                        key={index}
                        label={item.label}
                        state={item.state}
                        setState={item.setState}
                        type={item.type}
                    />
                ))}
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

export default ConservacaoCheck;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        gap: 4
    },
    button: {
        marginTop: 24,
        alignSelf: 'center',
    },
    title: {
        textAlign: 'center',
        marginBottom: 8
    },
    containerBtns: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        marginTop: 20
    },
});
