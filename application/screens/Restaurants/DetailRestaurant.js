import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackgroundImage from '../../components/BackgroundImage';
import { ScrollView } from 'react-native';
import Restaurant from '../../components/Restaurant/Restaurant';
import {NavigationActions} from 'react-navigation';
import CommentList from '../../components/Comentarios/CommentList';
export default class DetailRestaurant extends Component {
    constructor(props){
        super(props);
        const entrada = props.navigation.state.params;
        this.state = {
            restaurant: entrada.restaurant
        }
    }

    regresar(){
        const navigateAction = NavigationActions.navigate({
            routeName:'RestaurantsScreen'
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <BackgroundImage source={require('./../../../assets/images/bg1.jpg')}>
                <ScrollView>
                    <Restaurant restaurant={this.state.restaurant}
                                goHome={this.regresar.bind(this)}>
                    </Restaurant>
                    {/* aqui va el formulario para crear
                        un nuevo comentario */}
                        
                    <CommentList restaurantId={this.state.restaurant.id}>

                    </CommentList>
                </ScrollView>
            </BackgroundImage>
        )
    }
}
