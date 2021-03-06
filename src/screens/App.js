import React from 'react'
import { store } from '../store'
import { Provider } from 'react-redux'
import Home from './Home'

function App(){
    return( 
        <Provider store={store}>
            <Home />
        </Provider>
    )
}
export default App