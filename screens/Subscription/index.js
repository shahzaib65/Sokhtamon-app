import { View, Text, ScrollView, Image,TouchableOpacity } from 'react-native'
import React from 'react'

import cross from "../../assets/cross.png"
export default function Subscription() {
  return (
    <ScrollView className=" flex w-full h-full bg-white">
      <View className=" flex flex-col justify-center items-center mt-2">
      <Text className="text-2xl font-medium  capitalize text-black">Наш ценовой план</Text>

      <Text className=" w-auto h-auto mt-4 font-medium text-center">
                Выберите план, который подходит вам лучше всего. Ваш рост является нашим приоритетом, и наши тарифные планы созданы для того, чтобы стать вашими надежными спутниками на этом пути.
                </Text>

           <View className="mx-2 mt-2 w-[90%] border-[#8e8e8e] border-2 rounded-md h-auto">
           <View className=" flex flex-col justify-center">
           <Text className="text-xl font-medium  text-center capitalize lg:text-2xl text-black">Стандартный</Text>
           <Text className="mt-0 text-black mx-2">
                            Стандартный план предназначен для отдельных лиц или мелких пользователей, которые стремятся изучить нашу платформу и ее основные функции.
                            </Text>
                            <Text className="mt-4 text-2xl font-semibold text-black sm:text-3xl dark:text-gray-300 text-center">Стандартный/Месяц</Text>      

                             <View className="p-6">
                            <Text className="text-lg font-medium  capitalize lg:text-xl text-black">Что включено:</Text>

                            <View className="mt-5 space-y-4">
                                <View className="flex items-center flex-row">
                                    <Image className=" w-8 h-8" source={cross}/>
                                    <Text className="mx-4 text-black">Базовый доступ</Text>
                                </View>

                                <View className="flex items-center flex-row">
                                <Image className=" w-8 h-8" source={cross}/>

                                    <Text className="mx-4 text-black">Ограниченное использование</Text>
                                </View>

                                <View className="flex items-center flex-row">
                                <Image className="w-8 h-8" source={cross}/>

                                    <Text className="mx-4 text-black">Приоритетная поддержка</Text>
                                </View>

                               
                            </View>
                        </View>         
           </View>
           </View>     


           <View className="mx-2 mt-2 w-[90%] border-[#8e8e8e] border-2 rounded-md h-auto">
           <View className=" flex flex-col justify-center items-center">
           <Text className="text-xl font-medium  text-center capitalize lg:text-2xl text-black">Золотой</Text>
           <Text className="mt-0 text-black mx-2">
           Золотой план идеально подходит для людей, предприятий и профессионалов, которые требуют высочайшего уровня обслуживания, производительности и поддержки.
                            </Text>
                            <Text className="mt-4 text-2xl font-semibold text-black sm:text-3xl  text-center">$4.99/Месяц</Text>    

                            <TouchableOpacity  className="w-[80%] flex justify-center items-center px-4 py-2 mt-6 tracking-wide text-white-A700 capitalize bg-[#F4932D] rounded-md focus:outline-none  " onClick={()=>{
                              // makePament(4.99,"Золотой");
                        
                            }}>
                               <Text className=" text-white"> Выберите план</Text>
                            </TouchableOpacity>  

                             <View className="p-6">
                            <Text className="text-lg font-medium  capitalize lg:text-xl text-black">Что включено:</Text>

                            <View className="mt-5 space-y-4">
                                <View className="flex items-center flex-row">
                                    <Image className=" w-8 h-8" source={cross}/>
                                    <Text className="mx-4 text-black">Неограниченный доступ</Text>
                                </View>

                                <View className="flex items-center flex-row">
                                <Image className=" w-8 h-8" source={cross}/>

                                    <Text className="mx-4 text-black">Больше просмотров</Text>
                                </View>

                                <View className="flex items-center flex-row">
                                <Image className="w-8 h-8" source={cross}/>

                                    <Text className="mx-4 text-black">Приоритетная поддержка</Text>
                                </View>

                                <View className="flex items-center flex-row">
                                <Image className="w-8 h-8" source={cross}/>

                                    <Text className="mx-4 text-black">Ранний доступ к функциям</Text>
                                </View>

                                <View className="flex items-center flex-row">
                                <Image className="w-8 h-8" source={cross}/>

                                    <Text className="mx-4 text-black">КОграниченное использование</Text>
                                </View>

                                <View  className="flex items-center flex-row">
                                <Image className="w-8 h-8" source={cross}/>

                                    <Text className="mx-4 text-black">Круглосуточная VIP-поддержка</Text>
                                </View>

                                <View  className="flex items-center flex-row">
                                <Image className="w-8 h-8" source={cross}/>

                                    <Text className="mx-4 text-black">Ранний доступ к бета-функциям</Text>
                                </View>
                            </View>
                        </View>         
           </View>
           </View>   

           <View className="mx-2 mt-2 w-[90%] border-[#8e8e8e] border-2 rounded-md h-auto">
           <View className=" flex flex-col justify-center items-center">
           <Text className="text-xl font-medium  text-center capitalize lg:text-2xl text-black">Премиум</Text>
           <Text className="mt-0 text-black mx-2">
           Премиум план предназначен для профессионалов, бизнеса и предприятий, которые требуют максимальной производительности, поддержки и настройки.
                            </Text>
                            <Text className="mt-4 text-2xl font-semibold text-black sm:text-3xl  text-center">$9.99/Месяц</Text>    

                            <TouchableOpacity  className="w-[80%] flex justify-center items-center px-4 py-2 mt-6 tracking-wide text-white-A700 capitalize bg-[#F4932D] rounded-md focus:outline-none  " onClick={()=>{
                              // makePament(4.99,"Золотой");
                        
                            }}>
                               <Text className=" text-white"> Выберите план</Text>
                            </TouchableOpacity>  

                             <View className="p-6">
                            <Text className="text-lg font-medium  capitalize lg:text-xl text-black">Что включено:</Text>

                            <View className="mt-5 space-y-4">
                                <View className="flex items-center flex-row">
                                    <Image className=" w-8 h-8" source={cross}/>
                                    <Text className="mx-4 text-black">Неограниченный доступ</Text>
                                </View>

                                <View className="flex items-center flex-row">
                                <Image className=" w-8 h-8" source={cross}/>

                                    <Text className="mx-4 text-black">Неограниченное использование</Text>
                                </View>

                                <View className="flex items-center flex-row">
                                <Image className="w-8 h-8" source={cross}/>

                                    <Text className="mx-4 text-black">Приоритетная поддержка</Text>
                                </View>

                                <View className="flex items-center flex-row">
                                <Image className="w-8 h-8" source={cross}/>

                                    <Text className="mx-4 text-black">Неограниченные просмотры</Text>
                                </View>

                                <View className="flex items-center flex-row">
                                <Image className="w-8 h-8" source={cross}/>

                                    <Text className="mx-4 text-black">Ранний доступ к функциям</Text>
                                </View>

                                <View  className="flex items-center flex-row">
                                <Image className="w-8 h-8" source={cross}/>

                                    <Text className="mx-4 text-black">Круглосуточная VIP-поддержка</Text>
                                </View>

                                <View  className="flex items-center flex-row">
                                <Image className="w-8 h-8" source={cross}/>

                                    <Text className="mx-4 text-black">Ранний доступ к бета-функциям</Text>
                                </View>
                            </View>
                        </View>         
           </View>
           </View>  

      </View>
    </ScrollView>
  )
}