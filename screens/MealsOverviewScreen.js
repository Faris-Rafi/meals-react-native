import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const navTitle = CATEGORIES.find((item) => item.id === categoryId).title;

    navigation.setOptions({
      title: navTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}
