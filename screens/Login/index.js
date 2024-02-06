import {View, Text, Image, StyleSheet, TextInput,TouchableOpacity,ActivityIndicator} from 'react-native';
import React from 'react';
import logo from '../../assets/logo.png';
import {colors} from '../../theme';
import { useDispatch, useSelector } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import { KeyboardAwareScrollView}  from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import {Formik} from 'formik';
import { loginWithEmail } from './loginSlice';

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required('Требуется электронная почта')
      .matches(
        /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
        'Email не является допустимым'),
  });
  if(state.email.data){
    navigation.navigate('Otp');
  }
  function apiCall(values,{resetForm}){
    dispatch(loginWithEmail({ email: values.email, role: "user" }));
    resetForm();
  }
  return (
    <KeyboardAwareScrollView className=" flex h-full w-full bg-[#ffffff]">
    <Formik
    initialValues={{
                email: ''
              }}
              validationSchema={loginSchema}
              onSubmit={apiCall}>
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
        <Text style={styles.signIn}>Войти</Text>
        <Text style={styles.sub_title}>
          Введите адрес электронной почты для получения отп
        </Text>
      </View>

      <View className=" flex justify-start items-start mt-7">
        <Text style={styles.email}>Электронная почта</Text>
      </View>

      <View className=" flex rounded-md" style={styles.input_view}>
     
     <TextInput style={{marginHorizontal: 5}}
      value={values.email}
      onChangeText={handleChange('email')}
                      onBlur={() => setFieldTouched('email')}
     >
     </TextInput>
      </View>
      {touched.email && errors.email && (
                    <Text style={styles.error_text}>{errors.email}</Text>
                  )}
      <TouchableOpacity disabled={!isValid} onPress={handleSubmit}
        className=" my-8 rounded-md flex justify-center"
        style={styles.continue_view}>
        {
         state.email.isLoading ? (
          <View className=" flex justify-center">
      <ActivityIndicator size="large" color="#fff" className="items-center" />
    </View>
         ): ( <Text
          className=" text-center text-white"
          style={{fontFamily: 'Roboto-Bold', fontSize: 16}}>
         Продолжать
        </Text>)
        }
      </TouchableOpacity>
 </>
      )
    }
    </Formik>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  signIn: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    color: 'black',
    marginTop: hp(5),
  },
  sub_title: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: colors.gray,
    width: wp(90),
  },
  email: {
    textAlign: 'left',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: colors.black,
    marginHorizontal: wp(8),
    marginVertical: hp(1),
  },
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
});
