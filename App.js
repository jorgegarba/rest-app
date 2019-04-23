import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './application/components/AppButton';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppButton title = "Ejemplo"
                   iconName = "sign-in"
                   bgColor = "rgba(255,38,74,0.6)"
                   iconSize = {30}
                   action= {()=>{console.log(1);}}
                   iconColor = "#fff"
                   setWidth = {true}/>
        <AppButton title = "Otro titulo"
                   iconName = "sign-out"
                   bgColor = "rgba(255,38,74,0.6)"
                   iconSize = {30}
                   action= {()=>{console.log(1);}}
                   iconColor = "#fff"
                   setWidth = {true}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
