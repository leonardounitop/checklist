import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { PneusContext } from '../../Context/PneusVault';
import RadioCardImg from '../../Components/Radio/RadioCardImg';

import { GlobalStyles } from '../../Styles/GlobalStyles';


function PneusCheck() {


    const contextPneu = useContext(PneusContext);
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text variant="headlineLarge" style={GlobalStyles.pageTitle}>Pneus</Text>
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
                        mode="contained" onPress={() => navigation.navigate('Motorista')}
                        style={styles.button}

                    >
                        Continuar
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
