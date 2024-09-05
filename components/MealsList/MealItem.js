import { Image, Platform, Pressable, StyleSheet, View } from "react-native";
import MealDetail from "../MealDetail";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("Detail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <View style={styles.innerContainer}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
          onPress={pressHandler}
        >
          <View style={styles.itemsContainer}>
            <View>
              <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
            <MealDetail
              title={title}
              duration={duration}
              complexity={complexity}
              affordability={affordability}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#cccc",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  itemsContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
  },
  image: {
    width: 100,
    height: 100,
  },
});
