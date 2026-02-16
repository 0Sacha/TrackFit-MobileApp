import React from 'react';
import {StyleSheet, View, Image, Button} from 'react-native';
import { MultiArcCircle } from 'react-native-circles';
import {Text} from 'react-native';

export default function AddComment() {
  return (
      <View style = {style.container} >
          <View style = {style.containerButton} >
              <Button style = {style.button} title="Ajouter un commentaire"/>
              <Image style = {style.images} source={require('../src/images/plus.png')}/>
          </View>
      </View>
  );
};

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'fff',
        textDecorationStyle: 'none',
        marginTop: '46',
        backgroundColor: 'rgba(18, 24, 39, 0.00)',
        height: 50,
        width: '90%',
        paddingLeft: 14.7,
        paddingRight: 17.5,
        borderWidth: 1,
        borderColor: 'rgba(80, 80, 80, 0.23)',
        borderStyle: 'solid',
        borderRadius: 50
        },

    button: {
        display: 'flex',
        color: 'fff'
        },

    images: {
        height: '20',
        width: '20'
        }
    })