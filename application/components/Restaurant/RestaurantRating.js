import React, { Component } from 'react';
import * as firebase from 'firebase';
import {Rating} from 'react-native-elements';
import {View} from 'react-native';

export default class RestaurantRating extends Component {
    refComentarios;
    constructor(props){
        super(props);
        const restaurantId = props.restaurantId;
        this.refComentarios = firebase.database().ref()
                                .child(`comentarios/${restaurantId}`);                 
        this.state = {
            promedio: 0
        }
    }

    componentDidMount(){
        this.refComentarios.on('value',data=>{
            data.forEach(fila=>{
                console.log(fila.val().rating);
            })
        })
    }

    render() {
        return (
            <View>
                <Rating ref="rating"
                        imageSize={20}
                        readonly
                        startingValue={this.state.promedio}>
                </Rating>
            </View>
        )
    }
}
