import React, { Component } from 'react'
import t from 'tcomb-form-native';
import BackgroundImage from '../components/BackgroundImage';
import {View} from 'react-native';
import {Card} from 'react-native-elements';
import AppButton from '../components/AppButton';
const Form = t.form.Form;

export default class Login extends Component {
    render() {
        var User = t.struct({
            email: t.String,
            password: t.String,
        });
        var options = {
            fields:{
                email:{
                    help:'Introduce tu Email',
                    error: 'Email Incorrecto',
                    autoCapitalize:'none',
                },
                password:{
                    help:"Introduce tu Password",
                    error:"Password Incorrecto",
                    password:true,
                    secureTextEntry:true
                }
            }
        };
        return (
            <BackgroundImage source={require("./../../assets/images/bg1.jpg")}>
                <View>
                    <Card wrapperStyle={{paddingLeft:10}} title="Iniciar Sesión" >
                        <Form ref="form"
                                type={User}
                                options={options}/>
                        <AppButton bgColor="rgba(111,38,74,0.7)"
                                    title="Login"
                                    action={()=>{console.log(1);}}
                                    iconName="sign-in"
                                    iconSize={30}
                                    iconColor="#fff"
                                    setWidth={false}

                        />
                    </Card>
                </View>
            </BackgroundImage>
        )
    }
}
