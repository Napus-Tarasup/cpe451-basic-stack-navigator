import { View, Text, Button } from 'react-native';

export default function C1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          C1 Screen
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Button title='BACK TO HOME' color='lightgreen' onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
}