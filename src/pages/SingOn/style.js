import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex:1 ,
        backgroundColor: theme.colors.secondary40,
    },
    content:{
        marginTop: 32,
        flex: 1,

        padding: 20,
        alignItems: 'center',
    },
    buttons:{
        height: 140,

        alignItems: 'center',
    },
    logo:{
        marginBottom: 40,
    },
    inputs:{
        flexDirection: 'row',
        width: '96%',
        height: 60,
        marginTop: 10,

        alignItems: 'center',
        padding: 12,
        gap: 12,

        borderWidth: 2,
        borderColor: theme.colors.primary,
        borderRadius: 12,
    },

    submit:{
        backgroundColor: theme.colors.primary,
        width: '80%',
        height: 60,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    
    submitText:{
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.secondary40,
    },

    titles:{
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.secondary60,
    },
    cadastre:{
        fontSize: 18,
        fontWeight: 'bold',
        color:theme.colors.primary,
    }
})
