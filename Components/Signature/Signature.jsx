import React, { useRef, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import SignatureCanvas from 'react-native-signature-canvas';
import { Modal, Portal, Text, Button } from 'react-native-paper';

function Signature({ assinatura, setState, state }) {
    const signatureRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 10, margin: 10, borderRadius: 10 };

    const handleSignature = (signature) => {


        setState(signature);
        hideModal(); // Esconder modal após salvar
    };

    const handleClear = () => {
        setState(null);
        signatureRef.current.clearSignature();
    };

    const handleConfirm = () => {
        signatureRef.current.readSignature();
    };

    return (
        <View style={styles.container}>
            <Button
                icon={state ? 'check-bold' : 'alert-circle-outline'}
                mode="contained"
                onPress={showModal}
                style={{ backgroundColor: state ? '#15803d' : '#ef4444' }}>
                {assinatura}
            </Button>

            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Text style={styles.modalTitle}>Assine aqui</Text>
                    <View style={styles.signatureContainer}>
                        <SignatureCanvas
                            key={state ? 1 : 0} // Força a recriação do componente quando `state` muda
                            ref={signatureRef}
                            onOK={handleSignature}
                            onEmpty={() => { Alert.alert('A assinatura está vazia!') }}
                            descriptionText="Assine aqui"
                            clearText="Limpar"
                            confirmText="Confirmar"
                            dataURL={state}
                            webStyle={`.m-signature-pad--footer { display: none; margin: 0px; }`}
                        />
                    </View>
                    <Button mode="contained" onPress={handleClear} style={styles.button}>
                        Limpar
                    </Button>
                    <Button mode="contained" onPress={handleConfirm} style={styles.button}>
                        Salvar
                    </Button>
                </Modal>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        alignItems: 'center'
    },
    button: {
        marginTop: 12,
    },
    modalTitle: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    signatureContainer: {
        height: 300,
        borderWidth: 1,
        borderColor: '#333',
        marginBottom: 20,
    },
});

export default Signature;
