import {Text, View } from 'react-native';
import { MultiArcCircle } from 'react-native-circles';

export default function ProgressBarsLitre() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <MultiArcCircle radius={75} intervals={[{ start: -100, end:100}]} color="#454545" backgroundColor="transparent" width={17}/>
     <MultiArcCircle radius={75} intervals={[{ start: -100, end:-100}]} color="#F00" backgroundColor="transparent" width={17}/>
      <Text style={{color: '#FFFFFF', fontSize: '24', fontWeight: '900'}}>0/3</Text>
      <Text style={{color: '#9A9A9A', fontSize: '12', fontWeight: '900'}}>Litres</Text>
    </View>
  );
}