import { Text, View, StyleSheet } from "react-native";

export default function MealDetail({
  title,
  duration,
  complexity,
  affordability,
}) {
  return (
    <View style={styles.details}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.detailItems}>
        <Text style={[styles.item, { backgroundColor: "darkgreen" }]}>
          {duration}m
        </Text>
        <Text style={[styles.item, { backgroundColor: "darkblue" }]}>
          {complexity.toUpperCase()}
        </Text>
        <Text style={[styles.item, { backgroundColor: "darkred" }]}>
          {affordability.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  detailItems: {
    marginTop: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  item: {
    color: "white",
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 15,
  },
});
