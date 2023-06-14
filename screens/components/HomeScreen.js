import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeroImage } from '../../assets';


const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <SafeAreaView className="bg-white flex-1 relative">
        <View className="flex-row px-6 mt-8 items-center space-x-2">

            <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
            </View>

            <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>

        </View>

        <View className="px-6 mt-8 space-y-3">
            <Text className="text-[#2A2B4B] text-3xl">
                Create memories with
            </Text>
            <Text className="text-[#00BCC9] text-[42px] font-semibold">
                Your Travels 
            </Text>
            <Text className=" text-[#2A2B4B] text-base">
               Browse our broad range of holiday destinations and book your hotel and restaurant today.
            </Text>
        </View>

        <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
        <View className="w-[400px] h-[400px] bg-[#c90d00] rounded-full absolute -bottom-28 -left-36"></View>

        <View className="flex-1 items-center justify-center">
            <Animatable.Image
            animation="fadeIn"
            easing="ease-in-out" 
            source={HeroImage}
            className="w-full h-full object-cover mt-20"
            />
            
            <TouchableOpacity onPress={() => navigation.navigate("Discover")} className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
                    <Animatable.View 
                    animation={"pulse"}
                    easing="ease-in-out"
                    iterationCount={"infinite"}
                    className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                        <Text className="text-gray-50 text-[36px] font-semibold">
                            Go
                        </Text>
                    </Animatable.View>
            </TouchableOpacity>
        </View>

        

    </SafeAreaView>
  )
}

export default HomeScreen