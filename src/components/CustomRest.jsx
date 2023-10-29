import React, {useState} from 'react';
import WheelPicker from 'react-native-wheely';
import Modal from 'react-native-modal';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
let angkaArray = [];
for (var i = 1; i <= 60; i++) {
  angkaArray.push(i);
}
const CustomRest = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Rest</Text>
      <View style={styles.number}>
        <Text style={styles.title}>► </Text>
        <Text style={styles.title}>{selectedIndex + 1}</Text>
        <Text style={styles.title}> ◄</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => toggleModal()}>
        <Text style={styles.buttonText}>Set</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
          }}>
          <View>
            <Text
              style={[styles.title, {textAlign: 'center', marginBottom: 10}]}>
              Set Rest
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View style={{borderRadius: 8, borderWidth: 1}}>
                <WheelPicker
                  selectedIndex={selectedIndex}
                  options={angkaArray}
                  onChange={index => setSelectedIndex(index)}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 10,
              }}>
              <TouchableOpacity
                style={[styles.button, {flex: 0}]}
                onPress={() => toggleModal()}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    backgroundColor: '#00ADB5',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    borderRadius: 6,
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  number: {
    flexDirection: 'row',
  },
});
export default CustomRest;
