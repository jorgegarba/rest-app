import React, { Component } from 'react'
import AppButton from './../AppButton';
import {View, StyleSheet} from 'react-native';

export default class RestaurantAddButton extends Component {
  render() {
    const miFuncion = this.props.miFuncion;
    return (
        <View style={styles.buttonContainer}>
            <AppButton  bgColor="rgba(255,38,74,0.6)"
                        title="Añadir Restaurant"
                        iconName="plus"
                        iconSize={30}
                        iconColor="#fff"
                        setWidth={true}
                        action={miFuncion}/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    buttonContainer:{
        position:'absolute',
        alignSelf:'flex-end',
        bottom:0,
        backgroundColor:'rgba(0,0,0,0.5)'
    }
});