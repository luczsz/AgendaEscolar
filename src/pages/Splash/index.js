import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import LogoBranco from '../../assets/logo2.png';

export default function Splash() {
    
    const navigation = useNavigation();
 
    return (
   <View style={styles.container}>

        <View style={styles.imgs}>
            <Image
                source={LogoBranco}
            />
        </View>
        <View style={styles.bnts}>
            <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>
                    ENTRAR
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    PAIS E MESTRES
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    PROFESSORES
                </Text>
            </TouchableOpacity>
        </View>

   </View>
  );
}
