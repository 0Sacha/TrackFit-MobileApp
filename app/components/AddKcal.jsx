import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MultiArcCircle } from 'react-native-circles';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function AddWater() {
    return (
        <View style={style.container} >
            <View style={style.containerButton} >
                <FontAwesome6 name="minus" size={24} color="white" />
                <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 900 }}>0 Kcal</Text>
                <FontAwesome6 name="plus" size={20} color="white" />
            </View>
        </View>
    );

};  

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'fff',
        textDecorationStyle: 'none',
        backgroundColor: 'rgba(18, 24, 39, 0.00)',
        height: 50,
        width: '90%',
        paddingLeft: 14.7,
        paddingRight: 17.5,
        },
    })