import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView, Text} from 'react-native';
import {CustomLaps, CustomRest, CustomWork, Gap, Header} from '../components';
const Custom = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />

        <Gap height={20} />
        <View style={styles.base}>
          <View style={styles.child}>
            <Text style={styles.text}>Custom</Text>
          </View>
          <Gap height={20} />
          <CustomLaps />
          <Gap height={20} />
          <CustomWork />
          <Gap height={20} />
          <CustomRest />
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
    padding: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  child: {
    flex: 1,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: 'gray',
    alignItems: 'center',
  },
});
export default Custom;
