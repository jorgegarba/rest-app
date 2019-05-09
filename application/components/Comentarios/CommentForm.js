import React, { Component } from 'react';
import { Text, View, Alert} from 'react-native';
import { Card} from 'react-native-elements';
import { Comment, options } from './../../forms/comment';
import t from 'tcomb-form-native';
import AppButton from '../AppButton';
import * as firebase from 'firebase';

const Form = t.form.Form;

export default class CommentForm extends Component {
    refComentarios;
    constructor(props){
        super(props);
        this.refComentarios = firebase.database().ref()
                            .child(`comentarios/${props.restaurantId}`);
        this.state = {
            comment:{
                comentario:'',
                rating:0,
            }
        }
    }
    actualizarState(data){        
        this.setState({
            comment:data
        })
    }
    addComment(){
        let objComentario = {
            comentario: this.state.comment.comentario,
            rating: this.state.comment.rating,
        };
        let id = this.refComentarios.push().key;

        console.log(objComentario);
        
        this.refComentarios.child(id)
                            .set(objComentario)
                            .then((response,error)=>{
                                if(error){
                                    Alert.alert('Ups!','Ocurrió un error');    
                                }else{
                                    Alert.alert('Éxito','La reseña ha sido publicada');
                                }
                                this.setState({
                                    comment:{
                                        comentario:'',
                                        rating:0,
                                    }
                                })
                            });
    }
    render() {
        return (
            <Card title="Danos tu opinión">
                <View>
                    <Form
                        ref="form"
                        type={Comment}
                        options={options}
                        value={this.state.comment}
                        onChange={(data)=>{this.actualizarState(data)}}
                    />
                    <AppButton bgColor="rgba(255,38,74,0.9)"
                        title="Publicar Reseña"
                        action={this.addComment.bind(this)}
                        iconName="comments"
                        iconSize={25}
                        iconColor="#fff">
                    </AppButton>
                </View>
            </Card>
        )
    }
}
