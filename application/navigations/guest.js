import {createStackNavigator,
        createAppContainer} from 'react-navigation';
import StartScreen from './../screens/Start';
import LoginScreen from './../screens/Login';
const AppNavigator = createStackNavigator(
    {
        Start:{
            screen: StartScreen
        },
        Login:{
            screen: LoginScreen
        }
    },
    {
        initialRouteName: 'Start',
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor: 'rgba(30,30,30,1)',
            },
            headerTitleStyle:{
                textAlign:'center',
                alignSelf:'center',
                fontSize:20,
                color: '#fff',
                fontWeight: 'bold',
                flex:1
            }
        }
    }
);
export default createAppContainer(AppNavigator);