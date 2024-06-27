import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { FerramentasContext } from '../../Context/FerramentasVault';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import RadioCardImg from '../../Components/Radio/RadioCardImg';

function FerramentasCheck() {
    const { dadosCheckFerramentas } = useContext(FerramentasContext);
    const navigation = useNavigation();

    function handlePress() {

        let checkValues = true;


        dadosCheckFerramentas.forEach(v => {
            if (typeof v.state === 'object' && v.state !== null) {
                if (v.state.img === null || v.state.conforme === null) {
                    checkValues = false;
                }
            } else if (v.state === null) {
                checkValues = false;
            }
        });


        if (checkValues) {
            navigation.navigate('Conservacao');
        } else {
            Alert.alert('Atenção! Preencha todos os campos!')
        }

    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text variant="headlineLarge" style={styles.title}>Ferramentas</Text>
                {dadosCheckFerramentas.map((item, index) => (
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

export default FerramentasCheck;

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
    containerBtns: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
    },
});
