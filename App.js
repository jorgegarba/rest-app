import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './application/components/AppButton';
import PreLoader from './application/components/PreLoader';
import BackgroundImage from './application/components/BackgroundImage';
import Start from './application/screens/Start';
import Login from './application/screens/Login';
import GuestNavigator from './application/navigations/guest';

import * as firebase from 'firebase';
import firebaseConfig from './application/utils/firebase';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      isLogged: false,
      loaded: false,
    };

    // firebase.auth().signOut();
  }

  componentDidMount(){
    // Función que se ejecuta cuando la
    // sesión del usuario cambia
    firebase.auth().onAuthStateChanged(user=>{
      if(!user){
        // no tenga la sesión iniciada
        this.setState({
          isLogged:false,
          loaded: true
        });
      }else{
        // el usuario tiene sesión iniciada
        this.setState({
          isLogged:true,
          loaded: true
        });
      }
    })
  }

  render() {
    const {isLogged, loaded} = this.state;
    if(!loaded){
      // mostrar un spinner de carga
      return(<PreLoader></PreLoader>)
    }
    if(isLogged){
      // el usuario ya tenia una sesion activa
      return (<Text>MOSTRAR SCREEN DE USUARIOS LOGGEADOS</Text>)
    }else{
      return (<GuestNavigator/>)
    }
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
