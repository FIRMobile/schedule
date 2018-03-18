import React from 'react';
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

const outPutMasters = (mastersList, onChoiceMaster) => {
  const views = [];
  Object.keys(mastersList).forEach((key) => {
    views.push(<TouchableOpacity
      onPress={() => onChoiceMaster(key)}
      key={mastersList[key].ID}
      style={styles.masterItem}
    >
      <Image source={require('../images/photo_master.png')} style={styles.masterPhoto} />
      <Text style={styles.masterName}>{`${mastersList[key].NAME} ${mastersList[key].LAST_NAME}`}</Text>
    </TouchableOpacity>);
  });

  return views;
};

export default ({
  mastersList, onChoiceMaster, onComeBack, onSearchMasters,
}) => (
  <View>
    <View style={styles.viewToolBar}>
      <TouchableOpacity
        onPress={() => onComeBack()}
      >
        <Image source={require('../images/ic_back.png')} style={{ height: 30, width: 10 }} />
      </TouchableOpacity>
      <Text style={styles.ToolBarActionTitle}>ПОИСК МАСТЕРА</Text>
      <Text style={styles.ToolBarActionText} />
    </View>

    <TextInput
      onChangeText={(term) => { onSearchMasters(term); }}
      style={styles.searchInput}
      placeholder="Мастер..."
    />

    <ScrollView>
      {outPutMasters(mastersList, onChoiceMaster)}
    </ScrollView>

  </View>
);


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
    padding: 10,
    borderWidth: 1,
    borderColor: '#888',
  },
  masterPhoto: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
});
