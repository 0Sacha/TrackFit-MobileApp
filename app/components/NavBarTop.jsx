import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const NavBarTop = () => {
    return (
            <View style = {style.navContainer}>
                <Text style={{color: 'grey', fontStyle:'italic'}}>Version bêta</Text>
                    <View style = {style.leftNavContent}>
                            <View style = {style.strikeIndicator}>
                                <FontAwesome6 name="fire-flame-curved" size={22} color="#FF4D00" />
                                <Text style={{color: '#FFFFFF'}}>0</Text>
                            </View>
                        <FontAwesome6 name="gear" size={22} color="white" />
                    </View>
            </View>
        )
    };


const style = StyleSheet.create({
        navContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 16,
            paddingRight: 16,
            },
        leftNavContent: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 26,
            },
        strikeIndicator: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap:5,
            fontSize:12,
            }
    })

export default NavBarTop;
