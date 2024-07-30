import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const UserInput = ({ onAddUser, onSetBillAmount, billAmount, onCalculate }) => {
  const [salary, setSalary] = useState('');

  const handleAddUser = () => {
    if (salary) {
      onAddUser(salary);
      setSalary('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter monthly salary"
        value={salary}
        onChangeText={setSalary}
        keyboardType="numeric"
      />
      <Button title="Add User" onPress={handleAddUser} />
      <TextInput
        style={styles.input}
        placeholder="Enter bill amount"
        value={billAmount}
        onChangeText={onSetBillAmount}
        keyboardType="numeric"
      />
      <Button title="Calculate Split" onPress={onCalculate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default UserInput;
