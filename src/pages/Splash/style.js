import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.primary,
    },

    imgs:{
        flex: 1,
        

        alignItems: 'center',
        justifyContent: 'center',
    },

    bnts:{
        padding: 14,

        alignItems: 'center',
        justifyContent: 'center',
    },

    button:{
        backgroundColor: theme.colors.secondary40,
        width: '80%',
        height: 60,
        borderRadius: 12,

        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },

    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
    }
})
