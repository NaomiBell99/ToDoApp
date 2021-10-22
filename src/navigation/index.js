import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import AddToDoForm from '../screens/AddToDo';

export default function RouteNavigation() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AddToDo" component={AddToDoForm} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}