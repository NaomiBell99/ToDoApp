import React from 'react'
import { StyleSheet, View } from 'react-native'
import ButtonComponent from '../atom/Button'


const ButtonsComponent = ({ type }) => {

    return(
        <View style={styles.containerBtn}>
             <ButtonComponent label={type === 'save' ? 'Save' : 'Edit'} type={'save'}/>
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
})


export default ButtonsComponent