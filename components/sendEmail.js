import React from 'react';
import { Text, Alert, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './src/styles';

export default class sendEmail extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require('./src/images/logo.png')}
            style={styles.images}/>
        </View>
        <View style={styles.bdInput}>
          <TextInput
            style={styles.inpText}
            placeholder="Nhập Email"
            onChangeText={(email) => this.setState({ email })}
          />

        </View>
        <TouchableOpacity onPress={() => Alert.alert("Thông Báo", this.state.email)}
          style={styles.touchbtn}
        >
          <View style={styles.centers}>
            <Text style={styles.txt}> Send </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

