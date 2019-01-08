import React from 'react';
import { Text, Alert, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './src/styles';
export default class endConfirm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      maXN: '',
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
            placeholder="Nhập Mã Xác Nhận"
            onChangeText={(maXN) => this.setState({ maXN })}
          />

        </View>
        <TouchableOpacity onPress={() => Alert.alert("Thông Báo", this.state.maXN)}
          style={styles.touchbtn}
        >
          <View style={styles.centers}>
            <Text style={styles.txt}> Hoàn Thành </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

