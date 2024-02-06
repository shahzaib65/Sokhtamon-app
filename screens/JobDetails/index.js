import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import { colors } from '../../theme';
  import { useRoute } from "@react-navigation/native"
  import axios from 'axios';
const JobDetails = ({navigation}) => {
  const route = useRoute()
  const id = route.params?.id
  console.log(id)
  const [ detail,setDetail] = useState('')

  useEffect(()=>{
    
    axios.post(`https://sokhtamon-backend-production.up.railway.app/api/post/fetch/${id}`)
    .then((res)=>{
      console.log(res.data)
       setDetail(res.data)
    }).catch((err)=>{
      console.log(err.message);
    })
  },[])


  return (
    <View className="flex bg-white w-full h-full">
 <View className="flex flex-col" style={styles.banner_view}>
    <Image
            className="w-full h-full rounded-md"
            source={{uri: detail.post_image_url}}
          />

    <View className="flex flex-row justify-start mt-2">
      <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>Сомони: </Text>
      <Text className=" text-primary" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>{detail.price}</Text>
    </View>

    <View className="flex flex-row justify-start mt-2">
      <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>Категория: </Text>
      <Text className=" text-primary" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>{detail.sub_category_name}</Text>
    </View>

    <View className="flex flex-row justify-start mt-2">
      <Text className=" text-primary" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>{detail.description}</Text>
    </View>

    <View className="flex flex-row justify-start mt-2">
      <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>Имя: </Text>
      <Text className=" text-primary" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>{detail.username}</Text>
    </View>

    <View className="flex flex-row justify-start mt-2">
      <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>Электронная почта:</Text>
      <Text className=" text-primary" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}> {detail.email}</Text>
    </View>

   

    <View className="flex flex-row justify-start mt-2">
      <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>Телефон: </Text>
      <Text className=" text-primary" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>{detail.telephone}</Text>
    </View>

    <TouchableOpacity onPress={()=>navigation.navigate("Subscription")}
        className=" my-8 rounded-md flex justify-center"
        style={styles.continue_view}>
        <Text
          className=" text-center text-white"
          style={{fontFamily: 'Roboto-Bold', fontSize: 16}}>
          Подписка
        </Text>
      </TouchableOpacity>

    </View>
   
     
    </View>
  )
}

export default JobDetails

const styles = StyleSheet.create({
    banner_view: {
        marginHorizontal: wp(4),
        height: hp(25),
        marginTop: hp(5),
      },
      continue_view: {
        marginHorizontal: wp(8),
        backgroundColor: colors.primary,
        height: hp(7),
      }
})