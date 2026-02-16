import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import { MultiArcCircle } from 'react-native-circles';

export default function ProgressBarsMeal() {

    const [progress, setProgress] = useState(-100);
    const [meal, setMeal] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <MultiArcCircle radius={100} intervals={[{ start: -100, end:99}]} color="#454545" backgroundColor="transparent" width={17}/>
      <MultiArcCircle radius={100} intervals={[{ start: -100, end: progress}]} color="#FF8000" backgroundColor="transparent" width={17}/>
      <Text style={{color: '#FFFFFF', fontSize: '24', fontWeight: '900'}}>{meal}/3</Text>
      <Text style={{color: '#9A9A9A', fontSize: '12', fontWeight: '900'}}>Repas</Text>
      <Button onPress={() => {setProgress(progress + 66 > 100 ? 100 : progress + 66), setMeal(meal + 1 > 3 ? 3 : meal + 1)} } title='ajouter un repas' />
    </View>
  );
}