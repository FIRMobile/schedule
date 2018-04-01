import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
} from 'react-native';

export default class GroupElement extends Component {
  render() {
    return (
        <View style={styles.groupItem}>
          <TouchableOpacity style={{flex: 1, paddingVertical: 5}}
          onPress={ () => this.props.onOpenSearch()}>
            <Text style={styles.groupName}>{this.props.value}</Text>
          </TouchableOpacity>
          {this.props.favorite ? 
            <TouchableOpacity>
              <Image source={require('../../images/ic_favorite.png')} style={styles.icon} resizeMode="contain" />
            </TouchableOpacity>
            : null}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  groupName: {
    fontSize: 18,
    color: '#333',
    paddingHorizontal: 10,
  },
  groupItem: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: 35,
    width: 35,
    marginHorizontal: 16,
  },
});
