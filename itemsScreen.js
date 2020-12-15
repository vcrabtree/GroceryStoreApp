import React from 'react';
import { Alert, Text, View, Image, FlatList, Button} from 'react-native';
import { styles } from './styles'
import { data } from './data'

export default function ItemsScreen({ navigation }) {

    const ItemView = ({ item }) => {
      return (
        <View style={styles.listItem}>
          <View style={{ flex: 1 }}>
            <Image
              source={item.src}
              style={styles.itemImage}
            />
          </View>
          <Text style={styles.itemTextStyle} onPress={() => getItem(item)}>{item.groceryItem}</Text>
        </View>
      );
    };

    const ItemSeparatorView = () => {
      return (
        <View style={styles.fList} />
      );
    };

    const getItem = (item) => {
      Alert.alert('Item: ' + item.groceryItem + '\n' + 'Price: ' + item.price + '\n' + 'Category: ' + item.category + '\n' + 'Item #: ' + item.id + '\n')
    };

    const renderItem = ({ item }) => (
      <View style={styles.listItem}>
        <Image
          source={{ uri: item.src }}
          style={{ width: 40, height: 40 }}
        />
        <Text>{item.groceryItem}</Text>
      </View>
    );

    return (
      <View style={styles.container2}>
        <Text style={styles.heading11}>JIV'S GROCERIES</Text>
        <Text style={styles.heading2}>Groceries</Text>
        <FlatList
          data={data}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          keyExtractor={item => item.id} />
        <Button title = 'Click here to add items to your list!' onPress = {() => navigation.navigate('Add items')} />
      </View>
    );
}
