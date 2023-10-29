import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Gap from './Gap';
const Set = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SET</Text>
      <Gap height={10} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="volume-2" size={30} color="white" />
          {/* <Text style={styles.buttonText}>Volume</Text> */}
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity style={styles.button}>
          <Icon name="sun" size={30} color="white" />
          {/* <Text style={styles.buttonText}>Volume</Text> */}
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity style={styles.button}>
          <Icon name="clock" size={30} color="white" />
          {/* <Text style={styles.buttonText}>Volume</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#F5F9FA',
    borderWidth: 1,
    borderColor: '#CBCBCB',
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    elevation: 6,
  },
  button: {
    backgroundColor: '#FF414C',
    padding: 10,
    flex: 1,
    alignItems: 'center',
    borderRadius: 14,
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
export default Set;
