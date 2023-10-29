import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Gap from './Gap';
const Workout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pre Built Workout</Text>
      <Gap height={14} />
      <View style={styles.up}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>HIIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>TABATA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>AMRAP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText]}>ENOM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#00ADB5',
    width: 70,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  up: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
});
export default Workout;
