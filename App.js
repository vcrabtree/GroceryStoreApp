import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ItemsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Items Screen</Text>
    </View>
  );
}

function SearchScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  );
}

function LocateScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Locate Screen</Text>
    </View>
  );
}

function ListScreen({navigation}) {
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
          activeTintColor: 'tomato',
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
