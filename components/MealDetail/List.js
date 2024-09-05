import { StyleSheet, Text, View } from "react-native";

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.container}>
      <Text style={styles.text}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    padding: 10,
    backgroundColor: "#011308",
    borderRadius: 8,
  },
  text: {
    color: "white",
  },
});
