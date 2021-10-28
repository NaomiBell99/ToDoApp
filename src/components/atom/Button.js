import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { useNavigation } from '@react-navigation/native';



const ButtonComponent = ({label, type, todo}) =>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={type === 'add' ?  () => {
            navigation.navigate('AddToDo', {
              todolist : todo
            });
          } : ()=>navigation.navigate('App')}>
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
