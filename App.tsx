import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Screen1 from './app/screen/Screen1';
import Screen2 from './app/screen/Screen2';

export type RootParamList = {
  Screen1: undefined;
  Screen2: {paramA: string};
};

const Root = createStackNavigator<RootParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="Screen1" component={Screen1} />
        <Root.Screen name="Screen2" component={Screen2} />
      </Root.Navigator>
    </NavigationContainer>
  );
}
