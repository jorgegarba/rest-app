import React, { Component } from 'react'
import { Text, View } from 'react-native'
import * as firebase from 'firebase';
import PreLoader from '../PreLoader';
import CommentEmpty from './CommentEmpty';
export default class CommentList extends Component {
    refComentarios;
    constructor(props){
        super(props);
        this.state = {
            loaded:false,
            comentarios: [],
        };
        let restaurantId = props.restaurantId;
        this.refComentarios = firebase.database().ref()
                                .child(`comentarios/${restaurantId}`);
    }
    componentDidMount(){
        this.refComentarios.on('value', data=>{
            let comentariosTmp = [];
            data.forEach(fila=>{
                let objComentario = {
                    id: fila.key,
                    comentario: fila.val().comentario,
                    rating: fila.val().rating,
                };
                comentariosTmp.push(objComentario);
            });
            this.setState({
                loaded:true,
                comentarios:comentariosTmp
            });
        })
    }
    render() {
        const {loaded,comentarios} = this.state;
        if(!loaded){
            return (<PreLoader/>)
        }
        if(comentarios.length === 0){
            return (<CommentEmpty/>)
        }else{
            return (<Text>Si hay comentarios</Text>)
        }
    }
}
