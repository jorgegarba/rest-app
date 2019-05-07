import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class CommentEmpty extends Component {
  render() {
    return (
      <View style={styles.commentView}>
        <Text style={styles.commentText}>
            No hay comentarios, sé el primero en comentar.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    commentView:{
        justifyContent:'center',
        flex:1,
        marginTop:10,
        marginBottom:10
    },
    commentText:{
        backgroundColor: 'rgba(10,255,10,0.8)',
        color:'white',
        textAlign: 'center',
        padding: 20
    }
});