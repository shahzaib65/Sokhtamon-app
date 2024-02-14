import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import { useRoute } from "@react-navigation/native"
const ServiceDetails = ({navigation}) => {
  const route = useRoute()
  const id = route.params?.id
  const [ detail,setDetail] = useState('')
  useEffect(()=>{
    
    axios.get(`https://sokhtamon-backend-production-874c.up.railway.app/api/job/fetch/${id}`)
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
            source={{uri: detail.job_url}}
          />

    <View className="flex flex-row justify-start mt-2">
      <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>Сомони: </Text>
      <Text className=" text-primary" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>{detail.price}</Text>
    </View>

    <View className="flex flex-row justify-start mt-2">
      <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>Услуга: </Text>
      <Text className=" text-primary" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>{detail.service}</Text>
    </View>

    <View className="flex flex-row justify-start mt-2">
      <Text className=" text-primary" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>{detail.description}</Text>
    </View>

    <View className="flex flex-row justify-start mt-2">
      <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>Имя: </Text>
      <Text className=" text-primary" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>{detail.full_name}</Text>
    </View>

    <View className="flex flex-row justify-start mt-2">
      <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>Город: </Text>
      <Text className=" text-primary" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>{detail.city}</Text>
    </View>

    <View className="flex flex-row justify-start mt-2">
      <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>опыт: </Text>
      <Text className=" text-primary" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>{detail.experience}</Text>
    </View>

    <View className="flex flex-row justify-start mt-2">
      <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>Телефон: </Text>
      <Text className=" text-primary" style={{fontFamily: 'Roboto-Bold',fontSize: 14}}>{detail.telephone}</Text>
    </View>

    </View>
   
     
    </View>
  )
}

export default ServiceDetails

const styles = StyleSheet.create({
    banner_view: {
        marginHorizontal: wp(4),
        height: hp(25),
        marginTop: hp(5),
      }
})