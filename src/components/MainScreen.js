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
import GroupElement from './MyView/GroupElement'

export default class MainScreen extends React.Component {
  render () {
    return (
      <View>

        <View style={styles.viewToolBar}>
          <Text style={styles.ToolBarActionTitle}>Поиск группы</Text>
          <View style={{flexDirection: 'row', backgroundColor: '#fff', flex: 1, justifyContent: 'space-between',}}>
            <TextInput
              style={styles.searchInput}
              placeholder="3371"
              underlineColorAndroid="transparent"
              keyboardType="numeric"
            />
            <Image source={require('../images/ic_search.png')} style={styles.icon} resizeMode="contain" />
          </View>
        </View>

        <ScrollView>

          <View style={styles.containerFaculty}>
            <View style={{ borderRightWidth: 0.5, borderColor: '#05336e' }}>
              <View style={styles.containerNameFaculty}>
                <Text style={styles.nameFaculty}>ФКТИ</Text>
              </View>
            </View>
            <View style={{flex: 1}}>
              <GroupElement value={'1111'} favorite={true}/>
              <GroupElement value={'1234'} favorite={true}/>
              <GroupElement value={'2341'}/>
              <GroupElement value={'3324'}/>
            </View>
          </View>

          <View style={styles.containerFaculty}>
            <View style={{ borderRightWidth: 0.5, borderColor: '#05336e' }}>
              <View style={ styles.containerNameFaculty }>
                <Text style={styles.nameFaculty}>ЭТФ</Text>
              </View>
            </View>
            <View style={{flex: 1}}>
              <GroupElement value={'1111'}/>
              <GroupElement value={'1234'}/>
              <GroupElement value={'2341'}/>
            </View>
          </View>

        </ScrollView>
    
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerFaculty: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    backgroundColor: '#fff',
    borderColor: '#05336e',
    borderBottomWidth: 1,
  },
  nameFaculty: {
    color: '#333',
    fontWeight: 'bold',
  },
  containerNameFaculty: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
  },
  viewToolBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 65 : 50,
    paddingTop: Platform.OS === 'ios' ? 15 : 0,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#05336e',
    borderWidth: 0.5,
    borderColor: '#05336e',
  },
  ToolBarActionTitle: {
    fontSize: 18,
    color: '#fff',
    paddingRight: 16,
  },
  searchInput: {
    padding: 0,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
    paddingLeft: 5,
    flex: 1,
  },
  icon: {
    height: 35,
    width: 35,
    marginHorizontal: 5,
  },
});