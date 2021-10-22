import React from 'react'
import { StyleSheet, View } from 'react-native'
import ButtonComponent from '../atom/Button'


const ButtonsComponent = ({ type }) => {

    return(
        <View style={type === 'add' ? styles.containerBtnAdd : styles.containerBtn}>
             <ButtonComponent label={type==='add' ? '+' : type === 'save' ? 'Save' : 'Edit'} type={type==='add' ? 'add' : type==='save' ? 'save' : 'edit'}/>
        </View>
    )
}

const styles = StyleSheet.create ({ 
    containerBtn: {
        backgroundColor: "white",
        width: 100,
        height: 70,
        marginTop: 30,
        borderRadius: 40,
        alignSelf: 'center',
        justifyContent: "center",
        alignContent: "center"
    },
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


export default ButtonsComponent