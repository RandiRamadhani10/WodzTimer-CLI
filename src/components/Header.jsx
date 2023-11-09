import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const screen = Dimensions.get('screen');
const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logowodztimer.png')}
        style={styles.image}
      />
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
  image: {
    width: screen.width * 0.29,
    height: screen.width * 0.12,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});
export default Header;
