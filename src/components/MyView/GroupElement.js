import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
} from 'react-native';

let click=1;
export default class GroupElement extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: click,
    };
  }

  render() {
    return (
        <View style={styles.groupItem}>
          <TouchableOpacity style={{flex: 1, paddingVertical: 4}} onPress={ () => this.props.onOpenGroup() }>
            <Text style={styles.groupName}>{this.props.value}</Text>
          </TouchableOpacity>
          {this.props.favorite ? 
            <TouchableOpacity onPress={() => {this.setState({ ...this.state, value: click += 1 });}}>
              <Image
                source={this.state.value % 2 ? require('../../images/ic_favorite.png') : require('../../images/ic_favorite_border.png')}
                style={styles.icon}
                resizeMode="contain"
              />
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
    paddingHorizontal: 8,
  },
  groupItem: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: 32,
    width: 32,
    marginHorizontal: 14,
  },
});
