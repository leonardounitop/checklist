import React, { useCallback } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Image } from 'expo-image';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

function ImgPicker({ state, setState }) {
    const pickImageAsync = useCallback(async () => {
        try {
            const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

            if (!permissionResult.granted) {
                Alert.alert("Permissão necessária", "Permissão para acessar a câmera é necessária!");
                return;
            }

            let result = await ImagePicker.launchCameraAsync({
                allowsEditing: false,
                quality: 0.5,
            });

            if (!result.canceled && result.assets && result.assets.length > 0) {
                const uri = result.assets[0].uri;
                // Armazena apenas o URI no estado
                setState({ img: { uri: uri, base64: uri } });
            }
        } catch (error) {
            Alert.alert("Erro ao capturar imagem", error.message);
            console.error('Error picking image:', error);
        }
    }, [setState]);

    return (
        <View style={styles.container}>
            <Button icon='camera' mode="contained" onPress={pickImageAsync}>Tirar Foto</Button>
            {state && state.img && state.img.uri && (
                <Image
                    style={styles.image}
                    source={{ uri: state.img.uri }}
                    cachePolicy={'memory-disk'}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
    },
    image: {
        width: '100%',
        height: 400,
        marginTop: 16,
        borderRadius: 10,
    },
});

export default ImgPicker;
