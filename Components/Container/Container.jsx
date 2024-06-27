import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'


function Container({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

export default Container;

const styles = StyleSheet.create({
    container: {
        padding: 12
    }
});