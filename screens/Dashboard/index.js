import React from 'react'
import SvgUri from 'react-native-svg-uri';
import { colors } from '../../theme';
import HomeScreen from "../Home"
import ServiceScreen from '../Services';
import PlaceScreen from "../PlaceAd"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Login from '../Login';
import Profile from '../Profile';
const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#8E8EA9'
    }}>
      <Tab.Screen name="home" component={HomeScreen}
         options={{
          unmountOnBlur: true,
            tabBarLabel: 'Главная',
            headerShown: false,
            tabBarIcon: ({focused}) => (
           <Image tintColor={ focused ? colors.primary: '#8E8EA9'}  source={require("../../assets/home1.png")}/>
            ),
          }}
         />

<Tab.Screen name="service" component={ServiceScreen}
         options={{
          unmountOnBlur: true,
            tabBarLabel: 'Услуги',
            headerShown: false,
            tabBarIcon: ({focused}) => (
            
            <Image  tintColor={ focused ? colors.primary : "#8E8EA9"} source={require('../../assets/service1.png')} />
            ),
          }}
         />

<Tab.Screen name="Ad" component={PlaceScreen}
         options={{
          unmountOnBlur: true,
            tabBarLabel: 'Разместить объявление',
            headerShown: false,
            tabBarIcon: ({focused}) => (
            
            <Image  tintColor={ focused ? colors.primary : "#8E8EA9"} source={require('../../assets/add1.png')} />
            ),
          }}
         />

<Tab.Screen name="Account" component={Profile}
         options={{
          unmountOnBlur: true,
            tabBarLabel: 'Профиль',
            headerShown: false,
            tabBarIcon: ({focused}) => (
            
            <Image  tintColor={ focused ? colors.primary : "#8E8EA9"} source={require('../../assets/person.png')} />
            ),
          }}
         />

    </Tab.Navigator>
  )
}
