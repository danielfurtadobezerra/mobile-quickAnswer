import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Agendamentos from './Agendamentos';
import Login from './Login';

interface InicioProps {}

const Inicio: React.FC<InicioProps> = () => {
    const navigation = useNavigation();

    const abrirAgendamentos = () => {
        navigation.navigate(Agendamentos);
    };

    const abrirLogin = () => {
        navigation.navigate(Login);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#09090A' }}>
            <Text style={{ color: "red" }}>INICIO</Text>
            <TouchableOpacity style={styles.button} onPress={abrirAgendamentos}>
                <Text style={styles.buttonText}>Agendamentos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={abrirLogin}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    button: {
        marginTop: 5,
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
});

export default Inicio;