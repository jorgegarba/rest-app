import React, { Component } from 'react'
import { MapView, Polyline } from 'expo';
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
      marcadores: marcadores,
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
            "color": "#212121"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#181818"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2c2c2c"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#373737"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3c3c3c"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#68add2"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ]
      }
    ];
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -16.424543,
          longitude: -71.5174362,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={null}
        customMapStyle={estilo}
      >
        {this.renderMarcadores(marcadores)}

        <MapView.Polyline
          coordinates={[
            { latitude: -16.405916, longitude: -71.531609 },
            { latitude: -16.406431, longitude: -71.531219 },
            { latitude: -16.406965, longitude: -71.530647 },
            { latitude: -16.406965, longitude: -71.530647 },
            { latitude: -16.404419, longitude: -71.527542 },
            { latitude: -16.404346, longitude: -71.527397 },
            { latitude: -16.404346, longitude: -71.527397 },
            { latitude: -16.404449, longitude: -71.527374 },
            { latitude: -16.404619, longitude: -71.527214 },
            { latitude: -16.405212, longitude: -71.526459 },
            { latitude: -16.406494, longitude: -71.525223 },
            { latitude: -16.406494, longitude: -71.525223 },
            { latitude: -16.407017, longitude: -71.525925 },
            { latitude: -16.407137, longitude: -71.526207 },
            { latitude: -16.40723, longitude: -71.526733 },
            { latitude: -16.407528, longitude: -71.527145 },
            { latitude: -16.407528, longitude: -71.527145 },
            { latitude: -16.407902, longitude: -71.526871 },
            { latitude: -16.408255, longitude: -71.526718 },
            { latitude: -16.408255, longitude: -71.526718 },
            { latitude: -16.407957, longitude: -71.525818 },
            { latitude: -16.407145, longitude: -71.524506 },
            { latitude: -16.40674, longitude: -71.523445 },
            { latitude: -16.405832, longitude: -71.522224 },
            { latitude: -16.405169, longitude: -71.520981 },
            { latitude: -16.404854, longitude: -71.520508 },
            { latitude: -16.404011, longitude: -71.519569 },
            { latitude: -16.404011, longitude: -71.519569 },
            { latitude: -16.404276, longitude: -71.51944 },
            { latitude: -16.404276, longitude: -71.51944 },
            { latitude: -16.403898, longitude: -71.518852 },
            { latitude: -16.403696, longitude: -71.518021 },
            { latitude: -16.403311, longitude: -71.517303 },
            { latitude: -16.403202, longitude: -71.516571 },
            { latitude: -16.403126, longitude: -71.516487 },
            { latitude: -16.403126, longitude: -71.516487 },
            { latitude: -16.403372, longitude: -71.516434 },
            { latitude: -16.405563, longitude: -71.515511 },
            { latitude: -16.405563, longitude: -71.515511 },
            { latitude: -16.404585, longitude: -71.513893 },
            { latitude: -16.404585, longitude: -71.513893 },
            { latitude: -16.40526, longitude: -71.512863 },
            { latitude: -16.405298, longitude: -71.512711 },
            { latitude: -16.409292, longitude: -71.506569 },
            { latitude: -16.415363, longitude: -71.497391 },
            { latitude: -16.415518, longitude: -71.497223 },
            { latitude: -16.416847, longitude: -71.496643 },
            { latitude: -16.416847, longitude: -71.496643 },
            { latitude: -16.416498, longitude: -71.494072 },
            { latitude: -16.416498, longitude: -71.494072 },
            { latitude: -16.415211, longitude: -71.494286 },
            { latitude: -16.415211, longitude: -71.494286 },
            { latitude: -16.414923, longitude: -71.492455 },
            { latitude: -16.414923, longitude: -71.492455 },
            { latitude: -16.414358, longitude: -71.492561 },
          ]}
          strokeColor="#fff"
          strokeWidth={4}
        />

      </MapView>
    )
  }
}
