import React, { useState } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const InfoDate = () => {
    const [date, setDate] = useState(new Date());
    return (
        <View style = {{marginTop: 7, paddingLeft: 20, paddingRight: 20}}>
            <Text style = {{fontSize: 30, fontWeight: 900, color: '#FFFFFF'}}>Aujourd’hui</Text>
            <Text style={{ fontSize: 15, fontWeight: '400', color: '#8D8D8D' }}>
              {date.toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </Text>
        </View>
    )
}
export default InfoDate;

