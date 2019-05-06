import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackgroundImage from '../../components/BackgroundImage';
import { ScrollView } from 'react-native';
import Restaurant from '../../components/Restaurant/Restaurant';

export default class DetailRestaurant extends Component {
    constructor(props){
        super(props);
        const entrada = props.navigation.state.params;
        this.state = {
            restaurant: entrada.restaurant
        }
    }
    render() {
        return (
            <BackgroundImage source={require('./../../../assets/images/bg1.jpg')}>
                <ScrollView>
                    <Restaurant restaurant={this.state.restaurant}></Restaurant>
                </ScrollView>
            </BackgroundImage>
        )
    }
}
