import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export default function MealDetailScreen({ route, navigation }) {
  // const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const isFavoriteMeal = favoriteMealIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (isFavoriteMeal) {
      dispatch(removeFavorite({ id: mealId }));
      // favoriteMealsCtx.removeFavorite(mealId);
    } else {
      dispatch(addFavorite({ id: mealId }));
      // favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return (
          <IconButton
            icon={isFavoriteMeal ? "star" : "star-outline"}
            color="yellow"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [mealId, isFavoriteMeal, navigation]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.detailContainer}>
        <MealDetail
          title={selectedMeal.title}
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.innerListContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
        </View>
        <View style={styles.innerListContainer}>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  detailContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
  },
  listContainer: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  innerListContainer: {
    width: "100%",
  },
});
