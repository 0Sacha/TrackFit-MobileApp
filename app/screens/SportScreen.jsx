import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MultiArcCircle } from 'react-native-circles';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import NavBarTop from "../components/NavBarTop"

const SportScreen = () => {
    const [date, setDate] = useState(new Date());

    return (
        <View style={style.container}>
            <SafeAreaView />
            <NavBarTop />
            <View style={{
                marginTop: 7,
                paddingLeft: 20,
                paddingRight: 20,
                justifyContent: 'space-between',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'start'
            }}>
                <View>
                    <Text style={{ fontSize: 30, fontWeight: 900, color: '#FFFFFF' }}>Course à pied</Text>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: '#8D8D8D' }}>
                        {date.toLocaleDateString('fr-FR', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </Text>
                </View>
                <View>
$                </View>
            </View>
            <View style={style.progressContainer}>
                <View style={style.singleProgressBars}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <MultiArcCircle radius={75} intervals={[{ start: -100, end: 100 }]} color="#454545" backgroundColor="transparent" width={17} />
                        <MultiArcCircle radius={75} intervals={[{ start: -100, end: -100 }]} color="#F00" backgroundColor="transparent" width={17} />
                        <Text style={{ color: '#FFFFFF', fontSize: '24', fontWeight: '900' }}>0 pas</Text>
                        <Text style={{ color: '#9A9A9A', fontSize: '12', fontWeight: '900' }}>Restant</Text>
                    </View>
                </View>
                <View style={style.progressBars}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <MultiArcCircle radius={75} intervals={[{ start: -100, end: 99 }]} color="#454545" backgroundColor="transparent" width={17} />
                        <MultiArcCircle radius={75} intervals={[{ start: -100, end: -100 }]} color="#F00" backgroundColor="transparent" width={17} />
                        <Text style={{ color: '#FFFFFF', fontSize: '24', fontWeight: '900' }}>0/3</Text>
                        <Text style={{ color: '#9A9A9A', fontSize: '12', fontWeight: '900' }}>Séances</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <MultiArcCircle radius={75} intervals={[{ start: -100, end: 100 }]} color="#454545" backgroundColor="transparent" width={17} />
                        <MultiArcCircle radius={75} intervals={[{ start: -100, end: -100 }]} color="#F00" backgroundColor="transparent" width={17} />
                        <Text style={{ color: '#FFFFFF', fontSize: '24', fontWeight: '900' }}>0/3 Km</Text>
                        <Text style={{ color: '#9A9A9A', fontSize: '12', fontWeight: '900' }}>Distances</Text>
                    </View>
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

export default SportScreen;