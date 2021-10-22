import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { useNavigation } from '@react-navigation/native';



const ButtonComponent = ({label, type}) =>{
    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={type === 'add' ? ()=>navigation.navigate('AddToDo') : ()=>navigation.navigate('Home')}>
            <Text style={styles.btnText}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({

    btnText: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 25,
    }
})


export default ButtonComponent
