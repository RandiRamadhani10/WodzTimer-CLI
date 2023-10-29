import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Gap, Header, Rounds, Set, Workout} from '../components';

import Icon from 'react-native-vector-icons/MaterialIcons';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Gap height={20} />
        <View style={styles.base}>
          <Set />
          <Gap height={20} />
          <Rounds navigation={navigation} />
          <Gap height={20} />
          <Workout />
          <Gap height={20} />
          <TouchableOpacity style={[styles.button, {flex: 0}]}>
            <Text style={styles.buttonText}>GO</Text>
            <Gap width={10} />
            <Icon name="directions-run" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  base: {
    paddingHorizontal: 20,
    flex: 1,
  },
  button: {
    backgroundColor: '#00ADB5',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    borderRadius: 6,
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default Home;
