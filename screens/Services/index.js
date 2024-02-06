import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useColorScheme
} from 'react-native';
import React, { useEffect, useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { cities } from './citySlice';
import { services } from './serviceSlice';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../../theme';

const Services = ({navigation}) => {
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? '#000000' : '#000000';
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const service = [
    {
      label: 'Плотник',
      value: 'Плотник',
    },
    {
      label: 'Сантехник',
      value: 'Сантехник',
    },
    {
      label: 'Строительные рабочие',
      value: 'Строительные рабочие',
    },
    {
      label: 'Асфальтировщик',
      value: 'Асфальтировщик',
    },
    {
      label: 'Крановщик',
      value: 'Крановщик',
    },

    {
      label: 'Кровельщик',
      value: 'Кровельщик',
    },
    {
      label: 'Украшение',
      value: 'Украшение',
    },
    {
      label: 'Инспектор',
      value: 'Инспектор',
    },
    {
      label: 'Каменщик',
      value: 'Каменщик',
    },
    {
      label: 'Подрядчик по обрамлению',
      value: 'Подрядчик по обрамлению',
    },
    {
      label: 'Геодезист',
      value: 'Геодезист',
    },
    {
      label: 'Электрик',
      value: 'Электрик',
    },
    {
      label: 'Архитектор',
      value: 'Архитектор',
    },
    {
      label: 'Отделочник гипсокартона',
      value: 'Отделочник гипсокартона',
    },
    {
      label: 'Маляр и декоратор',
      value: 'Маляр и декоратор',
    },
    {
      label: 'Бетоноотделочник',
      value: 'Бетоноотделочник',
    },
    {
      label: 'Стекольщик',
      value: 'Стекольщик',
    },
    {
      label: 'Установщик плитки',
      value: 'Установщик плитки',
    },
    {
      label: 'Отделочные работы',
      value: 'Отделочные работы',
    },
    {
      label: 'Штукатурные работы',
      value: 'Штукатурные работы',
    },
    {
      label: 'Выравнивание пола',
      value: 'Выравнивание пола',
    },
    {
      label: 'Малярные работы',
      value: 'Малярные работы',
    },
    {
      label: 'Паркетные работы',
      value: 'Паркетные работы',
    },
    {
      label: 'Укладка ПВХ покрытий',
      value: 'Укладка ПВХ покрытий',
    },
    {
      label: 'Плиточные работы',
      value: 'Плиточные работы',
    },
    {
      label: 'Звукоизоляция помещений',
      value: 'Звукоизоляция помещений',
    },
    {
      label: 'Инженерная сантехника',
      value: 'Инженерная сантехника',
    },
    {
      label: 'Электро-монтажные работы',
      value: 'Электро-монтажные работы',
    },
    {
      label: 'Монтаж теплого пола',
      value: 'Монтаж теплого пола',
    },
    {
      label: 'Натяжные потолки',
      value: 'Натяжные потолки',
    },
    {
      label: 'Установка дверей',
      value: 'Установка дверей',
    },
    {
      label: 'Транспортные услуги',
      value: 'Транспортные услуги',
    },
  ];
   
  const [selectedValue, setSelectedValue] = useState(null);
  const [cityValue, setcityValue] = useState(null);

  const placeholder = {
    label: 'Выберите услугу',
    value: null,
    color: textColor
  };
  const placeholder1 = {
    label: 'Город',
    value: null,
    color: textColor
  };

   useEffect(()=>{
     dispatch(cities())
   },[])

    const cityData = state.city.data.map((data) => ({
      label: data.city_name,
      value: data.city_name,
    }));
   
    const pickerSelectStyles = StyleSheet.create({
      inputIOS: {
          fontSize: 16,
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 4,
          color: 'black',
          paddingRight: 30 // to ensure the text is never behind the icon
      },
      inputAndroid: {
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          borderWidth: 0.5,
          borderColor: 'purple',
          borderRadius: 8,
          color: 'black',
          paddingRight: 30 // to ensure the text is never behind the icon
      }
  });
 
  return (
    <View className="flex-1 w-full h-full bg-white">
      <View className="flex flex-col">

      <TouchableOpacity
                onPress={() => navigation.navigate('serviceJob')}
                style={{backgroundColor: colors.primary,padding:4,borderRadius:4, marginVertical: 10,marginHorizontal: 40}}>
                <Text style={{color: 'white',textAlign: 'center',paddingVertical: 4}}>
                Загрузить сервис
                </Text>
              </TouchableOpacity>

        <View className="flex flex-row mx-2 mt-4" style={{height: hp(7)}}>
          <View className=" w-[40%] rounded-tl-md rounded-bl-md border border-[#EFEFEF]" style={{color: textColor}}>
            <RNPickerSelect
              className=" text-xs"
              placeholder={placeholder}
              items={service}
              onValueChange={value => setSelectedValue(value)}
              value={selectedValue}
              style={{
        inputIOS: {
          color: '#000', // Set the text color dynamically
        },
        inputAndroid: {
          color: '#000', // Set the text color dynamically
        },
      }}
            />
          </View>

          <View className=" w-[40%]  border border-[#EFEFEF]">
          {
            !state.city.isLoading &&  <RNPickerSelect
              placeholder={placeholder1}
              items={cityData}
              onValueChange={value => setcityValue(value)}
              value={cityValue}
            />
          }
             
          </View>

          <TouchableOpacity onPress={()=>{dispatch(services({cityValue,selectedValue}))}} className=" w-[20%] bg-primary rounded-tr-md rounded-br-md justify-center items-center">
            <Text className=" text-white text-center w-full">Поиск</Text>
          </TouchableOpacity>
        </View>
   {
    state.service.data.map((item)=>(
      <ScrollView style={{marginTop: 20}}>
      <TouchableOpacity key={item._id} onPress={()=> navigation.navigate("serviceDetail",{ id: item._id })} className=" flex flex-col justify-center" style={styles.outline_view}>
      <View className="flex justify-center items-center">
      <Image className=" items-center" style={{width: 80,height:80,borderRadius: 80/2}}
            source={{uri: item.job_url}}
          />
      </View>

<Text  className=" text-center text-black" style={{fontFamily: 'Roboto-Medium',fontSize: 16}}>{item.full_name}</Text>
          <Text className="text-center text-[#94A3B8]" style={styles.sub_title}>{item.description}</Text>

          <View className=" flex flex-row justify-center items-center my-1">
       <Text className=" text-[#5271FF]" style={{fontFamily: 'Roboto-Bold',fontSize:14}}>Сомони :</Text>
        <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize:14}}>{item.price}</Text>
       </View>

      </TouchableOpacity>
      </ScrollView>
    ))
   }


 
     
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
    banner_view: {
      marginHorizontal: wp(4),
      height: hp(24),
      marginTop: hp(5),
    },
    outline_view: {
      borderColor: '#F4F4F4',
      borderWidth: 2,
      borderRadius: 10,
      height: 'auto'
      
      
    },
    top_image: {
      height: hp(10),
      width: wp(10),
      borderRadius: wp(10)/2,
      alignItems: 'center'
    },
    sub_title: {
      fontFamily: 'Roboto-Regular',
      fontSize: 14,
      marginHorizontal: wp(3)
    }
  });

     {/* <FlatList
data={state.service.data}
scrollEnabled={true}
renderItem={(item)=>
  <ScrollView>
         <View className=" flex flex-col justify-center" style={styles.outline_view}>
         
           <Image style={styles.top_image}
            className="rounded-tl rounded-tr"
            source={{uri: item.job_url}}
          />
          

          <View className=" flex flex-row justify-center items-center my-1">
       <Text className=" text-[#5271FF]" style={{fontFamily: 'Roboto-Bold',fontSize:14}}>Сомони :</Text>
        <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize:14}}>{item.price}</Text>
       </View>

        </View>
       </ScrollView>

}
keyExtractor={item => item._id}
 /> */}