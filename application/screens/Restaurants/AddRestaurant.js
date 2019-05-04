import React, { Component } from 'react'
import { Restaurant, options } from './../../forms/crearRestaurant';
import {View, StyleSheet} from 'react-native';
import BackgroundImage from '../../components/BackgroundImage';
import { Card } from 'react-native-elements';
import t from 'tcomb-form-native';
import AppButton from '../../components/AppButton';
const Form = t.form.Form;
import * as firebase from 'firebase';

export default class AddRestaurant extends Component {

    constructor(){
        super();
        this.state = {
            restaurant: {
                nombre:'',
                descripcion:'',
                direccion:'',
                capacidad:0,
            }
        }
    }

    actualizarState(data){
        this.setState({
            restaurant:data
        })
    }
    crearRestaurant(){
        // getValue() retorna un JSON con la información del formulario
        // SI y SOLO SI el formulario tiene los campos validados
        // en caso contrario, retorna "null"
        const validador = this.refs.form.getValue();
        if(validador){
            const pk = firebase.database().ref().child('restaurants').push().key;
            
            
        }
    }
    render() {
        return (
            <BackgroundImage source={require('./../../../assets/images/bg1.jpg')}>
                <View style={styles.container}>
                    <Card title="Agregar un Restaurant">
                        <View>
                            <Form ref="form"
                                    type={Restaurant}
                                    options={options}
                                    value={this.state.restaurant}
                                    onChange={(data)=>{this.actualizarState(data)}}>
                            </Form>
                        </View>  
                        <AppButton
                                bgColor="rgba(255,38,74,0.9)"
                                title="Agregar"
                                action={this.crearRestaurant.bind(this)}
                                iconName="plus"
                                iconSize={30}
                                iconColor="#fff">
                        </AppButton>
                    </Card>
                </View>
            </BackgroundImage>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(231,228,224,0.8)'
    }
})
