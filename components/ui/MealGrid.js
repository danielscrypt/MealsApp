import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors  from '../../assets/Colors'

function MealGrid({ 
    onPress,
    title, 
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree }) {

    const styles = StyleSheet.create({
        container: {
          backgroundColor: Colors.secondary400,
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: 300,
          height: 200,
          borderRadius: 20,
          margin: '5%',
          overflow: 'hidden',
          borderRadius: 20,

        }, text: {
          color: Colors.main600,
          fontWeight: 'bold',
          fontSize: 18
        }, image : {
            width: '100%',
            height: 100,
            position: 'relative',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
        }
      });

  return (
    <>
      <Pressable 
      onPress={onPress}
      style={styles.container}
      android_ripple={{color: '#ccc' ,}}
      >
        <Image style={styles.image} source={{uri: imageUrl}}/>
      <Text style={styles.text}>{title}</Text>
      <View>
        <Text>{affordability}</Text>
        <Text>{duration} minutes</Text>
        <Text>{complexity}</Text>
      </View>
      </Pressable>
    </>
  );
}

export default MealGrid