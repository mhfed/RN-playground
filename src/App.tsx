import React from 'react';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text} from 'react-native';
import {Playground} from './app/screens/playground';
import {Welcome} from './app/screens/welcome';
import {HomeScreen} from './app/screens/home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Playground: {username: string; age: string};
  Welcome: undefined;
  Home: undefined;
};
const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator<RootStackParamList>();

const BottomTab = createBottomTabNavigator();

function LogoTitle() {
  return <Text> This is Title </Text>;
}

const StackScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: props => {
            console.log({props});
            return <LogoTitle {...props} />;
          },
          headerRight: () => (
            <Button
              onPress={() => navigation.openDrawer()}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />

      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerTitle: LogoTitle}}
      />

      {/*use React.memo for components if render with callback*/}
      <Stack.Screen name="Playground" initialParams={{username: 'hieu.minh'}}>
        {props => {
          // console.log('props', props);
          return <Playground {...props} extraData={'Data'} />;
        }}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const BottomScreen = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Feed" component={StackScreen} />
      <BottomTab.Screen name="Welcome" component={Welcome} />
      <BottomTab.Screen name="Playground" component={Playground} />
    </BottomTab.Navigator>
  );
};
export const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={BottomScreen} />
        <Drawer.Screen name="Welcome" component={Welcome} />
        <Drawer.Screen name="Playground" component={Playground} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
