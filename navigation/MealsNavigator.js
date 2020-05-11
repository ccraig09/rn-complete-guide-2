import { Platform, Modal } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScren from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScren,
  },
  {
    // mode: "modal",
    // initialRouteName: "Categories",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : " ",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(MealsNavigator);
