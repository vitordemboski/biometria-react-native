import React from 'react';
import { View, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

// import { Container } from './styles';

export default function App({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#18fd' />
            <View style={styles.form}>
                <Text>
                    AUTENTICADO
                </Text>
                <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Login')}>
                    <Icon name='left' size={20} style={styles.iconBack} />
                    <Text style={styles.textBack}>
                        Voltar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#18fd'
    },
    form: {
        height: '80%',
        width: '95%',
        backgroundColor: '#FFF',
        elevation: 1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: "center"
    },
    back: {
        alignSelf: 'flex-end',
        padding: 25,
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        top: 0
    }, 
    textBack: {
        fontSize: 17,
        fontWeight: '500',
        letterSpacing: 0.9,
        color: '#18fd'
    },
    iconBack: {
        color: '#18fd',
        marginLeft: 10,
        marginTop: 2
    },
})
