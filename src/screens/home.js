import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";


const HomeScreen = () =>{
    return(
        <SafeAreaView>
            <Text style={styles.title}>To Do App</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    title: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 25
    }
})


export default HomeScreen
