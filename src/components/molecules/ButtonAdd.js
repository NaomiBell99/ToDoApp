import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import ButtonComponent from '../atom/Button'



const ButtonAddComponent = ({ }) => {
    return(
        <View style={styles.containerBtnAdd}>
             <ButtonComponent label={'+'} type='add' />
        </View>
    )
}

const styles = StyleSheet.create ({ 
    containerBtnAdd: {
        backgroundColor: "white",
        position: "absolute",
        bottom: 30,
        right: 30,
        width: 70,
        height: 50,
        borderRadius: 40,
        justifyContent: "center",
        alignContent: "center"
    },
})


export default ButtonAddComponent