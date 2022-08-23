import { StyleSheet, Text, FlatList, View } from 'react-native';
import Colors  from '../assets/Colors'
import { MEALS } from '../assets/data';
import { useContext } from 'react';
import { FavContext } from './context/Context';
import MealGrid from './ui/MealGrid';


function FavoritesScreen({navigation}) {

    const favCtx = useContext(FavContext);
    


    
    const favoriteMeals = MEALS.filter(meal => favCtx.ids.includes(meal.title))


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

    if (!favoriteMeals) {
        return (
            <View style={styles.container}>
                <Text>
                    Nothing to show here..................
                </Text>
            </View>
        )
    } else {
        return (
        <View style={styles.container}>
            <FlatList
            data={favoriteMeals}
            keyExtractor={item => item.id}
            renderItem={renderMeal} />
        </View>
    )
    }

    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.secondary200,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default FavoritesScreen