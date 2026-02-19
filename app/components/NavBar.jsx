import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import { FontAwesome } from '@react-native-vector-icons/fontawesome6';
import HomeScreen from '../screens/HomeScreen';
import SportScreen from '../screens/SportScreen';
import NutritionScreen from '../screens/NutritionScreen'
import TrackScreen from '../screens/TrackScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Sport" component={SportScreen} />
      <Tab.Screen name="Nutrition" component={NutritionScreen} />
      <Tab.Screen name="Track" component={TrackScreen} />
    </Tab.Navigator>
  );
}


const style = StyleSheet.create({

    })

export default NavBar;