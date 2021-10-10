import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function Home(props) {
    const { navigation } = props;
    return (
        <View>
            <Text style={styles.title}>Menú principal</Text>

            <View style={styles.container}>
                <Button title='Sumar' onPress={() => navigation.navigate('add')}></Button>
            </View>
            <View style={styles.container}>
                <Button title='Restar' onPress={() => navigation.navigate('subtract')}></Button>
            </View>
            <View style={styles.container}>
                <Button title='Multiplicar' onPress={() => navigation.navigate('multiply')}></Button>
            </View>
            <View style={styles.container}>
                <Button title='Division' onPress={() => navigation.navigate('division')}></Button>
            </View>
            <View style={styles.container}>
                <Button title='Factorial' onPress={() => navigation.navigate('factorial')}></Button>
            </View>

            <View style={styles.teamContainer}>
                <Text style={styles.teamLabel}>Erick Gilberto Aguilar Urquilla AU171965</Text>
                <Text style={styles.teamLabel}>Diego Alberto Lemus Torres LT171997</Text>
                <Text style={styles.teamLabel}>Desafio 2 - DPS</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        margin: 10,
        fontSize: 16,
        textAlign: 'center'
    },
    teamContainer: {
        margin: 20
    },
    teamLabel: {
        textAlign: 'center',
        fontSize: 20,
        margin: 4
    },
    container: {
        margin: 10
    }
});