import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../assets/Colors';


export default function AppBar() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>BounGiorno !!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '10%',
    backgroundColor: Colors.main400,
    alignItems: 'center',
    justifyContent: 'center',
  }, text : {
    color: Colors.secondary200,
    fontSize: 20,
    marginTop: '5%',
  }
});
