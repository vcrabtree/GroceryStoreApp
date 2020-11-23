import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "yellowgreen" }}>
      <Text>{'\n'}</Text>
      <Image source={require('./assets/JIVLogo.jpg')} style={{width: 300, height:300}} />
      <Text>{'\n'}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('All Items')}
        style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Check Out Our{'\n'}Available Items!</Text>
      </TouchableOpacity>
    </View>
  );
}

function ItemsScreen({ navigation }) {
  const [data] = useState([
    {
      groceryItem: 'Apples'
    },
    {
      groceryItem: 'Pear'
    },
    {
      groceryItem: 'Bananas'
    },
    {
      groceryItem: 'Carrot'
    },
    {
      groceryItem: 'Lettuce'
    }
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item.groceryItem}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My List Items</Text>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id}/>
    </View>
  );
}

function SearchScreen({ navigation }) {
  const [nameInput, setNameInput] = useState('');
  const [itemNoInput, setItemNoInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "yellowgreen" }}>
      <Text style={styles.heading1}>GROCERY STORE</Text>
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
          value={setNameInput}
          onChangeText={itemText => setNameInput(itemText)}
        />
        <Text style={styles.searchText}>Item No.:</Text>
        <UselessTextInput
          multiline
          numberOfLines={4}
          value={setItemNoInput}
          onChangeText={itemText => setItemNoInput(itemText)}
        />
        {/* change to drop down */}

        <Text style={styles.searchText}>Category:</Text>
        <UselessTextInput
          multiline
          numberOfLines={4}
          value={setCategoryInput}
          onChangeText={itemText => setCategoryInput(itemText)}
        />
        <View />
        <Text style={styles.searchText}>Price Range:</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TextInput placeholder="$" style={{ justifyContent: 'flex-start', }} />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput placeholder="$" style={{ justifyContent: 'flex-end', }} />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TextInput placeholder="$" style={{ justifyContent: 'flex-end', }} />
          </View>
          {/* change to radio button */}
          <Text style={styles.searchText2}>Only show the items available</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          // onPress={alertAdd}
          style={styles.button2}>
          <Text style={styles.textButton}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function LocateScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Locate Screen</Text>
    </View>
  );
}

function ListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
          activeTintColor: 'olivedrab',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="All Items" component={ItemsScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Locate" component={LocateScreen} />
        <Tab.Screen name="My Lists" component={ListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightcyan'
  },
  heading2: {
    fontSize: 28,
    color: "lightyellow",
    fontFamily: "Cochin",
    marginBottom: 10,
  },
  heading1: {
    fontSize: 30,
    color: "papayawhip",
    fontFamily: "Cochin",
    marginBottom: 10,
    borderRadius: 10,
    padding: 12,
    borderWidth: 3.5,
    borderColor:"papayawhip",
  },
  searchText: {
    fontSize: 20,
    color: "lightpink",
    fontFamily: "Cochin",
  },
  searchText2: {
    fontSize: 15,
    color: "lightpink",
    fontFamily: "Cochin",
  },
  button2: {
    textAlign: "center",
    marginTop: 20,
    paddingTop: 15,
    // borderRadius: 10,
    // borderWidth: 1,
    backgroundColor: 'pink',
    padding: 12,
    // borderWidth: 0.5,
    borderRadius: (65 / 2),
    width: 95,
    height: 45,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.9,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    
  },
  textButton: {
    textAlign: 'center',
    fontSize: 12,
  },
  homeButton: {
    textAlign: "center",
    marginTop: 20,
    paddingTop: 15,
    backgroundColor: 'pink',
    padding: 12,
    borderRadius: (65 / 2),
    width: 150,
    height: 60,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.9,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    
  },
  homeButtonText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: "Cochin",
    color: '#333333',
  },
  listItem: {
    backgroundColor: 'yellowgreen',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
})