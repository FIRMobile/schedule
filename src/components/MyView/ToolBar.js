import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';

export default class ToolBar extends Component {
  render() {
    return (
        <View style={styles.viewToolBar}>
          <Text style={styles.toolBarTitle}>{this.props.value}</Text>
          
          <TextInput
            style={styles.searchInput}
            placeholder="Номер группы..."
            underlineColorAndroid="transparent"
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  viewToolBar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 60 : 45,
    paddingTop: Platform.OS === 'ios' ? 15 : 0,
    paddingHorizontal: 8,
    backgroundColor: '#05336e',
    alignSelf: 'stretch',
  },
  toolBarTitle: {
    alignItems: 'center',
    fontSize: 18,
    color: '#fff',
  },
});
