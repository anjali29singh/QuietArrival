/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StyleSheet, Text, View} from 'react-native';
// import LocationCard from './components/LocationCard';

function App() {
  return (
    <>
      <View>
        <Text style={styles.heading}>QuietArrival</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {},

  heading: {
    backgroundColor: 'indigo',
    color: 'white',
    fontSize: 25,
    padding: 5,
  },
});
export default App;
