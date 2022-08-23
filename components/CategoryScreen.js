import { useLayoutEffect } from "react";
import { View , Text, StyleSheet, FlatList } from "react-native";
import Colors from "../assets/Colors";
import { MEALS, CATEGORY } from "../assets/data"
import MealGrid from "./ui/MealGrid";


export default function CategoryScreen({ route, navigation }) {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0;
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORY.find(
            (category) => category.key === catId 
            ).title;

            navigation.setOptions({
                title: categoryTitle,
            });
    }, [catId, navigation])

// console.log(MEALS)
    function renderMeal({item}) {
        function pressHandler() {
            navigation.navigate('ItemScreen', {
              title: item.title,
              imageUrl: item.imageUrl,
              ingredients: item.ingredients,
              steps: item.steps,


            })
          }
        return (
            <MealGrid 
            onPress={pressHandler}
            affordability={item.affordability}
            complexity={item.complexity}
            imageUrl={item.imageUrl}
            duration={item.duration}
            ingredients={item.ingredients}
            steps={item.steps}
            isGlutenFree={item.isGlutenFree}
            isVegan={item.isVegan}
            isVegetarian={item.isVegetarian}
            isLactoseFree={item.isLactoseFree}
            title={item.title} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
            data={displayedMeals}
            keyExtractor={item => item.id}
            renderItem={renderMeal} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.secondary200,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });