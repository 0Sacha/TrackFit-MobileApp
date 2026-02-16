import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

// Composant de la barre de navigation

const NavBarTop = () => {
    return (
            <View style = {style.navContainer}>
                <Image source={require('../src/images/plus.png')} style = {{width: 22, height:22}} />
                    <View style = {style.leftNavContent}>
                            <View style = {style.strikeIndicator}>
                                <Image source={require('../src/images/strike.png')} />
                                <Text style={{color: '#FFFFFF'}}>0</Text>
                            </View>
                        <Image source={require('../src/images/settings.png')} style = {{width: 22, height: 22}} />
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
            }
    })

export default NavBarTop;
