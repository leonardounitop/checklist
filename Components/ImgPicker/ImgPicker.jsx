import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

function ImgPicker({ state, setState }) {
    const pickImageAsync = useCallback(async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (!permissionResult.granted) {
            alert("Permissão para acessar é necessária!");
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 0.5,
            base64: true
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            const mimeType = result.assets[0].mimeType;
            const base64Image = await FileSystem.readAsStringAsync(uri, {
                encoding: FileSystem.EncodingType.Base64,
            });

            setState({ img: { base64: base64Image, uri: uri, mimeType: mimeType } });
        }
    }, [setState]);

    return (
        <View style={styles.container}>
            <Button icon='camera' mode="contained" onPress={pickImageAsync}>Tirar Foto</Button>

            {state && state.img && (
                <Image
                    style={styles.image}
                    source={state.img.uri}
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
