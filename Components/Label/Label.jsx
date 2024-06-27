import React from 'react'
import { Text, StyleSheet } from 'react-native'

function Label({ text }) {
    return (
        <Text style={styles.label}>
            {text}
        </Text>
    )
}

export default Label;

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        borderBlockColor: '#333',
        marginBottom: 6
    }
});