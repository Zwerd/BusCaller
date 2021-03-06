
import React, { Component } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { View, StyleSheet } from 'react-native'
class MapTest extends Component {
  render () {
    return (

      <View style={styles.container}>
      <View>
        <Text>TEST</Text>
      </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 32.08088,
            longitude: 34.78057,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        ></MapView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: { ...StyleSheet.absoluteFillObject }
})
export default MapTest
