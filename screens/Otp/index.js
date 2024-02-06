import { View, Text, StyleSheet,TextInput, TouchableOpacity,ActivityIndicator } from 'react-native'
import React from 'react'
import logo from '../../assets/logo.png';
import { Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { colors } from '../../theme';
import {useNavigation} from '@react-navigation/native';
import { KeyboardAwareScrollView}  from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Yup from 'yup';
import {Formik} from 'formik';
import { otpWithEmail } from './otpSlice';
import { useDispatch, useSelector } from "react-redux";
const Otp = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const otpSchema = Yup.object().shape({
    otp: Yup.string()
      .required('Требуется OTP-код') 
  });

  function apiCall(values,{resetForm}){
    dispatch(otpWithEmail({ otp: values.otp }));
    resetForm();
  }
  if (state.otp.data){
    navigation.navigate('dashbaord')
  }

  return (
    <KeyboardAwareScrollView className=" flex bg-white w-full h-full">
    <Formik
     initialValues={{
                otp: ''
              }}
              validationSchema={otpSchema}
              onSubmit={apiCall}
    >
    {
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
        <View className=" flex justify-center items-center">
        <Image
          source={logo}
          style={{marginTop: hp(10)}}
          className=" items-center"
        />
      </View>
      <View className=" flex justify-center items-center">
        <Text className=" mt-10" style={{fontFamily: 'Roboto-Bold',fontSize:30,color: colors.black}}>OTP-верификация</Text>
        <Text style={{fontFamily: 'Roboto-Medium',fontSize:16,textAlign: 'center',color: colors.gray,width: wp(95)}}>
        Введите 6-значный код, который был отправлен на вашу электронную почту.
        </Text>
      </View>
      <View
        className=" flex rounded-md mt-4"
        style={styles.input_view}>
         <TextInput
          value={values.otp}
          onChangeText={handleChange('otp')}
          onBlur={() => setFieldTouched('otp')}
          maxLength={6} style={{marginHorizontal: 5}}></TextInput>
        </View>
        {touched.otp && errors.otp && (
                    <Text style={styles.error_text}>{errors.otp}</Text>
                  )}

        <TouchableOpacity disabled={!isValid} onPress={handleSubmit}
         className=" my-8 rounded-md flex justify-center" style={styles.continue_view}>
         {
          state.otp.isLoading ? (
            <View className=" flex justify-center">
      <ActivityIndicator size="large" color="#fff" className="items-center" />
    </View>
          ): ( <Text className=" text-center text-white" style={{fontFamily: 'Roboto-Bold',fontSize: 16}}>Проверить код</Text>)
         }
        </TouchableOpacity>
        <Text style={styles.error_text}>{state.data.otp}</Text>
        
        </>
      )
    }
    </Formik>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
    input_view: {
        marginHorizontal: wp(8),
        backgroundColor: colors.input_bg,
        height: hp(7),
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

export default Otp