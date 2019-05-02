import React from 'react';
import { StyleSheet } from 'react-native';
import PreLoader from './application/components/PreLoader';

import GuestNavigator from './application/navigations/guest';
import LoggedNavigator from './application/navigations/logged';


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

    firebase.auth().signOut();
  }

  async componentDidMount(){
    // Función que se ejecuta cuando la
    // sesión del usuario cambia
    await firebase.auth().onAuthStateChanged(user=>{
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
      return (<LoggedNavigator/>)
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
