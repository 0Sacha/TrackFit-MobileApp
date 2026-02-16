import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import { FontAwesome } from '@react-native-vector-icons/fontawesome6';
import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createNativeBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}


const style = StyleSheet.create({

    })

export default NavBar;