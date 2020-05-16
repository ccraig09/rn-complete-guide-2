import React from "react";
import MealList from "../components/MealList";
import { Meals, MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList />;
};

FavoritesScreen.navigationOptions = {
  title: "Your Favorites",
};

export default FavoritesScreen;
