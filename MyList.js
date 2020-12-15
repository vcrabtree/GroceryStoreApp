import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList, Text, View, Button, Image} from 'react-native';
import { addItem } from './ItemsActions';

import { styles } from './styles'
import { data } from './data';

function AddItemsScreen(props) {

    const ItemView = ({ item, index }) => {
        return (
          <View style={styles.listItem}>
            <View style={{ flex: 1 }}>
                <Image
                source={ data[data.findIndex(element => element.groceryItem.localeCompare(item) == 0)].src }
                style={styles.itemImage}
                />
            </View>
            <Text style={styles.itemTextStyle} onPress={() => props.addItem(index)}>{item}</Text>
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

        <FlatList
          data={props.items.possible}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          keyExtractor={item => item.id} />
      </View>
    );
}

const mapStateToProps = (state) => {
    const { items } = state
    return { items }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addItem,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AddItemsScreen);