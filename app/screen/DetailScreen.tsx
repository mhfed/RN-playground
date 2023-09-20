import {StackScreenProps} from '@react-navigation/stack';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {RootParamList} from '../../App';

type DetailScreenProps = StackScreenProps<RootParamList, 'DetailScreen'>;

const DetailScreen = ({navigation, route}: DetailScreenProps) => {
  const {item} = route.params;
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{item.title}</Text>
      <Image
        source={{uri: item.image}}
        style={{width: '100%', height: '40%'}}
      />
      <Text style={styles.price}>${item.price}</Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.pop();
        }}
      />
    </View>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    alignItems: 'center',
    flex: 1,
  },
  title: {
    padding: 20,
    fontSize: 30,
  },
  price: {
    fontSize: 40,
    color: 'red',
  },
});
