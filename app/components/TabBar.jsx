import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import HomeScreen from '../screens/HomeScreen';
import SportScreen from '../screens/SportScreen';
import NutritionScreen from '../screens/NutritionScreen';
import TrackScreen from '../screens/TrackScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false, tabBarStyle:{backgroundColor:'#141319', borderColor:'#transparent', paddingTop:15 }}}>
      <Tab.Screen name="Accueil" component={HomeScreen} 
      options={{tabBarIcon:() => <MaterialIcons name="home" size={24} color="white" /> }}/>
      <Tab.Screen name="Sport" component={SportScreen}
      options={{tabBarIcon:() => <MaterialIcons name="sports-handball" size={24} color="white" /> }}/>
      <Tab.Screen name="Nutrition" component={NutritionScreen}       
      options={{tabBarIcon:() => <FontAwesome6 name="bowl-food" size={24} color="white" /> }}/>
      <Tab.Screen name="Traqueur" component={TrackScreen}
      options={{tabBarIcon:() => <Entypo name="gauge" size={24} color="white" /> }}/>
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({

    })

export default TabBar;