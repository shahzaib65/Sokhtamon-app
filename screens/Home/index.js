import {View, Text, StyleSheet, Image, TouchableOpacity,TextInput,FlatList,ActivityIndicator, ScrollView,useColorScheme} from 'react-native';
import React,{useRef,useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {categoryWise, post} from './postSlice';
import moment from "moment";
import { useNavigation } from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Home() {
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? '#000000' : '#000000';
const categories = [
  {
    category: "Рынки",
    id: "1"
  },
  {
    category: "Техника",
    id: "2"
  },
  {
    category: "Декоративные материалы",
    id: "3"
  },
  {
    category: "Крепежи и Tакелаж",
    id: "4"
  },
  {
    category: "Сантехника",
    id: "5"
  },
  {
    category: "Инженерные системы",
    id: "6"
  },
  {
    category: "Инструменты и Оборудование",
    id: "7"
  }, {
    category: "Электрика и Освещение",
    id: "8"
  }, {
    category: "Двери и Окна",
    id: "9"
  }, {
    category: "Строительные материалы",
    id: "10"
  },
  {
    category: "Запчасти",
    id: "11"
  },
  {
    category: "Оптом",
    id: "12"
  }


]
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [categorydata, setData] = useState(categories);
  const [selectedCategory, setSelectedCategory] = useState('');
   const searchRef = useRef();
  const onSearch = search => {
    if (search !== '') {
      let tempData = categorydata.filter(item => {
        return item.category.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(categories);
    }
  };
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(()=>{
   dispatch(post())
  },[])
  return (
    <View className=" flex w-full h-full bg-white">
      <View className=" flex flex-col h-full w-full">
    <TouchableOpacity
      style={{
          width: '90%',
          height: 50,
          borderRadius: 10,
          borderWidth: 0.5,
          alignSelf: 'center',
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
        }}
        onPress={() => {
          setClicked(!clicked);
        }}
    >
    <Text style={{fontWeight:'600',color: textColor}}>
          {selectedCategory == '' ? 'Bыберите категорию' : selectedCategory}
        </Text>
        <Image
            source={require('../../assets/drop_down.png')}
            style={{width: 20, height: 20}}
          />

    </TouchableOpacity>
     {
      clicked ? (
     <View
      style={{
            elevation: 5,
            marginTop: 20,
            height: 300,
            alignSelf: 'center',
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 10,
          }}
     >
       <TextInput
            placeholder="Поиск.."
            value={search}
            ref={searchRef}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }}
            style={{
              width: '90%',
              height: 50,
              alignSelf: 'center',
              borderWidth: 0.4,
              borderColor: '#8e8e8e',
              borderRadius: 7,
              marginTop: 20,
              paddingLeft: 20,
             color: textColor
              
            }}
          />
          <FlatList
            data={categorydata}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 0.5,
                    borderColor: '#8e8e8e',
                  }}
                  onPress={() => {
                    dispatch(categoryWise(item.category))
                    setSelectedCategory(item.category);
                    setClicked(!clicked);
                    onSearch('');
                    setSearch('');
                  }}>
                  <Text style={{fontWeight: '600',color: textColor}}>{item.category}</Text>
                </TouchableOpacity>
              );
            }}
          />

     </View>
      ): null
     }
      


      <View className=" flex justify-center items-center">
  <Text className=" text-black my-2" style={{fontFamily: 'Roboto-Bold',fontSize: 20}}>Новые объявления</Text>
      </View>    
<>
        <FlatList
        data={state.post.data}
        scrollEnabled={true}
        renderItem={({item}) => 
       <ScrollView>
         <TouchableOpacity key= {item._id} onPress={()=>navigation.navigate("jobDetail",{id: item._id})} className=" flex flex-col justify-center" style={styles.outline_view}>
           <Image style={styles.top_image}
            className="rounded-tl rounded-tr"
            source={{uri: item.post_image_url}}
          />
           <Text className=" text-left mx-2 my-0.5 text-black" style={{fontFamily: 'Roboto-Medium',fontSize: 16}}>{item.post_heading}</Text>
          <Text className="text-left mx-2 text-[#94A3B8]" style={styles.sub_title}>{item.description}</Text>

          <View className=" flex flex-row justify-start items-start mx-2 my-1">
       <Text className=" text-[#5271FF]" style={{fontFamily: 'Roboto-Bold',fontSize:14}}>Сомони :</Text>
        <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize:14}}>{item.price}</Text>
       </View>

       <View className=" flex flex-row justify-start items-start mx-2  my-1 space-x-2">
       <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize:14}}>{moment(item.createdAt).format('YYYY-MM-DD')}</Text>
       <Text className=" mb-0.5 text-black">|</Text>
       <Text className=" text-black" style={{fontFamily: 'Roboto-Bold',fontSize:14}}>{ moment(item.createdAt).format('HH:mm')}</Text>
       </View>

       <View className=" mx-12 my-3 bg-primary flex justify-center items-center rounded">
       <Text className="text-white text-base pb-2 pt-1 w-auto px-2"
                  >
                  {item.plan}
                </Text>
       </View>
        </TouchableOpacity>
       </ScrollView>
        }
        keyExtractor={item => item._id}
      />

</>
      </View>
    </View>
  );
}

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
    height: 'auto',
    marginTop: 10,
    marginBottom:10,
    paddingHorizontal: 5,
    marginHorizontal:10
  },
  top_image: {
    height: hp(28),
    width: '100%'
  },
  sub_title: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    marginHorizontal: wp(3)
  }
});
