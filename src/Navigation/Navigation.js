import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Add from '../screens/Add';
import Division from '../screens/Division';
import Factorial from '../screens/Factorial';
import Multiply from '../screens/Multiply';
import Subtract from '../screens/Subtract';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{ title: 'Home' }} />
            <Stack.Screen name="add" component={Add} options={{ title: 'Sumar' }} />
            <Stack.Screen name="division" component={Division} options={{ title: 'Dividir' }} />
            <Stack.Screen name="factorial" component={Factorial} options={{ title: 'Factorial' }} />
            <Stack.Screen name="multiply" component={Multiply} options={{ title: 'Multiplicar' }} />
            <Stack.Screen name="subtract" component={Subtract} options={{ title: 'Restar' }} />
        </Stack.Navigator>
    )
}
