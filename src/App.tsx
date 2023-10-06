import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, TouchableHighlight, View} from 'react-native';

export type RootStackParamList = {
  DrawerStack: undefined;
  BottomStack: undefined;
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Search: undefined;
  Top: undefined;
};

const Drawer = createDrawerNavigator();

const RootStack = createNativeStackNavigator<RootStackParamList>();

const BottomTab = createBottomTabNavigator();

function Screen1({navigation}: any) {
  return (
    <View>
      <Text>Screen 1</Text>
      <TouchableHighlight
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 30,
          borderRadius: 5,
        }}
        onPress={() => {
          navigation.navigate('Search');
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Search</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate('TopStack')}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              padding: 10,
              backgroundColor: 'lightblue',
              borderRadius: 5,
            }}>
            Go to top stack
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

function Screen2() {
  return (
    <View>
      <Text>Screen 2</Text>
    </View>
  );
}

function Screen3() {
  return (
    <View>
      <Text>Screen 3</Text>
    </View>
  );
}
function Screen4() {
  return (
    <View>
      <Text>Screen 4</Text>
    </View>
  );
}
function Screen5() {
  return (
    <View>
      <Text>Screen 5</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View>
      <Text>Search Screen</Text>
    </View>
  );
}

function Top() {
  return (
    <View>
      <Text>Top</Text>
    </View>
  );
}

const BottomStack = ({state}: any) => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="Screen1" component={Screen1} />
      <BottomTab.Screen name="Screen2" component={Screen2} />
      <BottomTab.Screen name="Screen3" component={Screen3} />
      <BottomTab.Screen name="Screen4" component={Screen4} />
      <BottomTab.Screen name="Screen5" component={Screen5} />
    </BottomTab.Navigator>
  );
};

const TopStack = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Top" component={Top} />
    </RootStack.Navigator>
  );
};

const renderDrawer = ({navigation}: any) => {
  // console.log('routeNames', routeNames);
  // console.log('active', active);

  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Screen1"
        onPress={() => navigation.navigate('Screen1')}
      />
      <DrawerItem
        label="Screen2"
        onPress={() => navigation.navigate('Screen2')}
      />
      <DrawerItem
        label="Screen3"
        onPress={() => navigation.navigate('Screen3')}
      />
      <DrawerItem
        label="Screen4"
        onPress={() => navigation.navigate('Screen4')}
      />
      <DrawerItem
        label="Screen5"
        onPress={() => navigation.navigate('Screen5')}
      />
    </DrawerContentScrollView>
  );
};
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="BottomStack"
      drawerContent={renderDrawer}>
      <Drawer.Screen name="BottomStack" component={BottomStack} />

      <Drawer.Screen name="TopStack" component={TopStack} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="DrawerStack"
        screenOptions={{headerShown: false}}>
        <RootStack.Group
          screenOptions={{headerStyle: {backgroundColor: 'papayawhip'}}}>
          <RootStack.Screen name="DrawerStack" component={DrawerStack} />
        </RootStack.Group>

        <RootStack.Group screenOptions={{presentation: 'modal'}}>
          <RootStack.Screen name="Search" component={SearchScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
