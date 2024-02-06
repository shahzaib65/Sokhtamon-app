import { View, Text, ScrollView, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const Aboutus = () => {
  return (
    <ScrollView>
    <View className="flex w-full h-full bg-[#F5F5F5]">
     <View className="flex flex-col " style={styles.service_view}>

     <View className=" flex justify-center items-center">
     <Text className="text-black text-center my-3" style={{fontFamily: 'Roboto-Bold',fontSize: 18}}>Давайте строить мечты
Давайте строить мечты вместе!</Text>
     <Text className="text-[#94A3B8] text-center" style={{fontFamily: 'Robot-Regular',fontSize:12}}>Добро пожаловать в Cохта-Mон, где инновации сочетаются с долговечностью, а мечты обретают форму. откройте для себя суть нашего пути, поскольку мы разделяем страсть и приверженность, которые побуждают нас предоставлять первоклассные строительные материалы. откройте для себя сердце нашей компании, где опыт и качество объединяются, чтобы создать основу для успеха. присоединяйтесь к нам на пути к совершенству, поскольку мы строим мир, в котором строительство сочетается с мастерством, а стремления становятся реальностью.</Text>
     </View>

   
     <View className="flex justify-center items-center" style={styles.sub_view}>
        <View className=" bg-white flex flex-col justify-start p-[5px] rounded-md shadow-bs">
                <View className='flex flex-row space-x-3'>
                   <Image className="w-4 h-4" source={require("../../assets/ellipse.png")}/>
                   <Text className="text-black" style={{fontFamily: 'Roboto-Bold',fontSize: 12}}>Коммерческие услуги</Text>
                </View>
                <Text className="text-[#94A3B8] mt-1" style={{fontFamily: 'Roboto-Regular',fontSize: 10}}>Наши бытовые приборы обеспечивают удобство и эффективность в повседневной жизни. От современных холодильников до интеллектуальных кофеварок - мы делаем ваш дом умным и комфортным.</Text>
               </View>
        </View>

        <View className="flex justify-center items-center mt-2" style={styles.sub_view}>
        <View className=" bg-white flex flex-col justify-start p-[5px] rounded-md shadow-bs">
                <View className='flex flex-row space-x-3'>
                   <Image className="w-4 h-4" source={require("../../assets/ellipse.png")}/>
                   <Text className="text-black" style={{fontFamily: 'Roboto-Bold',fontSize: 12}}>Жилищные услуги            </Text>
                </View>
                <Text className="text-[#94A3B8] mt-1" style={{fontFamily: 'Roboto-Regular',fontSize: 10}}>Резиденциальный сервис - идеальное сочетание комфорта и роскоши. Наши роскошные жилые
                 комплексы предлагают высший уровень обслуживания, безупречный дизайн и современные удобства. Почувствуйте себя как дома в окружении роскоши и беззаботности.                 </Text>
               </View>
        </View>

        <View className="flex justify-center items-center mt-2" style={styles.sub_view}>
        <View className=" bg-white flex flex-col justify-start p-[5px] rounded-md shadow-bs">
                <View className='flex flex-row space-x-3'>
                   <Image className="w-4 h-4" source={require("../../assets/ellipse.png")}/>
                   <Text className="text-black" style={{fontFamily: 'Roboto-Bold',fontSize: 12}}>Техника   </Text>
                </View>
                <Text className="text-[#94A3B8] mt-1" style={{fontFamily: 'Roboto-Regular',fontSize: 10}}>Наш коммерческий сервис - надежное решение для вашего бизнеса. Мы предоставляем широкий спектр услуг, включая консультации, маркетинг и техническую поддержку. Развивайтесь с нами и достигайте новых высот.</Text>
               </View>
        </View>

        <View className="flex justify-center items-center mt-2" style={styles.sub_view}>
        <View className=" bg-white flex flex-col justify-start p-[5px] rounded-md shadow-bs">
                <View className='flex flex-row space-x-3'>
                   <Image className="w-4 h-4" source={require("../../assets/ellipse.png")}/>
                   <Text className="text-black" style={{fontFamily: 'Roboto-Bold',fontSize: 12}}>Обслуживание</Text>
                </View>
                <Text className="text-[#94A3B8] mt-1" style={{fontFamily: 'Roboto-Regular',fontSize: 10}}>Наша служба технического обслуживания обеспечивает надежность и долговечность вашего оборудования. Опытные специалисты проводят регулярные проверки и ремонт, гарантируя бесперебойную работу. Ваше спокойствие - наш приоритет.</Text>
               </View>
        </View>
    
        <View className=" flex flex-col justify-center my-4" style={styles.outline_view}>
        <View className=" flex justify-center items-center my-3">
        <Image style={{width: 80, height: 80, borderRadius: 80/ 2}} 
            source={require('../../assets/market.png')}
          />
        </View>
          <Text className=" text-center text-black my-1" style={{fontFamily: 'Roboto-Bold',fontSize: 16}}>Рынки</Text>
          <Text className="text-center text-[#94A3B8] mb-2" style={styles.sub_title} >Рынки – это ваш надежный партнер в создании непревзойденных строительных проектов! Мы предоставляем широкий ассортимент высококачественных строительных материалов, чтобы удовлетворить потребности клиентов.</Text>
      </View>


      <View className=" flex flex-col justify-center my-4" style={styles.outline_view}>
        <View className=" flex justify-center items-center my-3">
        <Image style={{width: 80, height: 80, borderRadius: 80/ 2}} 
            source={require('../../assets/construction.png')}
          />
        </View>
          <Text className=" text-center text-black my-1" style={{fontFamily: 'Roboto-Bold',fontSize: 16}}>Строительный Материал</Text>
          <Text className="text-center text-[#94A3B8] mb-2" style={styles.sub_title} >Строительство - ключевая
Строительство - ключевая отрасль, формирующая городскую среду. От создания жилья до инфраструктурных проектов, строительство определяет облик и функциональность наших городов, обеспечивая комфорт и развитие.</Text>
      </View>
    

      <View className=" flex flex-col justify-center my-4" style={styles.outline_view}>
        <View className=" flex justify-center items-center my-3">
        <Image style={{width: 80, height: 80, borderRadius: 80/ 2}} 
            source={require('../../assets/door.png')}
          />
        </View>
          <Text className=" text-center text-black my-1" style={{fontFamily: 'Roboto-Bold',fontSize: 16}}>Двери/Окна</Text>
          <Text className="text-center text-[#94A3B8] mb-2" style={styles.sub_title} >Мы предлагаем широкий ассортимент дверей и окон, от классических дизайнов до современных трендов, чтобы удовлетворить самые изысканные вкусы. Все продукты изготовлены из высококачественных материалов, обеспечивая долговечность и надежность.</Text>
      </View>

      <View className=" flex flex-col justify-center my-4" style={styles.outline_view}>
        <View className=" flex justify-center items-center my-3">
        <Image style={{width: 80, height: 80, borderRadius: 80/ 2}} 
            source={require('../../assets/electronic.png')}
          />
        </View>
          <Text className=" text-center text-black my-1" style={{fontFamily: 'Roboto-Bold',fontSize: 16}}>Электрика</Text>
          <Text className="text-center text-[#94A3B8] mb-2" style={styles.sub_title} >Откройте для себя инновационные электрические решения и блестящие конструкции освещения. Наш опыт освещает пространство и открывает возможности для более светлого и эффективного будущего.</Text>
      </View>

      <View className=" flex flex-col justify-center my-4" style={styles.outline_view}>
        <View className=" flex justify-center items-center my-3">
        <Image style={{width: 80, height: 80, borderRadius: 80/ 2}} 
            source={require('../../assets/tools.png')}
          />
        </View>
          <Text className=" text-center text-black my-1" style={{fontFamily: 'Roboto-Bold',fontSize: 16}}>Инструменты/оборудование</Text>
          <Text className="text-center text-[#94A3B8] mb-2" style={styles.sub_title} >Ознакомьтесь с широким ассортиментом высококачественных инструментов и оборудования для любых задач. От прецизионных ручных инструментов до современного оборудования — мы предоставим вам все необходимое</Text>
      </View>


      <View className=" flex flex-col justify-center my-4" style={styles.outline_view}>
        <View className=" flex justify-center items-center my-3">
        <Image style={{width: 80, height: 80, borderRadius: 80/ 2}} 
            source={require('../../assets/plumbing.png')}
          />
        </View>
          <Text className=" text-center text-black my-1" style={{fontFamily: 'Roboto-Bold',fontSize: 16}}>Сантехника</Text>
          <Text className="text-center text-[#94A3B8] mb-2" style={styles.sub_title} >Экспертные сантехнические решения для бесперебойного потока воды и эффективного дренажа. Доверьте ремонт и установку нашим квалифицированным специалистам. Ваши потребности в сантехнике – наш приоритет.</Text>
      </View>

     </View>
    </View>
    </ScrollView>
  )
}

export default Aboutus

const styles = StyleSheet.create({
    service_view:{
        marginHorizontal: wp(0)
    },
    sub_view: {
        marginHorizontal: wp(5),
        marginVertical: hp(2)
    },
    outline_view: {
        borderColor: '#CBD5E1',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 'auto',
        marginHorizontal: wp(5)
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
})