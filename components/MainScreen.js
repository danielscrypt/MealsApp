import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CATEGORY } from '../assets/data';
import Category from './ui/Category';
import Colors  from '../assets/Colors'



export default function MainScreen({ navigation }) {

    const styles = StyleSheet.create({
        mainScreen: {
          flex: 1,
          marginTop: 20,
          flexDirection: 'column',
          alignItems:'center',
          justifyContent:'space-between',

        },
      });

      function renderItem ( {item} ) { 
        function pressHandler() {
          navigation.navigate('CategoryScreen', {
            categoryId: item.key,
          })
        }
        return (
           <Category onPress={pressHandler} bgColor={item.color}>{item.title}</Category>
        )
    }
      
    
  return (
    <View style={styles.mainScreen}>
        <FlatList 
        numColumns={2}
        data={CATEGORY} 
        renderItem={renderItem} 
        keyExtractor={item => item.key} />
    </View>
  );
}