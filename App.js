import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';

// function registration() {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (text) => {
//     setInputValue(text);
//   };

//   const handleSubmit = () => {
//     console.log('Wartość wprowadzona przez użytkowanika: ', inputValue);
//   }

// }

export default login = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <Text style={styles.title}>GWIZD</Text>
        <Text style={styles.reg}>Rejestracja</Text>
      </View>
      <View style={styles.content}>
      <TextInput 
        style={styles.input}
        //onChangeText={handleInputChange}
        //value={inputValue}
        placeholder='Adres e-mail'
      />
      <TextInput style={styles.input} placeholder='Podaj numer telefonu' />
      <TextInput style={styles.input} placeholder='Hasło' />
      <TextInput style={styles.input} placeholder='Potwierdź hasło' />
      <View style={{justifyContent: 'center', alignItems: 'center'}}><TouchableOpacity style={styles.registration}><Text style={styles.registration_text}>Zarejestruj</Text></TouchableOpacity></View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
  },
  logo: {
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    padding: 30,
    fontSize: 40,
    color: '#000',
  },
  reg: {
    fontSize: 24,
    paddingBottom: 10,
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
  },
  input: {
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'orange',
  },
  registration: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#fa0000',
    width: '80%',
    height: 45,
    borderRadius: 10,
    elevation: 5,
  },
  registration_text: {
    fontSize: 25,
    color: '#fff',
  }
});
