import React from "react";
import { SafeAreaView, StyleSheet, Text, Button } from "react-native";
import ButtonComponent from "../components/molecules/ButtonsComponent";



const HomeScreen = () =>{
    return(
        <SafeAreaView style={styles.view}>
            <Text style={styles.title}>To Do App</Text>
            <ButtonComponent type='add'/>
            
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
