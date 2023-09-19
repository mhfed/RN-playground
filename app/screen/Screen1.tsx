import {StackScreenProps} from '@react-navigation/stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootParamList} from '../../App';

type Screen1Props = StackScreenProps<RootParamList, 'Screen1'>;

const Screen1 = ({navigation, route}: Screen1Props) => {
  console.log(route);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Screen 1</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => {
          navigation.push('Screen2', {paramA: 'hieu'});
        }}
      />
    </View>
  );
};
export default Screen1;
const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
});
