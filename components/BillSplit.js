import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BillSplit = ({ billSplit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bill Split Results:</Text>
      {billSplit.map((split, index) => (
        <Text key={index} style={styles.splitText}>
          User {index + 1}: ${split.toFixed(2)}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  splitText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default BillSplit;
