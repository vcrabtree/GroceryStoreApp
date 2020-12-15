import React from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import { styles } from './styles'

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "yellowgreen" }}>
        <Text>{'\n'}</Text>
        <Image source={require('./assets/logo.gif')} style={{ width: 130, height: 200 }} />
        <Text>{'\n'}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('All Items')}
          style={styles.homeButton}>
          <Text style={styles.homeButtonText}>Check Out Our{'\n'}Available Items!</Text>
        </TouchableOpacity>
      </View>
    );
  }
