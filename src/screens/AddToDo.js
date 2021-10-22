import React from "react";
import { SafeAreaView, View, Text, TextInput } from 'react-native'
import ButtonsComponent from "../components/molecules/ButtonsComponent";


const AddToDoForm = () => {
    return (
        <SafeAreaView style={{
                flex: 1,
                backgroundColor: '#334756'}}>
            <View style={{ marginTop:40, marginLeft: 15 }}>
                <Text style={{ fontSize: 20, color: 'white' }}>What you want to do?</Text>
                <TextInput placeholder='ex. Watching TV' style={{ borderWidth: 1, height: 50, width: 380 , backgroundColor: 'white', color: 'black'}}/>
            </View>
            <ButtonsComponent type='save' />
        </SafeAreaView>
    )
}


export default AddToDoForm