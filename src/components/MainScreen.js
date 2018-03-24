import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from 'react-native';
import { Field, reduxForm } from 'redux-form'
import { Toolbar } from 'react-native-material-ui';
import ToolBar from './MyView/ToolBar'
import GroupElement from './MyView/GroupElement'

export default class MainScreen extends React.Component {
  render () {
    return (
      <View>
        <Toolbar
          centerElement="Поиск группы"
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
          }}
        />
    
        <ScrollView>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View>
              <Text style={{color: '#000', padding: 5}}>ФКТИ</Text>
            </View>
            <View style={{flex: 10}}>
              <GroupElement value={'1111'}/>
              <GroupElement value={'1234'}/>
              <GroupElement value={'2341'}/>
              <GroupElement value={'3324'}/>
            </View>
          </View>
        </ScrollView>
    
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    justifyContent: 'flex-start',
  },
  ToolBarActionTitle: {
    alignItems: 'center',
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  viewToolBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 65 : 50,
    paddingTop: Platform.OS === 'ios' ? 15 : 0,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#f9fafb',
    borderWidth: 0.5,
    borderColor: '#888',
  },
  ToolBarActionText: {
    alignItems: 'center',
    fontSize: 14,
    color: '#000',
  },
  masterItem: {
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#888',
    marginBottom: 2,
    borderBottomWidth: 0.5,
  },
  masterName: {
    color: '#000',
    padding: 10,
  },
  searchInput: {
    padding: 5,
    borderWidth: 1,
    fontSize: 16,
    borderColor: '#6d6e71',
  },
  masterPhoto: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
});