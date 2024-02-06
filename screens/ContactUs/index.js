import { View, Text, StyleSheet, Image, TextInput,ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react';
import call from "../../assets/call.png"
import { colors } from '../../theme';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

  import { KeyboardAwareScrollView}  from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import {Formik} from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from './contactSlice';
const ContactUs = () => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const contactSchema = Yup.object().shape({
    email: Yup.string()
      .required('Требуется электронная почта')
      .matches(
        /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
        'Email не является допустимым'),
  });

  function apiCall (values,{resetForm}){
    console.log(values)
  dispatch(contactUs({name: values.fullName,email: values.email,subject: values.subject,telephone: values.phoneNumber,description: values.description}))
  resetForm();
  }
  return (
    <KeyboardAwareScrollView >
    <View className="w-full h-full bg-white">

  <Formik
  initialValues={{
                fullName: '',
                email: '',
                subject: '',
                phoneNumber: '',
                description: ''
              }}
              validationSchema={contactSchema}
              onSubmit={apiCall}
  >{
    ({
        values,
                errors,
                touched,
                handleSubmit,
                handleChange,
                setFieldTouched,
                isValid,
      })=>(
        <View className="flex flex-col">

<View className=" flex justify-center items-center mx-2 my-5">
<Text className="text-black text-center" style={{fontFamily: 'Roboto-Bold',fontSize: 18}}>Связаться</Text>
<Text className="text-[#94A3B8] text-center mt-2" style={{fontFamily: 'Robot-Regular',fontSize:12}}>Нужна помощь или есть вопросы о наших строительных материалах? Используйте контактную форму для быстрого и индивидуального ответа. Предпочитаете прямое общение? Наши контактные данные приведены ниже. Ваше удовлетворение является нашим приоритетом, и мы с нетерпением ждем вашего ответа. Давайте строить вместе!</Text>
</View>

<View className="rounded-md bg-[#DAAC7B] flex flex-col mt-3" style={styles.contact_view}>
<Text className=" text-white mx-2 my-1" style={{fontFamily: 'Roboto-Medium',fontSize: 16}}>Контактная информация</Text>
<Text className=" text-white mx-2" style={{fontFamily: 'Roboto-Medium',fontSize: 14}}>Не стесняйтесь обращаться к нам.</Text>

<View className=" flex flex-row justify-start mx-2 my-1 space-x-2">
<Image className="w-6 h-6" source={call} />
<Text className=" text-white text-base" style={{fontFamily: 'Roboto-Medium',fontSize:16}}>+992901049911</Text>
</View>

<View className=" flex flex-row justify-start mx-2 my-1 space-x-2">
<Image className="w-6 h-6" source={require("../../assets/email.png")} />
<Text className=" text-white text-base" style={{fontFamily: 'Roboto-Medium',fontSize:16}}>sokhtamon@gmail.com</Text>
</View>

<View className=" flex flex-row justify-start mx-2 my-1 space-x-2">
<Image className="w-6 h-6" source={require("../../assets/location.png")} />
<Text className=" text-white text-base" style={{fontFamily: 'Roboto-Medium',fontSize:16}}>Адрес: Вефа Центр | Бизнес Центр</Text>
</View>

</View>


<View className="flex flex-col" style={styles.form_view}>
<Text className="text-black" style={{fontFamily: 'Roboto-Bold'}}>Полное имя</Text>
<TextInput
 value={values.fullName}
      onChangeText={handleChange('fullName')}
                      onBlur={() => setFieldTouched('fullName')}
></TextInput>
<View className="bg-black h-px"></View>
</View>
  {touched.fullName && errors.fullName && (
                    <Text style={styles.error_text}>{errors.fullName}</Text>
                  )}

<View className="flex flex-col" style={styles.form_view}>
<Text className="text-black" style={{fontFamily: 'Roboto-Bold'}}>Электронная почта</Text>
<TextInput
value={values.email}
      onChangeText={handleChange('email')}
                      onBlur={() => setFieldTouched('email')}
></TextInput>
<View className="bg-black h-px"></View>
</View>
  {touched.email && errors.email && (
                    <Text style={styles.error_text}>{errors.email}</Text>
                  )}

<View className="flex flex-col" style={styles.form_view}>
<Text className="text-black" style={{fontFamily: 'Roboto-Bold'}}>Предмет</Text>
<TextInput
value={values.subject}
      onChangeText={handleChange('subject')}
                      onBlur={() => setFieldTouched('subject')}
></TextInput>
<View className="bg-black h-px"></View>
</View>
  {touched.subject && errors.subject && (
                    <Text style={styles.error_text}>{errors.subject}</Text>
                  )}

<View className="flex flex-col" style={styles.form_view}>
<Text className="text-black" style={{fontFamily: 'Roboto-Bold'}}>Номер телефона</Text>
<TextInput
 value={values.phoneNumber}
      onChangeText={handleChange('phoneNumber')}
                      onBlur={() => setFieldTouched('phoneNumber')}
></TextInput>
<View className="bg-black h-px"></View>
</View>
  {touched.phoneNumber && errors.phoneNumber && (
                    <Text style={styles.error_text}>{errors.phoneNumber}</Text>
                  )}


<View className="flex flex-col" style={styles.form_view}>
<Text className="text-black" style={{fontFamily: 'Roboto-Bold'}}>Описание</Text>
<TextInput
value={values.description}
      onChangeText={handleChange('description')}
                      onBlur={() => setFieldTouched('description')}
></TextInput>
<View className="bg-black h-px"></View>
</View>
  {touched.description && errors.description && (
                    <Text style={styles.error_text}>{errors.description}</Text>
                  )}


<TouchableOpacity disabled={!isValid} onPress={handleSubmit}
   className=" my-8 rounded-md flex justify-center"
   style={styles.continue_view}>
   {
    state.contact.isLoading ? (
      <View className=" flex justify-center">
      <ActivityIndicator size="large" color="#fff" className="items-center" />
    </View>
    ): (
      <Text
     className=" text-center text-white"
     style={{fontFamily: 'Roboto-Bold', fontSize: 16}}>
     Отправить сообщение
   </Text>
    )
   }
  
 </TouchableOpacity>

 </View>
      )
  }

  </Formik>

      
    </View>
    </KeyboardAwareScrollView>
  )
}

export default ContactUs

const styles = StyleSheet.create({
    contact_view: {
        marginHorizontal: wp(5),
        height: hp(22)
        
    },
    form_view: {
        marginHorizontal: wp(5),
        marginTop: 10
    },
    continue_view: {
        marginHorizontal: wp(8),
        backgroundColor: colors.primary,
        height: hp(7),
      }
})