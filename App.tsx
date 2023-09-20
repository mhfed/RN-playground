import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ListScreen from './app/screen/ListScreen';
import DetailScreen from './app/screen/DetailScreen';
import {IProduct} from './app/models/IProducts';

export type RootParamList = {
  ListScreen: undefined;
  DetailScreen: {item: IProduct};
};

const Root = createStackNavigator<RootParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="ListScreen" component={ListScreen} />
        <Root.Screen name="DetailScreen" component={DetailScreen} />
      </Root.Navigator>
    </NavigationContainer>
  );
}
