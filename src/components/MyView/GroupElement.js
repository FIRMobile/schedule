import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class GroupElement extends Component {
  render() {
    return (
        <View style={styles.groupItem}>
          <Text style={styles.groupName}>{this.props.value}</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  groupName: {
    fontSize: 16,
    color: '#000',
  },
  groupItem: {
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#6d6e71',
    marginBottom: 2,
    padding: 3,
    borderBottomWidth: 1,
  },
});
