import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    textAlign: "center",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
