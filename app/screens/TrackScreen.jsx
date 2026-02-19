import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

const TrackScreen = () => {
    return (
      <View style = {style.container}>
            <Text>Stats Screen</Text>
        </View>
    );
};

const style = StyleSheet.create({

        container: {
            display: 'flex',
            backgroundColor: 'black',
            flex: 1,
            color: '141319'
        },
})

export default TrackScreen;