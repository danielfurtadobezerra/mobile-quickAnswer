import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Inicio from './Inicio';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();


    const handleLogin = () => {
        // Adicione o código de autenticação aqui
        navigation.navigate(Inicio);

    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../images/LogoQuickAnswer.png')}
            />
            <Text style={styles.title}>QuickAnswer</Text>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#fff'
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    tinyLogo: {
        width: 280,
        height: 280,
      },
});

export default Login;
