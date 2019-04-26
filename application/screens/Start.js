import React, { Component } from 'react'
import BackgroundImage from '../components/BackgroundImage';
import AppButton from './../components/AppButton';
import { View } from 'react-native';

import {NavigationActions} from 'react-navigation';
export default class Start extends Component {

    static navigationOptions = {
        title: 'Rest-App CodiGo'
    }

    login() {
        const navegador = NavigationActions.navigate({
            routeName:'Login'
        });

        this.props.navigation.dispatch(navegador);
    }
    register() {

    }
    facebook() {

    }

    render() {
        return (
            <BackgroundImage source={require('./../../assets/images/bg1.jpg')}>
                <View style={{ justifyContent: "center", flex: 1 }}>
                    <AppButton bgColor="rgba(220,100,20,0.7)"
                        iconName="sign-in"
                        title="Iniciar Sesión"
                        iconSize={30}
                        iconColor="#fff"
                        action={this.login.bind(this)}
                        setWidth={true} />
                    <AppButton bgColor="rgba(220,200,50,0.7)"
                        iconName="user-plus"
                        title="Registrarme"
                        iconSize={30}
                        iconColor="#fff"
                        action={this.register.bind(this)}
                        setWidth={true} />
                    <AppButton bgColor="rgba(69,69,146,0.7)"
                        iconName="facebook"
                        title="Facebook"
                        iconSize={30}
                        iconColor="#fff"
                        action={() => { console.log(1); }}
                        setWidth={true} />
                </View>
            </BackgroundImage>
        )
    }
}
