import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList, Text, View, Button, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import { removeItem } from './ItemsActions';

import { styles } from './styles'
import { data } from './data';

function ListScreen(props, { navigation }) {
    const ItemView = ({ item, index }) => {
        return (
          <View style={styles.listItem}>
            <View style={{ flex: 1 }}>
                <Image
                source={ data[data.findIndex(element => element.groceryItem.localeCompare(item.groceryItem) == 0)].src }
                style={styles.itemImage}
                />
            </View>
            <Text style={styles.itemTextStyle} onPress={() => props.removeItem(index)}>{item.groceryItem}</Text>
          </View>
        );
      };

      const ItemSeparatorView = () => {
        return (
          <View style={styles.fList} />
        );
      };

      return (
        <View style={styles.container2}>
        <Text style={styles.heading11}>JIV'S GROCERIES</Text>
        <Text style={styles.heading2}>Groceries</Text>

        <Text>You have {props.items.current.length} items in your list.</Text>
        <FlatList
          data={props.items.current}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          keyExtractor={item => item.id} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Add Items')}>
            <Text style={styles.myListText}>Click Here to Add Items to Your List!</Text>
          </TouchableOpacity>
      </View>
    );
}

const mapStateToProps = (state) => {
    const { items } = state
    return { items }
};

const mapDispatchToProps = dispatch => (bindActionCreators({ removeItem }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
