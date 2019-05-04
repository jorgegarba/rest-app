import React, { Component } from 'react'
import RestaurantEmpty from '../../components/Restaurant/RestaurantEmpty';
import BackgroundImage from '../../components/BackgroundImage';
import RestaurantAddButton from '../../components/Restaurant/RestaurantAddButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase';
import PreLoader from '../../components/PreLoader';
import {NavigationActions} from 'react-navigation';
import {FlatList,StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';

export default class Restaurants extends Component {

    refRestaurants;

    constructor() {
        super();
        this.state = {
            restaurants: [],
            loaded: false,
            restaurant_logo: require('./../../../assets/images/restaurant.png')
        };
        this.refRestaurants = firebase.database().ref().child('restaurants');
    }

    componentDidMount() {
        this.refRestaurants.on('value', (data) => {
            let restaurants = [];
            data.forEach(fila => {
                let objRestaurant = {
                    id: fila.key,
                    nombre: fila.val().nombre,
                    capacidad: fila.val().capacidad,
                    direccion: fila.val().direccion,
                    descripcion: fila.val().descripcion,
                    lat: fila.val().lat,
                    lng: fila.val().lng,
                };
                restaurants.push(objRestaurant);
            });
            console.log(restaurants);
            this.setState({
                restaurants: restaurants,
                loaded: true
            })
        });
    }


    static navigationOptions = ({ navigation }) => (
        {
            title: "Restaurants",
            headerRight: (
                <Icon name="home"
                    style={{ marginRight: 20 }}
                    size={20}
                    color="white"
                    onPress={() => { }} />
            ),
            headerLeft: (
                <Icon name="bars"
                    style={{ marginLeft: 20 }}
                    size={20}
                    color="white"
                    onPress={() => { navigation.openDrawer(); }} />
            ),
        }
    )


    renderRestaurant(restaurant){
        return(
            <ListItem containerStyle={styles.item}
                        titleStyle={styles.title}
                        roundAvatar
                        title={`${restaurant.nombre} (Capacidad: ${restaurant.capacidad})`}
                        leftAvatar={{source:this.state.restaurant_logo}}
                        rightIcon={{name:"arrow-right",
                                    type:'font-awesome',
                                    marginRight:10,
                                    fontSize:15,
                                    color:'white'}}
                        >
            </ListItem>
        )
    }

    addRestaurant(){
        const navegador = NavigationActions.navigate({
            routeName:'AddRestaurantScreen'
        });
        this.props.navigation.dispatch(navegador);
    }

    render() {

        const { loaded, restaurants } = this.state;
        if (loaded === false) {
            return (<PreLoader></PreLoader>);
        }
        if (restaurants.length == 0) {
            return (
                <BackgroundImage source={require('./../../../assets/images/bg1.jpg')}>
                    <RestaurantEmpty></RestaurantEmpty>
                    <RestaurantAddButton></RestaurantAddButton>
                </BackgroundImage>
            )
        }
        return(
            <BackgroundImage source={require('./../../../assets/images/bg1.jpg')}>
                <FlatList data={restaurants}
                            renderItem={(data)=>{
                                return this.renderRestaurant(data.item)
                            }}
                            keyExtractor={(data)=>{return data.id}}
                            >
                </FlatList>
                <RestaurantAddButton miFuncion={this.addRestaurant.bind(this)}></RestaurantAddButton>
            </BackgroundImage>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        padding:5,
        backgroundColor:'rgba(206,206,206,0.6)'
    },
    title:{
        color:'white'
    },
    flechita:{
        
    }
})