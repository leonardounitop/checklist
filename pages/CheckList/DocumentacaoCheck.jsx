import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { DocumentacaoContext } from '../../Context/DocumentacaoVault';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import RadioCardImg from '../../Components/Radio/RadioCardImg';
import { GlobalStyles } from '../../Styles/GlobalStyles';

function DocumentacaoCheck() {
    const { dadosCheckDocumentacao } = useContext(DocumentacaoContext);
    const navigation = useNavigation();

    function handlePress() {

        let checkValues = true;


        dadosCheckDocumentacao.forEach(v => {
            if (typeof v.state === 'object' && v.state !== null) {
                if (v.state.img === null || v.state.conforme === null) {
                    checkValues = false;
                }
            } else if (v.state === null) {
                checkValues = false;
            }
        });


        if (checkValues) {
            navigation.navigate('Ferramentas');
        } else {
            Alert.alert('Atenção! Preencha todos os campos!')
        }

    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text variant="headlineLarge" style={GlobalStyles.pageTitle}>Documentação</Text>

                {dadosCheckDocumentacao.map((item, index) => (
                    <RadioCardImg
                        key={index}
                        label={item.label}
                        type={item.type}
                        state={item.state}
                        setState={item.setState}
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

export default DocumentacaoCheck;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    button: {
        marginTop: 5,
        alignSelf: 'center',
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
    containerRadio: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    textLabel: {
        textAlign: 'center',
    }
});
