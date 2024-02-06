import React,{useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../Login"
import Otp from "../Otp"
import Home from "../Home"
import Subscription from '../Subscription';
import PlaceAd from '../PlaceAd';
import Service from "../Services";
import ServiceDetails from '../ServiceDetails';
import JobDetails from '../JobDetails';
import ContactUs from '../ContactUs';
import Aboutus from '../AboutUs';
import TOS from "../TOS"
import Privacy from "../Policy"
import TOU from "../TOU"
import Dashboard from '../Dashboard';
import Profile from '../Profile';
import ServiceJob from '../ServiceJob';
import EditProfile from '../EditProfile';
const Stack = createNativeStackNavigator();
import SvgUri from 'react-native-svg-uri';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, StyleSheet,View,Button, Text } from 'react-native';
const Drawer = createDrawerNavigator();
import sokhtamon from "../../assets/sokhtamon.png"
const AppNavigation = () => {
    let userID= ''
    useEffect(()=>{
      getId(); 
    },[userID])
  const getId = async()=>{
    userID = await AsyncStorage.getItem("user_id")
    console.log("UserID=>",userID)

  }
  function Root() {
    return (
      <Drawer.Navigator 
      screenOptions={{headerShown: true, 
      headerStyle: {
        height: 60, // Specify the height of your custom header
        backgroundColor: "white",
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTitle: (props)=>(
        <Image
              source={sokhtamon}
              style={{width:70, height:35}}
          />
      ),
      headerTitleAlign: "center",
      // headerRight: () => (
      //   <Text className=" font-semibold text-black text-base items-center text-center mr-3">
      //       Вход
      //     </Text>   
      // ),
      }}>
       <Drawer.Screen  name="Главная" component={Dashboard} />
        <Drawer.Screen name="Контакты" component={ContactUs} />
        <Drawer.Screen name="О нас" component={Aboutus} />
        <Drawer.Screen name="Политика конфиденциальности" component={Privacy} />
        <Drawer.Screen name="Условия эксплуатации" component={TOS} />
        <Drawer.Screen name="Условия использования" component={TOU} />
      </Drawer.Navigator>
    );
  }

  if(userID !== null){
    return(
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen  name="Root" component={Root} options={{ headerShown: false }} />
          <Stack.Screen options={{headerShown: false}} name="profile" component={Profile} />
          <Stack.Screen options={{headerShown: false}} name="tou" component={TOU} />
          <Stack.Screen options={{headerShown: false}} name="policy" component={Privacy} />
          <Stack.Screen options={{headerShown: false}} name="tos" component={TOS} />
          <Stack.Screen options={{headerShown: false}} name="about" component={Aboutus} />
          <Stack.Screen options={{headerShown: false}} name="contact" component={ContactUs} />
          <Stack.Screen options={{headerShown: false}} name="jobDetail" component={JobDetails} />
          <Stack.Screen options={{headerShown: false}} name="serviceDetail" component={ServiceDetails} />
          <Stack.Screen options={{headerShown: false}} name="Service" component={Service} />
          <Stack.Screen options={{headerShown: false}} name="Ad" component={PlaceAd} />
          <Stack.Screen options={{headerShown: false}} name="Subscription" component={Subscription} />
          <Stack.Screen options={{headerShown: false}} name="home" component={Home} />
          <Stack.Screen options={{headerShown: false}} name="serviceJob" component={ServiceJob} />
          <Stack.Screen options={{headerShown: false}} name="editProfile" component={EditProfile} />
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown: false}} name="Otp" component={Otp} />
        </Stack.Navigator>
      </NavigationContainer>
      )
   
  }else{
    return(
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      <Stack.Screen options={{headerShown: false}} name="Otp" component={Otp} />
      <Stack.Screen  name="Root" component={Root} options={{ headerShown: false }} />
        <Stack.Screen options={{headerShown: false}} name="home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="profile" component={Profile} />
          <Stack.Screen options={{headerShown: false}} name="tou" component={TOU} />
          <Stack.Screen options={{headerShown: false}} name="policy" component={Privacy} />
          <Stack.Screen options={{headerShown: false}} name="tos" component={TOS} />
          <Stack.Screen options={{headerShown: false}} name="about" component={Aboutus} />
          <Stack.Screen options={{headerShown: false}} name="contact" component={ContactUs} />
          <Stack.Screen options={{headerShown: false}} name="jobDetail" component={JobDetails} />
          <Stack.Screen options={{headerShown: false}} name="serviceDetail" component={ServiceDetails} />
          <Stack.Screen options={{headerShown: false}} name="Service" component={Service} />
          <Stack.Screen options={{headerShown: false}} name="Ad" component={PlaceAd} />
          <Stack.Screen options={{headerShown: false}} name="Subscription" component={Subscription} />
          
          <Stack.Screen options={{headerShown: false}} name="serviceJob" component={ServiceJob} />
          <Stack.Screen options={{headerShown: false}} name="editProfile" component={EditProfile} />
      </Stack.Navigator>
  </NavigationContainer>
     )
   
  }

  
}

export default AppNavigation
