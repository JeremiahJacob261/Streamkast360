import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState,useEffect } from 'react';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
import { useFonts,Roboto_400Regular } from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
function Home({navigation}) {
    const [text, onChangeText] = useState('');
    const [visible, setVisible] = useState(false);
  
    const openMenu = () => setVisible(true);
    
    const closeMenu = () => setVisible(false);
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
        <PaperProvider >
        <View style={styles.safer}>
          <View style={styles.colwa}>
            <View style={styles.rowa}>
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button onPress={openMenu}
                >
                  <SimpleLineIcons name="menu" size={24} color="#E6E8E6" style={styles.menu} /></Button>}>
                <Menu.Item onPress={() => { }} title="Connect Your TV"
                  style={{ color: 'white' }} />
                <Menu.Item onPress={() => { }} title="About Us"
                contentStyle={{borderColor:'#0E1C36'}}
                />
                <Divider />
                <Menu.Item onPress={() => { }} title="Just Watch Media"
                />
                <Menu.Item onPress={() => { }} title="Talent"
                />
                <Menu.Item onPress={() => { }} title="Press"
                />
                <Menu.Item onPress={() => { }} title="Imprint"
                />
                <Menu.Item onPress={() => { }} title="FAQ"
                />
                <Menu.Item onPress={() => { }} title="Privacy Policy"
                />
                <Menu.Item onPress={() => { }} title="Terms of Use"
                />
              </Menu>
              <View style={styles.imgbar}>
                <Image source={require('../assets/icon.png')} style={styles.imgbarcon} /></View>
              <MaterialIcons name="bookmark-border" size={24} color="#E6E8E6" style={styles.bookmarks} />
              <Button onPress={() => navigation.navigate('Acc')}>
              <MaterialCommunityIcons name="account-settings" size={24} color="#E6E8E6" style={styles.accset} />
              </Button>
            </View>
            <View style={styles.rowa}>
              <Text style={styles.colwatexts}>New</Text>
              <Text style={styles.colwatexts}>Popular</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Search for Movies or TV"
              />
            </View>
          </View>
          <ScrollView >
            <View style={styles.inscroll}>
              <Text style={styles.inscrolltxt}>
                Connect your TV
              </Text>
              <Text style={styles.inscrolltxt1}>
                In a few simple steps
              </Text>
              <Text style={styles.inscrolltxt2}>1. Login to your JustWatch account on a smartphone or computer.</Text>
              <View style={styles.inscrollbtn} >
                <Button textColor='#F8FFE5'>Sign In</Button>
              </View><Text style={styles.inscrolltxt2}>
                2. Download the JustWatch app on your TV (if you haven't already). It's available on:
              </Text>
              {//some images present here!
              }
              <Text style={styles.inscrolltxt2}>
                3. Open the app on your TV. Go to **Account** and click **Login**. There you will find a 4 digit code.
              </Text>
              <Text style={styles.inscrolltxt2}>
                4. Now enter your code here:
              </Text>
              <Text style={styles.inscrolltxt2}>5. You are successfully 
              logged in on your TV!</Text>
            </View>
          </ScrollView>
        </View>
      </PaperProvider>
  
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    safer: {
      flex: 1,
      backgroundColor: '#080708'
    },
    rowa: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#0E1C36',
      padding: 5
    },
    colwa: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#0E1C36',
    },
    colwatexts: {
      padding: 8,
      color: '#E6E8E6',
      fontFamily: 'Helvetica', 
    },
    imgbar: {
      flex: 7,
      alignItems: 'center',
    },
    imgbarcon: {
      width: 100,
      height: 100,
    },
    menu: {
      padding: 8,
      width: 50,
      height: 50
    },
    bookmarks: {
      flex: 1,
      padding: 5
    },
    accset: {
      flex: 1,
      padding: 5
    },
    input: {
      flex: 1,
      color: 'white',
      padding: 8,
      backgroundColor: '#3581B8',
      margin: 3,
      maxWidth: 200,
      fontFamily: 'Helvetica', 
      borderRadius:5,
      letterSpacing:1
    },
    inscroll: {
      padding: 8
    },
    inscrolltxt: {
      color: 'white',
      fontSize: 45,
      paddingTop: 20,
      fontWeight: '500',
      fontFamily: 'Helvetica', 
    },
    inscrolltxt1: {
      marginTop: 35,
      color: "#3581B8",
      fontSize: 25,
      fontWeight: '500',
      fontFamily: 'Helvetica', 
    },
    inscrolltxt2: {
      marginTop: 35,
      color: "#DEE2D6",
      fontSize: 15,
      fontWeight: '300',
      fontFamily: 'Helvetica', 
    },
    inscrollbtn: {
      backgroundColor: '#FFC43D',
      width: 80,
      marginTop: 20,
      borderRadius:8
    }
  });
  
export default Home;