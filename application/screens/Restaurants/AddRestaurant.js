import React, { Component } from 'react'
import { Restaurant, options } from './../../forms/crearRestaurant';
import {View, StyleSheet} from 'react-native';
import BackgroundImage from '../../components/BackgroundImage';
import { Card } from 'react-native-elements';
import t from 'tcomb-form-native';
const Form = t.form.Form;

export default class AddRestaurant extends Component {
    render() {
        return (
            <BackgroundImage source={require('./../../../assets/images/bg1.jpg')}>
                <View style={styles.container}>
                    <Card title="Agregar un Restaurant">
                        <View>
                            <Form ref="form"
                                    type={Restaurant}
                                    options={options}>
                            </Form>
                        </View>
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
