import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors  from '../assets/Colors'
import {MEALS}  from '../assets/data'
import { useContext, useLayoutEffect } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FavContext } from './context/Context';



function ItemScreen({route, navigation}) {
      const { title, imageUrl, steps, ingredients } = route.params;
      const favCtx = useContext(FavContext);

      const isMealFav = favCtx.ids.includes(title)

      function renderStep ({item}) {
        return(
            <Text 
                style={[styles.steps, styles.text]}>{item}</Text>
        )
      }

      function renderIngridient ({item}) {
        return(
            <Text 
                style={[styles.ingredient]}>{item}</Text>
        )
      }

      useLayoutEffect(() => {
        const mealTitle = MEALS.find(
            (meal) => meal.title === title 
            ).title;

            navigation.setOptions({
                title: mealTitle,
                headerRight: () => (
                  <Ionicons
                    onPress={addFavMeal}
                    name={isMealFav ? "star" : "star-outline"}
                    color={Colors.secondary600}
                    size={24}
                  />
                )
            });
    }, [title, navigation])

    
    function addFavMeal () {
      
      console.log(favCtx.ids)
      if (isMealFav) {
        favCtx.removeFavorite(title)
      } else {
        favCtx.addFavorite(title)
      }
    }



  return (
    <View style={styles.mainContainer}>
      <View 
      style={styles.container}
      >
        <Image style={styles.image} source={{uri: imageUrl}}/>
        <Text style={[styles.text, styles.header]}>{title}</Text>
        <View style={styles.details}>
        <FlatList
            data={ingredients}
            // keyExtractor={(Math.floor(Math.random()) * 1000)}
            renderItem={renderIngridient} />
            {/* {ingredients.map((i , idx) => (
                <Text 
                style={styles.ingredient}
                key={idx + i}>{i}</Text>
            ))} */}
            {/* {steps.map((s , idx) => (
                <Text 
                style={[styles.steps, styles.text]}
                key={idx + s}>{s}</Text>
            ))} */}
              <FlatList
            data={steps}
            // keyExtractor={(Math.floor(Math.random()) * 1000)}
            renderItem={renderStep} />
        </View>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.secondary400,
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '90%',
      height: '90%',
      borderRadius: 20,
      margin: '5%',
      overflow: 'hidden',
      borderRadius: 20,

    }, 
    text: {
      color: Colors.main600,
      fontSize: 18
    }, 
    image : {
        width: '100%',
        height: 100,
        position: 'relative',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    }, mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      }, details: {
        padding: 10,
        paddingBottom: 100,
        marginHorizontal: 10,
        backgroundColor: Colors.secondary200,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20

      }, ingredient: {
        marginBottom: 5,
      }, header : {
        marginVertical: 10,
      },
      steps : {
        marginBottom: 10
      }
  });


export default ItemScreen