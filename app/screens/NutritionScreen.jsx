import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import InfoDate from "../components/InfoDate"
import NavBarTop from "../components/NavBarTop"
import ProgressBarsKcal from "../components/ProgressBarsKcal"
import ProgressBarsMeal from "../components/ProgressBarsMeal"
import ProgressBarsLitre from "../components/ProgressBarsLitre"
import AddComment from "../components/AddComment"


const NutritionScreen = () => {
    const [date, setDate] = useState(new Date());

  return (
      <View style = {style.container}>
          <SafeAreaView />
          <NavBarTop />
          <View style = {{marginTop: 7, paddingLeft: 20, paddingRight: 20}}>
                      <Text style = {{fontSize: 30, fontWeight: 900, color: '#FFFFFF'}}>Repas</Text>
                      <Text style={{ fontSize: 15, fontWeight: '400', color: '#8D8D8D' }}>
                        {date.toLocaleDateString('fr-FR', {
                          weekday: 'long',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </Text>
                  </View>
          <View style = {style.progressContainer}>
            <View style = {style.singleProgressBars}>
                <ProgressBarsKcal />
            </View>
                <View style = {style.progressBars}>
                    <ProgressBarsMeal />
                    <ProgressBarsLitre />
                </View>
          </View>
      </View>
  )
};

const style = StyleSheet.create({

        container: {
            display: 'flex',
            backgroundColor: '#141319',
            flex: 1,
            color: '141319',
            marginTop: -30
        },
        progressContainer: {
            display: 'flex',
            marginTop: '75',
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
            marginTop: '75'
        }
    })

export default NutritionScreen;