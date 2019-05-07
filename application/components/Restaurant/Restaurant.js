import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements';
import AppButton from '../AppButton';
import RestaurantRating from './RestaurantRating';

export default class Restaurant extends Component {
    render() {
        const restaurant = this.props.restaurant;
        const goHome = this.props.goHome;
        return (
            <Card title={restaurant.nombre}
                    image={require('./../../../assets/images/store.png')}>
                    <RestaurantRating restaurantId={restaurant.id}/>
                    <Text style={{marginBottom:10,marginTop:10}}>
                        {restaurant.descripcion}
                    </Text>
                    <AppButton bgColor="rgba(255,38,74,0.8)"
                                title="Editar Restaurant"
                                action={()=>{}}
                                iconName="pencil"
                                iconSize={30}
                                iconColor="white"/>

                    <AppButton bgColor="rgba(28,25,21,0.8)"
                                title="Volver"
                                action={goHome}
                                iconName="arrow-left"
                                iconSize={30}
                                iconColor="white"/>
            </Card>
        )
    }
}
