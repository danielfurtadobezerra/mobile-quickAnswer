import { ActivityIndicator, View } from "react-native";

export function Carregando() {
    return(
        <View style={{ flex:1, justifyContent:'center', alignItems: 'center', backgroundColor:'#09090A'}}>
            <ActivityIndicator color="#5223ad"/>
        </View>
    )
}