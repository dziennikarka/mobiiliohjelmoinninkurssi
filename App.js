import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {

  const [text, setText] = React.useState('');

  const buttonPressed = () =>{
    Alert.alert('You typed: ' + text);
  }
  return (
    <View style={styles.container}>
      <Image style={{width:250, height:300}}
             source={require('./img/tea.png')}/>
      <Text style={styles.alerttext}>Hello world!</Text>
      <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}}
      onChangeText={text => setText(text)}
      value={text}/>
      <Button onPress={buttonPressed} title="Press me"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alerttext: {
    fontSize: 18,
    color: 'red'
  },
});
