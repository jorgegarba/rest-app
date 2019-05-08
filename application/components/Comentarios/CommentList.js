import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet} from 'react-native';
import {Divider,Card,Rating} from 'react-native-elements';
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
    renderComment(comentario){
        return (
            <Card title={comentario.comentario}>
                <Rating
                        style={styles.rating}
                        readonly
                        imageSize={20}
                        startingValue={comentario.rating}/>
            </Card>
        )
    }
    render() {
        const {loaded,comentarios} = this.state;
        if(!loaded){
            return (<PreLoader/>)
        }
        if(comentarios.length === 0){
            return (<CommentEmpty/>)
        }else{
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Reseñas</Text>
                    <Divider style={styles.divider}></Divider>
                    <Card>
                        <FlatList
                                data={comentarios}
                                renderItem={(data)=>{
                                    return this.renderComment(data.item)
                                }}
                                keyExtractor={(data)=>{return data.id}}>
                        </FlatList>
                    </Card>
                </View>
            )
        }
    }
}


const styles = StyleSheet.create({
    rating:{
        alignItems:'center'
    },
    container:{
        justifyContent:'center',
        flex:1,
        marginTop:10,
        marginBottom:10,
    },
    divider:{
        backgroundColor:'red',
    },
    title:{
        fontSize:30,
        color:'white',
        textAlign: 'center'
    }

});