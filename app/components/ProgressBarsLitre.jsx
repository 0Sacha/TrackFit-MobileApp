import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import { MultiArcCircle } from 'react-native-circles';

export default function ProgressBarsLitre() {

    const [progress, setProgress] = useState(-100);
    const [water, setWater] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MultiArcCircle radius={100} intervals={[{ start: -100, end:100}]} color="#454545" backgroundColor="transparent" width={17}/>
        <MultiArcCircle radius={100} intervals={[{ start: -100, end: progress}]} color="#F00" backgroundColor="transparent" width={17}/>
        <Text style={{color: '#FFFFFF', fontSize: '24', fontWeight: '900'}}>{water}/3</Text>
        <Text style={{color: '#9A9A9A', fontSize: '12', fontWeight: '900'}}>Litres</Text>
        <Button onPress={() => {setProgress(progress + 66 > 100 ? 100 : progress + 66), setWater(water + 1 > 3 ? 3 : water + 1)}} title="Ajouter un litre" />
    </View>
  );
}