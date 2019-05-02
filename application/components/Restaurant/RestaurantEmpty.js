import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class RestaurantEmpty extends Component {
  render() {
    return (
      <View style={styles.resturantEmptView}>
        <Text style={styles.restaurantEmptyText}>
            No hay restaurants disponibles
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    resturantEmptView:{
        justifyContent:'center',
        flex:1,
        marginTop:10,
        marginBottom:10,
    },
    restaurantEmptyText:{
        backgroundColor:'rgba(10,255,10,0.8)',
        color:'white',
        textAlign:'center',
        padding:20
    }
})