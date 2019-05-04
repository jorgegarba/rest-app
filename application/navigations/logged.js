import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';
import RestaurantsScreen from '../screens/Restaurants/Restaurants';
import LogoutScreen from '../screens/Logout';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddRestaurantScreen from './../screens/Restaurants/AddRestaurant';


const navigationOptions = {
    initialRouteName: 'RestaurantsScreen',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'rgba(30,30,30,1)',
        },
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold',
            flex: 1
        }
    }
}
const restaurantScreenStack = createStackNavigator(
    {
        RestaurantsScreen: {
            screen: RestaurantsScreen
        },
        AddRestaurantScreen: {
            screen: AddRestaurantScreen
        }
    },
    navigationOptions
);

const logoutScreenStack = createStackNavigator(
    {
        LogoutScreen:{
            screen: LogoutScreen
        },
    },
);


const miDrawerNavigation = createDrawerNavigator(
    {
        RestScreen:{
            screen: restaurantScreenStack,
            navigationOptions:()=>{
                return ({
                    drawerLabel: "Mis Restaurantes",
                    drawerIcon: ()=>{
                        return (
                            <Icon name="home"
                                    size={24}
                                    style={{color:'white'}}/>
                        )
                    }
                })
            }
        },
        LogoutScreen:{
            screen: logoutScreenStack,
            navigationOptions:()=>{
                return ({
                    drawerLabel: "Cerrar Sesión",
                    drawerIcon: ()=>{
                        return (
                            <Icon name="sign-out"
                                    size={24}
                                    style={{color:'white'}}/>
                        )
                    }
                })
            }
        }
    },
    {
        drawerBackgroundColor: 'rgba(128,35,60,0.7)',
        contentOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: 'transparent',
            inactiveTintColor: 'white',
            itemsContainerStyle: {
                marginVertical: 0
            }
        }
    }
)


export default createAppContainer(miDrawerNavigation);