import React, { useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableWithoutFeedback, Alert, ToastAndroid } from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import FingerPrint from 'react-native-fingerprint-scanner';

export default function Login({ navigation }) {
    useEffect(() => {
        FingerPrint.authenticate({
            onAttempt: () => {
                ToastAndroid.show('Biometria não valida', ToastAndroid.SHORT)
            }
        })
            .then(() => {
                Alert.alert('Sucesso', 'Você será direcionado a tela principal');
                navigation.navigate('App');
            })
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#18fd' />
            <View style={styles.form}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>
                        Coloque seu dedo no scanner de seu celular
                    </Text>
                </View>
                <View style={styles.body}>
                    <TouchableWithoutFeedback onLongPress={() => Alert.alert('Aviso', 'A tela não tem scanner, procure o scanner de seu celular')}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/biometria.png')} style={styles.imageBiometria} />
                            <IconI name='ios-qr-scanner' size={200} style={styles.scanner} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
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
    header: {
        position: 'absolute',
        top: 20,
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBiometria: {
        height: 120,
        width: 100,
        resizeMode: 'contain',
        tintColor: '#18fd'
    },
    scanner: {
        position: 'absolute',
        color: '#18fd'
    },
    textHeader: {
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0.9,
        color: '#18fd',
        padding: 20,
        textAlign: 'center'
    },
})
