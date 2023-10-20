import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../pages/Splash';
import SingOn from '../pages/SingOn';
import SingIn from '../pages/SingIn';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name='Splash' 
                component={ Splash } 
                options={{
                    headerShown: false,
                }}
            
            />
            <AuthStack.Screen 
                name='Login' 
                component={ SingOn } 
                options={{
                    headerShown: false,
                }}
            
            />
            <AuthStack.Screen 
                name='Cadastro' 
                component={ SingIn } 
                options={{
                    headerShown: false,
                }}
            
            />
        </AuthStack.Navigator>
    );
};
