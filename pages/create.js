import { Button, PaperProvider } from "react-native-paper";
import {View,Text} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import {useState,useEffect} from 'react';
import { AntDesign } from '@expo/vector-icons';
export default function Create({navigation}) {
    const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
       'Helvetica': require('../assets/fonts/Helvetica.ttf'),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);
  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }
    return(
        <PaperProvider>
       <View style={{ flex: 1, backgroundColor: '#0E1C36', padding: 8 }}>
       <View style={{ flexDirection: 'row', backgroundColor: '#0E1C36', padding: 16, maxheight: 80 ,alignItems:'center',justifyContent:'space-evenly'}}>
       <Ionicons name="chevron-back" size={24} color="#FFC43D" padding={8} style={{flex:4}} onPress={() => {
                        navigation.push('Acc')
                    }} />
                    <Text style={{ color: 'white', fontSize: 20, flex: 5, fontFamily:'Helvetica',fontWeight: '700', alignItems: 'center', }}>Create An Account</Text>
                    <Entypo name="cross" size={28} color="#FFC43D" padding={8} onPress={() => {
                        navigation.push('Acc')
                    }} />
                </View>
                <View style={{flex:1,flexDirection:'column',marginTop:20}}>
                    <Button buttonColor="white" style={{borderRadius:4,margin:12,padding:16}}>
                    <AntDesign name="apple1" size={20} color="black" />
                        <Text style={{color:'black',flex:1}}>Continue With Apple</Text></Button>
                    <Button buttonColor="white" style={{borderRadius:4,margin:12,padding:16}}><AntDesign name="google" size={20} color="black" /><Text style={{color:'black',}}>Continue With Google</Text></Button>
                    <Button buttonColor="white" style={{borderRadius:4,margin:12,padding:16}}><AntDesign name="facebook-square" size={20} color="black" /><Text style={{color:'black'}}>Continue With FaceBook</Text></Button>
                    <Button buttonColor="#FFC43D" style={{borderRadius:4,margin:12,padding:16}}><AntDesign name="mail" size={20} color="black" /><Text style={{color:'black'}}>Continue With Email/Password</Text></Button>
                </View>
       </View>
        </PaperProvider>
    )
}