import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

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
            <Text></Text>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen