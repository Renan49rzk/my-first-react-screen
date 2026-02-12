# my-first-react-screen
Repositório

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {
  return (
    <View style = {styles.container}>
    <Text style={styles.texto}> Meu nome eh Renan </Text>


          <TextInput style={styles.input}
            placeholder = "Gustavo"
          />

          <Button title="Salvar" />
          
    </View>
    
  );
}

const styles = StyleSheet.create({

  texto:{
    fontSize: 32,
    color: "#F23232",
    backgroundColor: 111,
    margin: 50
  },

  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },

  input:{
    backgroundColor: "#c7c7c7",
    textAlign: 'center',
    width: "80%",
    borderRadius: 8,
    height: "5%",
    color: "#821731"

  }


});
