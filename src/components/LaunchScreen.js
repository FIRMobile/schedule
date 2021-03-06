import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default () => (
  <View style={styles.container}>
    <Image source={require('../images/logoBig.png')} style={styles.logo} resizeMode={'contain'} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#05336e'
  },
  logo: {
    marginTop: 80,
    height: 180,
  }
})
