import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../../../App';

// type PlaygroundProps = ;

export const Playground = React.memo(
  ({
    route,
    navigation,
    extraData,
  }: NativeStackScreenProps<RootStackParamList, 'Playground'> & {
    extraData: string;
  }) => {
    // console.log({route, extraData});

    return (
      <>
        <SafeAreaView>
          {/* button go to welcome page and style it look like link */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Welcome')}
            style={{padding: 10, backgroundColor: '#fff'}}>
            <Text>Go to Welcome page</Text>
          </TouchableOpacity>

          <Button
            title="Update the title"
            onPress={() => navigation.setOptions({title: 'Updated!'})}
          />
        </SafeAreaView>
      </>
    );
  },
);
