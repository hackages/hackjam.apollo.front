import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onSubmitEditing={() => {}}
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="Enter your email"
            placeholderTextColor="rgba(225,225,225,0.7)"
          />

          <TextInput
            style={styles.input}
            returnKeyType="go"
            placeholder="Password"
            placeholderTextColor="rgba(225,225,225,0.7)"
            secureTextEntry
          />

          <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {},
  buttonContainer: {},
  buttonText: {}
});
