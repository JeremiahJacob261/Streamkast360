import { Button, PaperProvider } from "react-native-paper";
import { Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
function Acc({ navigation }) {
    return (
        <PaperProvider >
            <View style={{ flex: 1, backgroundColor: '#0E1C36', padding: 8 }}>
                <View style={{ flexDirection: 'row', backgroundColor: '#0E1C36', padding: 16, maxheight: 80 }}>
                    <Text style={{ color: 'white', fontSize: 25, flex: 5, fontWeight: '800', alignItems: 'center' }}>StreamKast360 Account</Text>
                    <Entypo name="cross" size={28} color="#FFC43D" padding={8} onPress={() => {
                        navigation.push('Home')
                    }} />
                </View>

                <View style={{ flexDirection: 'row', borderRadius: 8, margin: 8, padding: 30, backgroundColor: '#222E50', alignItems: 'center' }}>
                    <Ionicons name="md-person-circle" size={28} color="white" style={{ flex: 1 }} />
                    <Text style={{ color: 'white', flex: 3, fontWeight: '500' }}>Sign In</Text>
                    <Ionicons name="chevron-forward" size={24} color="white" onPress={() => navigation.navigate('Login')}/></View>

                <View style={{ flexDirection: 'row', borderRadius: 8, margin: 8, padding: 25, backgroundColor: '#222E50', alignItems: 'center' }}>
                    <Ionicons name="md-person-add-sharp" size={24} color="white" style={{ flex: 1 }} />
                    <View style={{ flex: 3 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Create An Account</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color="white" /></View>

                <View style={{ flexDirection: 'row', borderRadius: 8, margin: 8, padding: 25, borderColor: '#222E50', borderWidth: 2, alignItems: 'center' }}>
                    <Entypo name="globe" size={20} color="white" style={{ flex: 1 }} />
                    <View style={{ flex: 3 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Country</Text>
                        <Text style={{ color: 'white', fontWeight: '300' }}>Nigeria for now</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color="white" /></View>

                <View style={{ flexDirection: 'row', borderRadius: 8, margin: 8, padding: 25, borderColor: '#222E50', borderWidth: 2, alignItems: 'center' }}>
                    <FontAwesome5 name="language" size={20} color="white" style={{ flex: 1 }} />
                    <View style={{ flex: 3 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Language</Text>
                        <Text style={{ color: 'white', fontWeight: '300' }}>English</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color="white" /></View>
            </View>

        </PaperProvider>
    )
}
export default Acc;