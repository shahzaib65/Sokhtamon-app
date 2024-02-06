import React from 'react'
import {Provider} from "react-redux"
import { store } from './redux/store';
import AppNavigation from './screens/Navigation/AppNavigation';
import 'react-native-gesture-handler';
export default function App() {
 
 
  return (
    <Provider store={store}>
  <AppNavigation/>
    </Provider>
   
    
  )
}
