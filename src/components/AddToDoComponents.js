import React, {useState, useEffect} from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch } from "react-redux";
import { add } from '../reducers/index'
import { useNavigation } from '@react-navigation/native';


const AddToDoForm = () => {
    const [text, setText] = useState([])
    const [todos, setTodos] = useState([])
    const dispatch = useDispatch([])

    const navigation = useNavigation();

    const addTodo = (text) =>{
        dispatch(add(text))
        setText('')
        navigation.navigate('App')
    }


    return (
            <SafeAreaView style={{
                    flex: 1,
                    backgroundColor: '#334756'}}>
                <View style={{ marginTop:40, marginLeft: 15 }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>What you want to do?</Text>
                    <TextInput onChangeText={(text)=>setText({text})} value={text} placeholder='ex. Watching TV' style={{ borderWidth: 1, height: 50, width: 380 , backgroundColor: 'white', color: 'black'}}/>
                </View>
                <View style={styles.containerBtn}>
                    <TouchableOpacity onPress={()=>addTodo(text)}>
                        <Text style={styles.btnText}>Save</Text>
                    </TouchableOpacity>
                </View>
               
            </SafeAreaView>
    )
}

const styles = StyleSheet.create ({

    btnText: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 25,
    },
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

export default AddToDoForm