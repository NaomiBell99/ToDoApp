import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, Button } from "react-native";
import ButtonComponent from "../components/molecules/ButtonAdd";
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () =>{
    
    const navigation = useNavigation();
    
    const add = () => {
        ()=> navigation.navigate('AddToDo');
    }

    return(
        <SafeAreaView style={styles.view}>
            <Text style={styles.title}>To Do App</Text>
            <ButtonComponent onPressAdd={add}/>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    title: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 27,
        color: 'white',
        marginTop: 20
    },
    btnText: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 25,
    },
    view: {
        flex: 1,
        backgroundColor: '#334756'
    }
})


export default HomeScreen
