import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../pages/Splash';

const AuthStack = createNativeStackNavigator;

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name='Splash' component={ <Splash/> } />
        </AuthStack.Navigator>
    );
};
