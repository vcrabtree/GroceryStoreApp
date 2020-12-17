import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Text, View, TextInput, TouchableOpacity, TouchableHighlight, Modal, ScrollView, Image, Alert,  Slider, Picker } from 'react-native';
import { Checkbox } from 'react-native-paper';
/*import { Marker, MapView } from 'react-native-maps';*/
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddItemsScreen from './MyList';
import { styles } from './styles'
import { data } from './data'

import itemsReducer from './ItemsReducer';
import HomeScreen from './homeScreen'
import ItemsScreen from './itemsScreen'
import ListScreen from './listScreen'

// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';

function UselessTextInput(props) {
  return (
    <TextInput
      {...props}
      style={{ height: 30, borderWidth: 1, padding: 6, paddingTop: 10, margin: 5, color: 'midnightblue', borderColor: '#A5C9FA', backgroundColor: "oldlace", }}
      editable
      maxLength={30}
    />
  );
}

function SearchScreen({ navigation, route }) {
  const [nameInput, setNameInput] = useState('');
  const [itemNoInput, setItemNoInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');

  const [checked, setChecked] = React.useState(false);

  const [sliderValue, setSliderValue] = useState(15.49);

  const [modalVisible, setModalVisible] = useState(false);

  const [max, setMax] = useState(49.99);
  const [min, setMin] = useState(0.99);

  const [itemsList, setItemsList] = useState(data);
  const searchItem = () => {
    if (nameInput === "") {
      Alert.alert("At least an input is empty.");
    }
    else if (itemFound()) {
      Alert.alert(nameInput + " has been found." + '\n' + 'You want to add it in the list?' + "\n" + "If yes, click on the modal below.");
    }
    else if(!itemFound()){
      Alert.alert(nameInput +" isn't available. Sorry!");
    }
  };

  function itemFound() {
    for (let item of itemsList) {
        if (item.groceryItem === nameInput)
            return true;
    }
    return false;
}

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "yellowgreen", paddingTop: 70 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={'always'}>
        <Text style={styles.heading11}>JIV'S GROCERIES</Text>
        <Text style={styles.heading2}>Advanced Search</Text>
        <View style={{
          flex: 0,
          flexDirection: 'column',
          justifyContent: 'space-between', width: 250, height: 450, backgroundColor: 'olivedrab', padding: 20,
        }}>

          <Text style={styles.searchText}>Name:</Text>
          <UselessTextInput
            multiline
            numberOfLines={4}
            value={nameInput}
            onChangeText={itemText => setNameInput(itemText)}
          />
          <Text style={styles.searchText}>Item No.:</Text>
          <UselessTextInput
            keyboardType='numeric'
            multiline
            keyboardType="number"
            numberOfLines={4}
            value={itemNoInput}
            onChangeText={itemText => setItemNoInput(itemText)}
          />
          <Text style={styles.searchText3}>Category:</Text>
          <View style={styles.containerPicker}>
            <Picker style={styles.pickerStyle}
              selectedValue={categoryInput}
              onValueChange={(itemValue) =>
                setCategoryInput(itemValue)}
            >
              <Picker.Item label="Dairy" value="dairy" />
              <Picker.Item label="Produce" value="produce" />
              <Picker.Item label="Meat & Seafood" value="meats" />
              <Picker.Item label="Beer & Wine" value="bw" />
              <Picker.Item label="Condiments" value="con" />
              <Picker.Item label="Candy & Snacks" value="cs" />
              <Picker.Item label="Baking" value="bake" />
            </Picker>
          </View>

          <View />
          <Text style={styles.searchText}>
            Price : $ {sliderValue}
          </Text>

          <Slider
            maximumValue={max}
            minimumValue={min}
            minimumTrackTintColor="#307ecc"
            maximumTrackTintColor="#ffffff"
            step={0.50}
            value={sliderValue}
            onValueChange={
              (sliderValue) => setSliderValue(Math.round(sliderValue * 100) / 100)
            }
          />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, backgroundColor: "oldlace", height: 35, width: 10 }}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
                uncheckedColor="white"
                color="red"
              />
            </View>
            <Text style={styles.searchText2}>Show items available</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={searchItem}
            style={styles.button2}>
            <Text style={styles.textButton}>Search</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Item added succesfully.</Text>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#A5C9FA" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>X</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Text style={styles.textStyle}>Click to add item</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
}

function LocateScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: "yellowgreen", paddingTop: 90 }}>
      <Text style={styles.heading11}>JIV'S GROCERIES</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Map')}>
        <Text style={styles.heading2}>Find Us On The Map!</Text>
      </TouchableOpacity>
      <Text>{'\n'}</Text>
      <TouchableOpacity
          onPress={() => Alert.alert("Check out the All Items Tab to Find What Items are Available!")}>
          <Image source={require('./assets/storeMap.png')} style={{ width: 350, height: 350 }} />
        </TouchableOpacity>
      <Text>{'\n'}</Text>
    </View>
  );
}

function MapScreen({ navigation }) {
  const [myRegion, setRegion] = useState({
    latitude: 42.46096759950416,
    longitude: -76.50325598116764,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  }
  );
  const [markers, setMarkers] = useState([{
    latlng: {
      latitude: 42.49196502655446,
      longitude: -76.52158509097018,
    },
    title: "JIV'S GROCERIES",
    description: "The Best Groceries Around!",
    pinColor: 'green',
  }]
  );

  const onRegionChange = (region) => {
    setRegion(region);
  }
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
        region={myRegion}
        onRegionChange={onRegionChange}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
            pinColor={marker.pinColor}
          />
        ))}
      </MapView>
    </View>
  );
}

const LocateStack = createStackNavigator();

function LocateStackScreen() {
  return (
    <LocateStack.Navigator>
      <LocateStack.Screen name="Locate" component={LocateScreen} options={{ headerShown: false }} />
      <LocateStack.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
    </LocateStack.Navigator>
  );
}

const ItemsStack = createStackNavigator();

function ItemsStackScreen() {
  return (
    <ItemsStack.Navigator>
      <ItemsStack.Screen name="My Lists" component={ListScreen} options={{ headerShown: false }} />
      <ItemsStack.Screen name="Add Items" component={AddItemsScreen} />
    </ItemsStack.Navigator>
  );
}

const ListStack = createStackNavigator();

function ListStackScreen() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="All Items" component={ItemsScreen} options={{ headerShown: false }} />
      <ListStack.Screen name="Add Items" component={AddItemsScreen} />
    </ListStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const store = createStore(itemsReducer);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-cart'
                  : 'ios-cart'
              } else if (route.name === 'All Items') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              } else if (route.name === 'Search') {
                iconName = focused ? 'ios-search' : 'ios-search'
              } else if (route.name === 'Locate') {
                iconName = focused ? 'ios-navigate' : 'ios-navigate'
              } else if (route.name === 'My Lists') {
                iconName = focused ? 'ios-checkbox' : 'ios-checkbox-outline'
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#db86a3',
            inactiveTintColor: '#6b1331',
            activeBackgroundColor: 'pink',
            inactiveBackgroundColor: 'pink'
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="All Items" component={ListStackScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Locate" component={LocateStackScreen} />
          <Tab.Screen name="My Lists" component={ItemsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;