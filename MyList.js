import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { addItem } from './ItemsActions';
function AddItemsScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Add items here!</Text>
            {
                props.items.possible.map((item, index) => (
                    <Button
                        key={item}
                        title={`Add ${item}`}
                        onPress={() => props.addItem(index)
                        }
                    />
                ))
            }
            <Button
                title="Back to home"
                onPress={() =>
                    props.navigation.navigate('Home')
                }
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
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