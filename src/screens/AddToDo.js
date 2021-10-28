import React from "react";
import {store} from '../store'
import { Provider } from 'react-redux'
import AddToDoForm from "../components/AddToDoComponents";

const AddToDo = ({route}) => {
    return (
        <Provider store={store}>
           <AddToDoForm route={route} />
        </Provider>
            
    )
}


export default AddToDo