import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { CarroceriaContext } from '../../Context/CarroceriaVault';
import RadioCardImg from '../../Components/Radio/RadioCardImg';
import { GlobalStyles } from '../../Styles/GlobalStyles';


function ConservacaoCarroceriaCheck() {
    const { dadosCheckConservacaoCarroceria } = useContext(CarroceriaContext);


    const navigation = useNavigation();

    function handlePress() {

        let checkValues = true;

        dadosCheckConservacaoCarroceria.forEach(v => {
            if (typeof v.state === 'object' && v.state !== null) {
                if (v.type === 'checkbox') {
                    checkValues = v.state.conforme === null ? false : true;
                } else if (v.state.img === null || v.state.conforme === null) {
                    checkValues = false;
                }
            } else if (v.state === null) {
                checkValues = false;
            }
        });


        if (checkValues) {
            navigation.navigate('Pneus');
        } else {
            Alert.alert('Atenção! Preencha todos os campos!')
        }

    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text variant="headlineLarge" style={GlobalStyles.pageTitle}>Carroceria</Text>
                {dadosCheckConservacaoCarroceria.map((item, index) => (
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

export default ConservacaoCarroceriaCheck;

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
        marginBottom: 8,
    },
    textLabel: {
        textAlign: "center",
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
    },

});
