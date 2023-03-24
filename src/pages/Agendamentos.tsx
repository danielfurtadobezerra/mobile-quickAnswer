import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Inicio from './Inicio';

const navigation = useNavigation();

const abrirInicio = () => {
    // Adicione o código de autenticação aqui
    navigation.navigate(Inicio);
};
interface AgendamentosProps {}

const Agendamentos: React.FC<AgendamentosProps> = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#09090A' }}>
            <Text style={{ color: "red" }}>AGENDAMENTOS</Text>
            <TouchableOpacity style={styles.button} onPress={abrirInicio}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
});

export default Agendamentos;