import React, { Component } from 'react'
import { MapView } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase';
import { Image } from 'react-native-elements';

export default class Map extends Component {
    miReferencia;
    constructor(props) {
        super(props);
        this.state = {
            marcadores: [],
        }
        this.refRestaurants = firebase.database().ref().child('restaurants');
    }

    static navigationOptions = ({ navigation }) => (
        {
            title: "Mapa de Restaurants",
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

    componentDidMount() {
        var crd;
        // navigator.geolocation.getCurrentPosition((pos) => {
        //     crd = pos.coords;
        // });

        let marcadores = [];
        this.refRestaurants.on('value', (data) => {
            data.forEach((fila) => {
                let marcador = {
                    id: fila.key,
                    latitude: fila.val().lat,
                    longitude: fila.val().lng,
                    descripcion: fila.val().descripcion,
                    nombre: fila.val().nombre,
                }
                marcadores.push(marcador);
            });
        });
        this.setState({
            marcadores,

        });
    }

    renderMarcadores(marcadores) {
        if (marcadores.length == 0) return;
        let rpta = marcadores.map((marker, i) => {

            return (
                <MapView.Marker
                    coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longitude,
                    }}
                    title={marker.nombre}
                    description={marker.descripcion}
                    key={marker.id}
                >
                    <Image source={require('./../../../assets/pin.png')} 
                            style={{ height: 35, width: 35, }} />
                </MapView.Marker>
            )
        })
        return rpta;

    }

    render() {
        let { marcadores } = this.state;
        let estilo = [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8ec3b9"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1a3646"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#4b6878"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#64779e"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#4b6878"
                }
              ]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#334e87"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#283d6a"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#6f9ba5"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3C7680"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#304a7d"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#98a5be"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#2c6675"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#255763"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#b0d5ce"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#98a5be"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#283d6a"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3a4762"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#0e1626"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#4e6d70"
                }
              ]
            }
          ]
        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                customMapStyle={estilo}
            >
                {this.renderMarcadores(marcadores)}
            </MapView>
        )
    }
}
