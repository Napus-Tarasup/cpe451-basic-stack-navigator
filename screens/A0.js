import { View, Text, Button } from 'react-native';

export default function A0({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          A0 Screen
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Button title='GO TO A1' color='indianred' onPress={() => navigation.navigate('A1')} />
      </View>
    </View>
  );
}
