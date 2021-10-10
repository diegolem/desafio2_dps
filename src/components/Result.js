import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Result({ finalResult, errorForm }) {
    return (
        <View style={styles.resultContainer}>
            {errorForm === null ? <Text style={styles.labelResult}>El resultado es: {finalResult}</Text> : null}
            {typeof errorForm === 'object' ? <Text style={styles.labelResult}>Error: {errorForm.message}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    resultContainer: {
        margin: 20
    },
    labelResult: {
        textAlign: 'center',
        fontSize: 20,
        margin: 4
    }
})
