import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import LogoVerde from '../../assets/logo1.png';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

export default function SingOn() {

  const navigation = useNavigation();

 return (
   <View style={styles.container} >
        <View style={styles.content} >
            <Image source={LogoVerde} style={styles.logo} />

            <View style={styles.inputs} >
                <Feather name='user' size={25} color={theme.colors.primary} />
                <TextInput placeholder='matricula do aluno' placeholderTextColor={theme.colors.secondary50} />
            </View>

            <View style={styles.inputs} >
                <Feather name='key' size={25} color={theme.colors.primary}  />
                <TextInput placeholder='Senha' placeholderTextColor={theme.colors.secondary50} />
            </View>

        </View>
        <View style={styles.buttons} >
          <TouchableOpacity style={styles.submit} >
            <Text style={styles.submitText} >Entrar</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', gap: 10, marginTop: 20, alignItems: 'center', }} >
            <Text style={styles.titles} >Ainda não tem uma conta?</Text>
            <TouchableOpacity onPress={ () => navigation.navigate('Cadastro')} >  
              <Text style={styles.cadastre} >CADASTRE-SE</Text>
            </TouchableOpacity>
          </View>

        </View>
   </View>
  );
}
