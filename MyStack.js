

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Tinies from './screens/Tinies'
import Icons from './screens/Icons'
import Emoji from './screens/Emoji'


const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Tinies"
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'black',
                headerStyle: { backgroundColor: '#ffffcc' },
            }}
        >
            <Stack.Screen name="Tinies" component={Tinies} />
            <Stack.Screen name="Icons" component={Icons} />


        </Stack.Navigator>
    );
}

