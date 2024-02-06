import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {cities} from '../Services/citySlice';
import * as Yup from 'yup';
import {Formik} from 'formik';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {colors} from '../../theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

const EditProfile = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const navigation = useNavigation();

  const [selectGender, setSelectGender] = useState(null);
  const [gender, setGender] = useState([
    {
      label: 'Мужской',
      value: 'Мужской',
    },
    {
      label: 'Женский',
      value: 'Женский',
    },
  ]);

  const [loading, setLoading] = useState(false);


  const placeholder = {
    label: 'Выберите пол',
    value: null,
  };

  const postSchema = Yup.object().shape({
    name: Yup.string().required('Требуется имя'),
    surname: Yup.string().required('Требуется фамилия'),
    telephone: Yup.string().required('Требуется телефон')
  });

  useEffect(() => {
    dispatch(cities());
  }, []);

  let userID = ''
  useEffect(()=>{
    getId(); 
  },[userID])

const getId = async()=>{
  userID = await AsyncStorage.getItem("id")
  console.log(userID)
}


  function apiCall(values, {resetForm}) {
    console.log(userID)
    setLoading(true);
    let data = {
        "first": values.name,
        "last": values.surname,
        "id": userID,
        "gender": selectGender,
        "mobile": values.telephone
    }
    console.log(data)
    const config = {
      headers: {'content-type': 'application/json'},
    };
//  axios
//       .post(
//         'https://sokhtamon-backend-production.up.railway.app/api/user/update',
//         config,
//         data
//       )
//       .then(response => {
//         setLoading(false);
//         showAlert(
//           'Профиль',
//           'Ваш профиль обновлен',
//         );
//         console.log(response.data);
//         resetForm();
//       })
//       .catch(error => {
//         setLoading(false);
//         console.log(error);
//         resetForm();
//         // setError(error)
//       });
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex w-full h-full bg-white">
      <Formik
        initialValues={{
          name: '',
          surname: '',
          telephone: '',
        }}
        validationSchema={postSchema}
        onSubmit={apiCall}>
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setFieldTouched,
          isValid,
        }) => (
          <>
            <View className=" flex flex-col">
              <Text
                className="text-black ml-8 my-2"
                style={{fontFamily: 'Roboto-Medium', fontSize: 13}}>
                 Пол
              </Text>
              <View
                className="rounded-md bg-[#F8F8F8]"
                style={styles.drop_view}>
                <RNPickerSelect
                  placeholder={placeholder}
                  items={gender}
                  onValueChange={value => setSelectGender(value)}
                  value={selectGender}
                />
              </View>
            </View>

            <View className=" flex flex-col">
              <Text
                className="text-black ml-8 my-2"
                style={{fontFamily: 'Roboto-Medium', fontSize: 13}}>
                Имя
              </Text>
              <TextInput
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
                className=" rounded-md bg-[#F8F8F8]"
                style={styles.input_view}></TextInput>
            </View>
            {touched.name && errors.name && (
              <Text style={styles.error_text}>{errors.name}</Text>
            )}

            <View className=" flex flex-col">
              <Text
                className="text-black ml-8 my-2"
                style={{fontFamily: 'Roboto-Medium', fontSize: 13}}>
                Фамилия
              </Text>
              <TextInput
                className=" rounded-md bg-[#F8F8F8]"
                style={styles.input_view}
                value={values.surname}
                onChangeText={handleChange('surname')}
                onBlur={() => setFieldTouched('surname')}></TextInput>
            </View>
            {touched.surname && errors.surname && (
              <Text style={styles.error_text}>{errors.surname}</Text>
            )}
            <View className=" flex flex-col">
              <Text
                className="text-black ml-8 my-2"
                style={{fontFamily: 'Roboto-Medium', fontSize: 13}}>
                Tелефон
              </Text>
              <TextInput
                className=" rounded-md bg-[#F8F8F8]"
                style={styles.input_view}
                value={values.telephone}
                onChangeText={handleChange('telephone')}
                onBlur={() => setFieldTouched('telephone')}></TextInput>
            </View>
            {touched.telephone && errors.telephone && (
              <Text style={styles.error_text}>{errors.telephone}</Text>
            )}

            <TouchableOpacity
              disabled={!isValid}
              onPress={handleSubmit}
              className=" my-8 rounded-md flex 
        justify-center"
              style={styles.continue_view}>
              {loading ? (
                <View className=" flex justify-center">
                  <ActivityIndicator
                    size="large"
                    color="#fff"
                    className="items-center"
                  />
                </View>
              ) : (
                <Text
                  className=" text-center text-white"
                  style={{fontFamily: 'Roboto-Bold', fontSize: 16}}>
                  Сохранять
                </Text>
              )}
            </TouchableOpacity>

        
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  input_view: {
    marginHorizontal: wp(8),
    height: hp(6),
    paddingHorizontal: 4,
  },
  drop_view: {
    marginHorizontal: wp(8),
    height: 'auto',
    paddingBottom: 5,
    paddingHorizontal: 0,
  },
  text_area_view: {
    marginHorizontal: wp(8),
    height: hp(14),
    paddingHorizontal: 4,
    textAlignVertical: 'top',
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
    marginHorizontal: wp(4),
  },
  continue_view: {
    marginHorizontal: wp(8),
    backgroundColor: colors.primary,
    height: hp(7),
  },
  error_text: {
    marginHorizontal: wp(8),
    color: 'red',
    marginTop: 2,
  },
});
