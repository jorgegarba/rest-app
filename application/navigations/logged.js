import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';
import RestaurantsScreen from '../screens/Restaurants/Restaurants';
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
    },
    navigationOptions
);


const miDrawerNavigation = createDrawerNavigator(
    {
        RestScreen:{
            screen: restaurantScreenStack
        }
    }
)


export default createAppContainer(miDrawerNavigation);