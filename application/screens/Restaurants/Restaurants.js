import React, { Component } from 'react'
import RestaurantEmpty from '../../components/Restaurant/RestaurantEmpty';
import BackgroundImage from '../../components/BackgroundImage';
import RestaurantAddButton from '../../components/Restaurant/RestaurantAddButton';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Restaurants extends Component {

    static navigationOptions =  {
        title: "Restaurants",
        headerRight:(
            <Icon name="home"
                    style={{marginRight:20}}
                    size={20}
                    color="white"
                    onPress={()=>{console.log("icono home");}}/>
        ),
        headerLeft:(
            <Icon name="bars"
                    style={{marginLeft:20}}
                    size={20}
                    color="white"
                    onPress={()=>{console.log("icono bars");}}/>
        ),

    }

    render() {
        return (
            <BackgroundImage source={require('./../../../assets/images/bg1.jpg')}>
                <RestaurantEmpty></RestaurantEmpty>
                <RestaurantAddButton></RestaurantAddButton>
            </BackgroundImage>
        )
    }
}
