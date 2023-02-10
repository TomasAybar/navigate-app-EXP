import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export const HomeScreen = () => {


    const navigation = useNavigation();

    return (
        <View style={style.container}>

            <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('StackScreen')}>
                <Text style={style.btnText}>HomeScreen</Text>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    btn: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'purple',
        marginTop: 5,
    },
    btnText: {
        color: '#fff',
        fontSize: 18
    }

})