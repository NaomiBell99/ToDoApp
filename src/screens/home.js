import React, {useState, useEffect} from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, Button, ActivityIndicator } from "react-native";
import ButtonComponent from "../components/molecules/ButtonsComponent";
import axios from 'axios'


const HomeScreen = () =>{
    const [isLoading, setLoading] = useState(false)
    const [listData, setData] = useState([])

    const urlGetDataList = 'https://api.fake.rest/189bf93b-4d78-4f00-86ac-76d87cfccbd1/task/list'
    const onPressGetData = async () => {
        setLoading(true)
        const response = await axios.get(urlGetDataList)

        const {data, status} = response
        if(status === 200 && data){
            setLoading(false)
            setData(data.data)
            console.log(listData[0].isDone)
        }
    }

    useEffect(() => {
        onPressGetData()
    }, [])

    if(isLoading){
        return(
            <SafeAreaView style={styles.fill}>
                <View style={[styles.fill, styles.center]}>
                    <ActivityIndicator size={'large'}/>
                </View>
            </SafeAreaView>
        )
    }

    const onPressEdit = () => {
        console.log('editt')
    }

    const onPressDelete = () => {
        console.log('delete')
    }

    return(
        <SafeAreaView style={styles.view}>
            <Text style={styles.title}>To Do App</Text>
            <View style={styles.container}>
                <FlatList
                    data={listData}
                    renderItem={({item, index}) => {
                        return(
                            <TouchableOpacity style={ styles.todoList}>
                                <Text onPress={onPressEdit} style={styles.todoEdit}>{item.name}</Text>
                                <Button title={"Delete"} style={styles.todoDelete} onPress={onPressDelete}/>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.id}
                />
            </View>
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
    },
    fill: {
        flex: 1,
        padding: 20
    },

    container: {
        padding: 20
    },

    todoList: {
        marginBottom: 15,
        fontSize: 12,
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        width: 380,
        height: 60,
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop:5,
        paddingBottom: 5
        // borderStyle: "solid"
    },

    center: {
        justifyContent: "center",
        alignItems: "center"
    },

    todoEdit: {
        width: "80%",
        fontSize: 20
    },

    todoDelete: {
        padding: "auto"
    }
})


export default HomeScreen
