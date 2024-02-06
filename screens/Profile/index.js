import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SvgUri from 'react-native-svg-uri';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import { colors } from '../../theme';

  import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View className="flex bg-white w-full h-full">
     <View className="flex flex-col">
   
    <View className="flex flex-row mt-4 mx-2">
    <Image className=" rounded-full border-1 border-black" source={require("../../assets/profile1.png")}/>
    <View className="flex flex-col mt-1">
     <Text className=" text-black" style={{fontFamily: 'Roboto-Medium',fontSize: 18}}>shahzaibmehmood65@gmail.com</Text>
     <Text className="text-black" style={{fontFamily: 'Roboto-Regular',fontSize: 14}}>Male</Text>
    </View>

    </View>

    <TouchableOpacity onPress={()=> navigation.navigate("editProfile")}
        className=" my-8 rounded-md flex justify-center"
        style={styles.continue_view}>
        <Text
          className=" text-center text-white"
          style={{fontFamily: 'Roboto-Bold', fontSize: 16}}>
          Редактировать профиль
        </Text>
      </TouchableOpacity>

   <View className="bg-[#F7F7F7] h-px w-full"></View>
   
   <TouchableOpacity onPress={()=>{navigation.navigate("contact")}} className=" flex flex-row mx-5 my-5 justify-between space-x-3">

 <Text className="text-black" style={{fontFamily: 'Roboto-Medium',fontSize:16}}>Контакты</Text>
 <SvgUri width="22" height="22" source={require("../../assets/right_arrow.svg")}/>
   </TouchableOpacity>

   <View className="bg-[#F7F7F7] h-px w-full"></View>

   <TouchableOpacity onPress={()=>{navigation.navigate("about")}} className=" flex flex-row justify-between mx-5 my-5 space-x-3">
   <Text className="text-black" style={{fontFamily: 'Roboto-Medium',fontSize:16}}>О нас</Text>
 <SvgUri width="22" height="22" source={require("../../assets/right_arrow.svg")}/>
   </TouchableOpacity>

   <View className="bg-[#F7F7F7] h-px w-full"></View>

   <TouchableOpacity onPress={()=>{navigation.navigate("tos")}} className=" flex flex-row justify-between mx-5 my-5 space-x-3">
   <Text className="text-black" style={{fontFamily: 'Roboto-Medium',fontSize:16}}>Политика конфиденциальности</Text>
 <SvgUri width="22" height="22" source={require("../../assets/right_arrow.svg")}/>
   </TouchableOpacity>

   <View className="bg-[#F7F7F7] h-px w-full"></View>

   <View className="bg-[#F7F7F7] h-px w-full"></View>
   <TouchableOpacity onPress={()=>{navigation.navigate("tou")}} className=" flex flex-row justify-between mx-5 my-5 space-x-3">
   <Text className="text-black" style={{fontFamily: 'Roboto-Medium',fontSize:16}}>Условия эксплуатации</Text>
 <SvgUri width="22" height="22" source={require("../../assets/right_arrow.svg")}/>
   </TouchableOpacity>

   <View className="bg-[#F7F7F7] h-px w-full"></View>
   <TouchableOpacity onPress={()=>{navigation.navigate("policy")}} className=" flex flex-row justify-between mx-5 my-5 space-x-3">
   <Text className="text-black" style={{fontFamily: 'Roboto-Medium',fontSize:16}}>Условия использования</Text>
 <SvgUri width="22" height="22" source={require("../../assets/right_arrow.svg")}/>
   </TouchableOpacity>
   

     </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    avatar: {
        height: hp(20),
        width: wp(20),
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: wp(20)/2,
        alignItems: 'center'

    },
    continue_view: {
        marginHorizontal: wp(2),
        width: 'auto',
        backgroundColor: colors.primary,
        height: hp(7),
         paddingLeft: wp(2),
         paddingRight: wp(2)
      }
})