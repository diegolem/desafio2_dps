import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Result({ finalResult, error }) {
    return (
        <View style={styles.resultContainer}>
            {error === null ?
                (
                    <Text style={styles.labelResult}>El resultado es: {finalResult}</Text>
                ) :
                (
                    <Text style={styles.labelResult}>{error}</Text>
                )
            }
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
