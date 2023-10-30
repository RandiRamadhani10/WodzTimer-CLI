import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Gap from './Gap';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Rounds = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>1 Minute Rounds</Text>
      <Gap height={14} />
      <View style={styles.up}>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Up</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>15</Text>
        </TouchableOpacity>
      </View>
      <Gap height={14} />
      <View style={styles.up}>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Down</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>20</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>30</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Custom')}>
          <Text style={styles.buttonText}>
            <Icon name="dashboard-customize" size={24} />
          </Text>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  up: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default Rounds;
