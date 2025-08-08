import React from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../assets/images/icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <TextInput
          label="Email"
          mode="outlined"
          style={styles.input}
        />
        
        <Button mode="contained" style={styles.button}>
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86C5E0',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingTop: 140,
  },
  logo: {
    width: 300,  
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: 'white',
  },
  linkText: {
    marginBottom: 15,
    color: 'gray',
  },
  link: {
    color: 'blue',
  },
  button: {
    backgroundColor: '#10213A',
    width: '100%',
    paddingVertical: 6,
  },
});