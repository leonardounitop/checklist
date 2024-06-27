import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Button, TextInput, useTheme, Text } from 'react-native-paper';
import { GlobalContext } from '../../Context/GlobalVault';
import { useNavigation } from '@react-navigation/native';
import { MotoristaContext } from '../../Context/MotoristaVault';

function Login() {

    const [usuario, setUsuario] = useState(null);
    const [senha, setSenha] = useState(null);
    const [loading, setLoading] = useState(false);
    const { setIdUsuario, setNomeUsuario } = useContext(GlobalContext);
    const { setResponsavel } = useContext(MotoristaContext)
    const navigation = useNavigation();


    const theme = useTheme();


    async function handleLogin() {

        if (usuario && senha) {
            try {
                setLoading(true);

                const response = await fetch('https://homologacao.unitopconsultoria.com.br/AppCheckList/execute.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        tipoConsulta: 'login',
                        user: usuario,
                        pass: senha
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();
                const obj = JSON.parse(json);


                if (obj.autentic == 'sucess') {
                    setIdUsuario(obj.idUser);
                    setNomeUsuario(obj.name);
                    setResponsavel(obj.name);
                    navigation.navigate('Home');
                } else {
                    Alert.alert('Usuário ou senha incorreto!');
                }

            } catch (error) {
                console.error('Fetch error:', error);
            } finally {
                setLoading(false);
            }
        } else {
            Alert.alert('Preencha os campos');
        }


    }

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: theme.colors.primary }]}>Login Checklist </Text>
            <View style={styles.containerInput}>
                <TextInput
                    label="Usuário"
                    value={usuario}
                    mode="outlined"
                    onChangeText={text => setUsuario(text)}
                />

                <TextInput
                    label="Senha"
                    value={senha}
                    mode="outlined"
                    secureTextEntry
                    onChangeText={text => setSenha(text)}
                />
            </View>
            <Button icon='login' mode="contained" onPress={handleLogin} loading={loading} >
                Entrar
            </Button>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    containerInput: {
        gap: 4,
        marginBottom: 20
    },
    container: {
        flex: 1,
        padding: 20,
    }, title: {
        textAlign: 'center',
        fontSize: 32,
        marginBottom: 20
    }
})