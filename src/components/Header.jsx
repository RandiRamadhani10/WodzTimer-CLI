import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        W<Icon name="stopwatch" size={28} />
        Dz
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#F5F9FA',
    elevation: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});
export default Header;
