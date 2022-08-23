import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors  from '../../assets/Colors'

function Category({children, bgColor , onPress}) {

    const styles = StyleSheet.create({
        container: {
          backgroundColor: bgColor,
          alignItems: 'center',
          justifyContent: 'center',
          width: 150,
          height: 150,
          borderRadius: 20,
          marginLeft: '5%',
          marginRight: '5%',
          marginBottom: '10%',
          overflow: 'hidden',
        }, text: {
          color: Colors.main400,
          fontWeight: 'bold',
          fontSize: 18
        },
      });

  return (
    <>
      <Pressable 
      style={styles.container}
      onPress={onPress}
      android_ripple={{color: '#ccc' ,}}>
      <Text style={styles.text}>{children}</Text>
      </Pressable>
    </>
  );
}

export default Category