import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import UserInput from "@/components/UserInput";
import BillSplit from "@/components/BillSplit";
import { calculateBillSplit } from "@/utils/calculations";

export default function App() {
  const [users, setUsers] = useState([]);
  const [billAmount, setBillAmount] = useState("");
  const [billSplit, setBillSplit] = useState(null);

  const addUser = (salary) => {
    setUsers([...users, { id: Date.now(), salary: parseFloat(salary) }]);
  };

  const calculateSplit = () => {
    if (users.length > 0 && billAmount) {
      const split = calculateBillSplit(users, parseFloat(billAmount));
      setBillSplit(split);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fair Bill Splitter</Text>
      <UserInput
        onAddUser={addUser}
        onSetBillAmount={setBillAmount}
        billAmount={billAmount}
        onCalculate={calculateSplit}
      />
      {billSplit && <BillSplit billSplit={billSplit} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
