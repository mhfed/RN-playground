import {StackScreenProps} from '@react-navigation/stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootParamList} from '../../App';

type Screen2Props = StackScreenProps<RootParamList, 'Screen2'>;

const Screen2 = ({navigation, route}: Screen2Props) => {
  console.log(route);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Screen 2</Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.pop();
        }}
      />
    </View>
  );
};
export default Screen2;

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
