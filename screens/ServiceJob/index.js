import { View, Text, TextInput, StyleSheet, TouchableOpacity,Image, ScrollView,Modal,ActivityIndicator,Alert } from 'react-native'
import React,{useState,useEffect} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import {request, PERMISSIONS} from 'react-native-permissions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useDispatch, useSelector } from "react-redux";
import { cities } from '../Services/citySlice';
import * as Yup from 'yup';
import {Formik} from 'formik';
import axios from "axios"

import { colors } from '../../theme';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

  import RNPickerSelect from 'react-native-picker-select';

const ServiceJob = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);



    const service = [
      {
        "label": "Pемонт квартир",
        "value": "Pемонт квартир"
      },
      {
    "label": "Сборка и ремонт мебели",
    "value": "Сборка и ремонт мебели"
      },
      {
        "label": "Архитектор",
        "value": "Архитектор"
      },
      {
        "label": "жестянщик",
        "value": "жестянщик"
      },
      {
        "label": "Полировки",
        "value": "Полировки"
      },
      {
        "label": "Кандакори",
        "value": "Кандакори"
      },
      {
        "label": "Лазерная резка металла",
        "value": "Лазерная резка металла"
      },
      {
        "label": "Сварочные работы.",
        "value": "Сварочные работы."
      },{
        "label": "Дизайнер",
        "value": "Дизайнер"
      },
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
       
      const [loading,setLoading] = useState(false);
      const [selectedValue, setSelectedValue] = useState(null);
      const [cityValue, setcityValue] = useState(null);
 
  const placeholder = {
    label: 'Выберите услугу',
    value: null,
  };
  const placeholder1 = {
    label: 'Город',
    value: null,
  };

  const [showSheet, setShowSheet] = useState(false);
  const [filePath, setFilePath] = useState({});
  const toggleSheet = () => {
    setShowSheet(!showSheet);
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs access to your camera',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission granted');
        } else {
          console.log('Camera permission denied');
        }
      } catch (error) {
        console.warn(error);
      }
    } else if (Platform.OS === 'ios') {
      try {
        const result = await request(PERMISSIONS.IOS.CAMERA);
        if (result === 'granted') {
          console.log('Camera permission granted');
        } else {
          console.log('Camera permission denied');
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };
  const captureImage = async type => {
    console.log('capture image');
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };

    let isCameraPermitted = await requestCameraPermission();
    if (!isCameraPermitted) {
      launchCamera(options, response => {
        setShowSheet(false);
   //     console.log(response);
        //  console.log('Response = ', response.assets[0].uri);
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        setFilePath(response.assets[0]);
      });
    } else {
      await requestCameraPermission();
    }
  };
  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      //console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      // console.log('base64 -> ', response.base64);
      // console.log('uri -> ', response.uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
      setShowSheet(false);
      // console.log(response.assets[0]);
      setFilePath(response.assets[0]);
    });
  };

  const postSchema = Yup.object().shape({
    experience: Yup.string()
      .required('Требуется опыт'),
        telephone: Yup.string()
        .required('Требуется телефон'),
        heading: Yup.string()
        .required("Укажите заголовок"),
        username: Yup.string().required("Имя пользователя требуется"),
        price: Yup.string().required("Требуется цена"),
        description: Yup.string().required("Требуется описание")
       
  });

  useEffect(()=>{
    dispatch(cities());

  },[])

   const cityData = state.city.data.map((data) => ({
     label: data.city_name,
     value: data.city_name,
   }));

   function apiCall(values,{resetForm}){ 
    setLoading(true)  
const form = new FormData();
form.append("service",selectedValue)
form.append("city",cityValue)
form.append("experience",values.experience)
form.append("full_name",values.username)
form.append("telephone",values.telephone)
form.append("heading",values.heading)
form.append("price",values.price)
form.append("description",values.description)
form.append('image',{
uri: filePath.uri,
type: 'image/jpeg', 
  name: "image/jpeg"});

const config = {     
headers: { 'content-type': 'multipart/form-data' }
}

axios.post("https://sokhtamon-backend-production-874c.up.railway.app/api/job/upload",form, config)
.then(response => {
setLoading(false)
showAlert("Поздравления","Ваше информационное объявление опубликовано")
console.log(response.data)
resetForm();

})
.catch(error => {
setLoading(false)
console.log(error);
resetForm();
// setError(error)
});
  }
  const showAlert = (title, message) => {
    Alert.alert(title, message, [
      {
        text: 'Хорошо',
        onPress: () => console.log('alert closed'),
      },
    ]);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex w-full h-full bg-white">
         <Formik
     initialValues={{
                heading: '',
                username: '',
                description: '',
                telephone: '',
                price: '',
                experience: '',
                service: '',
                city: '',

              }}
              validationSchema={postSchema}
              onSubmit={apiCall}>{
                ({
                  values,
                  errors,
                touched,
                handleSubmit,
                handleChange,
                setFieldTouched,
                isValid,
                })=>(
                  <>
      <View className=" flex flex-col">
      <Text className="text-black ml-8 my-2" style={{fontFamily: 'Roboto-Medium',fontSize:13}}>Предоставление услуг</Text>       
            <View className="rounded-md bg-[#F8F8F8]" style={styles.drop_view}>
            <RNPickerSelect
              placeholder={placeholder}
              items={service}
              onValueChange={value => setSelectedValue(value)}
              value={selectedValue}
            />
            </View>
            
          
      </View>

 

   <View className=" flex flex-col">
      <Text className="text-black ml-8 my-2" style={{fontFamily: 'Roboto-Medium',fontSize:13}}>Заголовок</Text>
      <TextInput
      value={values.heading}
      onChangeText={handleChange('heading')}
                      onBlur={() => setFieldTouched('heading')}
       className=" rounded-md bg-[#F8F8F8]" style={styles.input_view}>
      </TextInput>
      </View>
      {touched.heading && errors.heading && (
                    <Text style={styles.error_text}>{errors.heading}</Text>
                  )}

      <View className=" flex flex-col">
      <Text className="text-black ml-8 my-2" style={{fontFamily: 'Roboto-Medium',fontSize:13}}>Город</Text>
      {
            !state.city.isLoading &&  
            <View className="rounded-md bg-[#F8F8F8]" style={styles.drop_view}>
            <RNPickerSelect
              placeholder={placeholder1}
              items={cityData}
              onValueChange={value => setcityValue(value)}
              value={cityValue}
            />
            </View>
            
          }
      </View>

      <View className=" flex flex-col">
      <Text className="text-black ml-8 my-2" style={{fontFamily: 'Roboto-Medium',fontSize:13}}>Цена</Text>
      <TextInput
      className=" rounded-md bg-[#F8F8F8]" style={styles.input_view}
      value={values.price}
      onChangeText={handleChange('price')}
                      onBlur={() => setFieldTouched('price')}
      >
      </TextInput>
      </View>
      {touched.price && errors.price && (
                    <Text style={styles.error_text}>{errors.price}</Text>
                  )}

      <View className=" bg-[#8E8EA9] h-[1px] mt-4" style={styles.view}></View>
       
     <View className="flex flex-col">
     <Text className="text-black ml-8 my-2" style={{fontFamily: 'Roboto-Medium',fontSize:13}}>Фото:</Text>
     <View  className=" flex flex-row ml-8 space-x-3">
<TouchableOpacity onPress={toggleSheet}>
<Image source={require("../../assets/add.png")} style={{width: wp(30),height: hp(20)}}/>
</TouchableOpacity>
<Image style={{width: wp(30),height: hp(20)}} source={{uri: filePath.uri}}/>

</View>
     </View>

     <View className=" bg-[#8E8EA9] h-[1px] mt-4" style={styles.view}></View>

     <View className="flex flex-col">
     <Text className="text-black ml-8 my-2" style={{fontFamily: 'Roboto-Medium',fontSize:13}}>Описание</Text>
     <TextInput multiline={true} numberOfLines={5} underlineColorAndroid="transparent" className=" rounded-md bg-[#F8F8F8]" style={styles.text_area_view}
      value={values.description}
      onChangeText={handleChange('description')}
                      onBlur={() => setFieldTouched('description')}
     >
      </TextInput>
     </View>
     {touched.description && errors.description && (
                    <Text style={styles.error_text}>{errors.description}</Text>
                  )}

     <View className=" bg-[#8E8EA9] h-[1px] mt-4" style={styles.view}></View>

     <View className=" flex flex-col">
      <Text className="text-black ml-8 my-2" style={{fontFamily: 'Roboto-Medium',fontSize:13}}>Полное имя</Text>
      <TextInput className=" rounded-md bg-[#F8F8F8]" style={styles.input_view}
      value={values.username}
      onChangeText={handleChange('username')}
                      onBlur={() => setFieldTouched('username')}
      >
      </TextInput>
      </View>
      {touched.username && errors.username && (
                    <Text style={styles.error_text}>{errors.username}</Text>
                  )}

      <View className=" flex flex-col">
      <Text className="text-black ml-8 my-2" style={{fontFamily: 'Roboto-Medium',fontSize:13}}>Опыт</Text>
      <TextInput className=" rounded-md bg-[#F8F8F8]" style={styles.input_view}
       value={values.experience}
      onChangeText={handleChange('experience')}
                      onBlur={() => setFieldTouched('experience')}
      >
      </TextInput>
      </View>
      {touched.experience && errors.experience && (
                    <Text style={styles.error_text}>{errors.experience}</Text>
                  )}

      <View className=" flex flex-col">
      <Text className="text-black ml-8 my-2" style={{fontFamily: 'Roboto-Medium',fontSize:13}}>Tелефон</Text>
      <TextInput className=" rounded-md bg-[#F8F8F8]" style={styles.input_view}
      value={values.telephone}
      onChangeText={handleChange('telephone')}
                      onBlur={() => setFieldTouched('telephone')}
      >
      </TextInput>
      </View>
      {touched.telephone && errors.telephone && (
                    <Text style={styles.error_text}>{errors.telephone}</Text>
                  )}

      <TouchableOpacity disabled={!isValid} onPress={handleSubmit}
        className=" my-8 rounded-md flex 
        justify-center"
        style={styles.continue_view}>
         {
         loading ? (
          <View className=" flex justify-center">
      <ActivityIndicator size="large" color="#fff" className="items-center" />
    </View>
         ): ( <Text
          className=" text-center text-white"
          style={{fontFamily: 'Roboto-Bold', fontSize: 16}}>
          Подать объявление
        </Text>)
        }
       
      </TouchableOpacity>
      </>
                )
              }
    
   
</Formik>
      <>
        <Modal visible={showSheet} animationType="slide" transparent={true}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
            onPress={() => console.log('bottom sheet')}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 16,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => captureImage('photo')}
                style={{backgroundColor: colors.primary,padding:4,borderRadius:4, marginVertical: 4}}>
                <Text style={{color: 'white'}} onPress={() => captureImage('photo')}>
                Выбрать изображение с камеры
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => chooseFile('photo')}
                style={{backgroundColor: colors.primary,padding:4,borderRadius:4, marginVertical: 4}}>
                <Text style={{color: 'white'}}>Выбрать изображение из галереи</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor: colors.primary,padding:4,borderRadius:4, marginVertical: 4}}>
                <Text style={{color: 'white'}} onPress={() => setShowSheet(false)}>Отмена</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </>
    </ScrollView>
  )
}

export default ServiceJob

const styles = StyleSheet.create({
    input_view: {
      marginHorizontal: wp(8),
      height: hp(6),
      paddingHorizontal: 4
    },
    drop_view: {
      marginHorizontal: wp(8),
      height: 'auto',
      paddingBottom: 5,
      paddingHorizontal: 0
    },
    text_area_view: {
      marginHorizontal: wp(8),
      height: hp(14),
      paddingHorizontal: 4,
      textAlignVertical: 'top'
    },
    drop_down_view: {
      width: '85%',
      height: hp(6),
      alignSelf: 'center',
      marginTop: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 15,
    },
    view: {
      marginHorizontal: wp(4)
    },
    continue_view: {
      marginHorizontal: wp(8),
      backgroundColor: colors.primary,
      height: hp(7),
    
    },
    error_text: {
      marginHorizontal: wp(8),
      color: 'red',
      marginTop: 2
    }
  })