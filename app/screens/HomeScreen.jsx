import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InfoDate from "../components/InfoDate"
import NavBarTop from "../components/NavBarTop"
import ProgressBarsKcal from "../components/ProgressBarsKcal"
import ProgressBarsMeal from "../components/ProgressBarsMeal"
import ProgressBarsLitre from "../components/ProgressBarsLitre"
import AddMeal from "../components/AddMeal"
import AddComment from "../components/AddComment"

const HomeScreen = () => {
    const [progress, setProgress] = useState(-100);

  return (
      <View style = {style.container}>
          <NavBarTop />
          <InfoDate />
          <View style = {style.progressContainer}>
            <View style = {style.singleProgressBars}>
                <ProgressBarsKcal />
            </View>
                <View style = {style.progressBars}>
                    <ProgressBarsMeal />
                    <ProgressBarsLitre />
                </View>
          </View>
          <AddComment />
      </View>
  )
};

const style = StyleSheet.create({

        container: {
            display: 'flex',
            backgroundColor: 'black',
            flex: 1,
            color: '141319'
        },
        progressContainer: {
            display: 'flex',
            marginTop: '150',
            alignContent: 'center',
            color: 'fff'
        },

        singleProgressBars: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },

        progressBars: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '145'
        }
    })

export default HomeScreen;