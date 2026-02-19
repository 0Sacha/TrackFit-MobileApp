import {Text, View } from 'react-native';
import { MultiArcCircle } from 'react-native-circles';

export default function ProgressBarsMeal() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <MultiArcCircle radius={75} intervals={[{ start: -100, end:99}]} color="#454545" backgroundColor="transparent" width={17}/>
     <MultiArcCircle radius={75} intervals={[{ start: -100, end:-100}]} color="#FF8000" backgroundColor="transparent" width={17}/>
      <Text style={{color: '#FFFFFF', fontSize: '24', fontWeight: '900'}}>0/3</Text>
      <Text style={{color: '#9A9A9A', fontSize: '12', fontWeight: '900'}}>Repas</Text>
    </View>
  );
}