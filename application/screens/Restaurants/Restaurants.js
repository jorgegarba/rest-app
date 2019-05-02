import React, { Component } from 'react'
import RestaurantEmpty from '../../components/Restaurant/RestaurantEmpty';
import BackgroundImage from '../../components/BackgroundImage';
import RestaurantAddButton from '../../components/Restaurant/RestaurantAddButton';

export default class Restaurants extends Component {
    render() {
        return (
            <BackgroundImage source={require('./../../../assets/images/bg1.jpg')}>
                <RestaurantEmpty></RestaurantEmpty>
                <RestaurantAddButton></RestaurantAddButton>
            </BackgroundImage>
        )
    }
}
