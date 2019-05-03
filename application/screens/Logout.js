import React, { Component } from 'react'
import * as firebase from 'firebase';
import {Alert} from 'react-native';

export default class Logout extends Component {

    componentDidMount(){
        firebase.auth().signOut().then(()=>{
            Alert.alert("Cierre de Sesión","Has cerrad sesión");
        }).catch((error)=>{
            Alert.alert("Ups!","Ocurrió un error al cerrar sesión");
        });
    }

    render() {
        return null;
    }
}
