import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import { FontAwesome } from '@react-native-vector-icons/fontawesome6';
import HomeScreen from '../screens/HomeScreen';
import SportScreen from '../screens/SportScreen';
import NutritionScreen from '../screens/NutritionScreen';
import TrackScreen from '../screens/TrackScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false, tabBarStyle:{backgroundColor:'#141319', borderColor:'#505050', }}}>
      <Tab.Screen name="Accueil" component={HomeScreen} 
      options={{tabBarIcon:() => <FontAwesomeIcon icon="fa-solid fa-house" style={{color: "rgb(255, 255, 255)",}} /> }}/>
      <Tab.Screen name="Sport" component={SportScreen}
      options={{tabBarIcon:() => <MaterialIcons name="sports-handball" size={24} color="white" /> }}/>
      <Tab.Screen name="Nutrition" component={NutritionScreen}       
      options={{tabBarIcon:() => <Image source={require('../src/images/HomePage.png')} style={{width:24, height:24}} /> }}/>
      <Tab.Screen name="Traqueur" component={TrackScreen}
      options={{tabBarIcon:() => <MaterialCommunityIcons name="home-outline" size={24} color="white" /> }}/>
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({

    })

export default NavBar;