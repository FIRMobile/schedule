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
  FlatList
} from 'react-native';
import { Field, reduxForm } from 'redux-form'

let click=1;
export default class GroupeScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: click,
    };
  }

  render () {
    return (
      <View>
        <View style={styles.viewToolBar}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', borderWidth: 1}}>
            <TouchableOpacity style={{ height: 40, width: 40, borderWidth: 1, justifyContent: 'center'}}>
              <Image
                source={require('../images/ic_back.png')}
                style={styles.iconBack}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View style={{flex: 5, alignItems: 'center'}}>
            <Text style={styles.ToolBarActionTitle}>Расписание группы</Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', borderWidth: 1}}>
            <TouchableOpacity style={{ height: 40, width: 40, borderWidth: 1, justifyContent: 'center', paddingLeft: 10}}>
              <Image
                source={this.state.value % 2 ? require('../images/ic_favorite.png') : require('../images/ic_favorite_border.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <View style={{marginHorizontal: 16, marginTop: 8, borderWidth: 0.5, borderRadius: 2}}>
            <View style={{height: 40, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.5}}>
              <Text style={{color: '#000', fontSize: 20}}>Понедельник</Text>
            </View>
            <View>
              <View style = {{flexDirection: 'row',}}>
                <View style={{width: 72, borderRightWidth: 0.5, paddingLeft: 8}}>
                  <Text style={{color: '#000', fontSize: 16}}>08:00</Text>
                  <Text style={{color: '#000', fontSize: 16}}>09:40</Text>
                  <Text style={{color: '#000', fontSize: 16}}>(1 пара)</Text>
                </View>
                <View style={{flex: 1, paddingLeft: 8}}>
                  <Text style={{color: '#000', fontSize: 16}}>Управление проектами (лекция)</Text>         
                  <Text style={{color: '#000', fontSize: 16}}>Усанов Г.Г.</Text>      
                  <Text style={{color: '#000', fontSize: 16}}>3371, 3372, 3373</Text>
                </View>
              </View>
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
    borderBottomWidth: 0.5,
  },
  viewToolBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 71 : 56,
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
  },
  icon: {
    height: 32,
    width: 32,
  },
  iconBack: {
    height: 28,
    width: 28,
    marginLeft: -5,
  },
});
