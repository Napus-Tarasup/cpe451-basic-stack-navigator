import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          Home Screen
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Button title='GO TO A0' color='indianred' onPress={() => navigation.navigate('A0')} />
      </View>
      <View style={{marginTop: 10}}>
        <Button title='GO TO B0' color='khaki' onPress={() => navigation.navigate('B0')} />
      </View>
      <View style={{marginTop: 10}}>
        <Button title='GO TO C0' color='lightgreen' onPress={() => navigation.navigate('C0')} />
      </View>
    </View>
  );
}
