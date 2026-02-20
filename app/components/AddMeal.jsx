import {StyleSheet, View, Image, Button} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function AddMeal() {
  return (
      <View style = {style.container} >
          <View style = {style.containerButton} >
              <Button style = {style.button} title="Ajouter un repas" />
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
        marginTop: 46,
        backgroundColor: 'rgba(18, 24, 39, 0.00)',
        height: 50,
        width: '90%',
        paddingLeft: 14.7,
        paddingRight: 17.5,
        borderWidth: 1,
        borderColor: 'rgba(80, 80, 80, 0.23)',
        borderStyle: 'solid',
        borderRadius: 18
        },

    button: {
        display: 'flex',
        color: 'fff'
        },
    })