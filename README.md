
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu primeiro App</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu Email"
        placeholderTextColor="#"
      />
      <TextInput
      style={styles.input}
      placeholder="Digite sua Senha"
      placeholderTextColor="#001"
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "cyan",
    padding: 20,

    
  },

  titulo: {
    fontSize: 33,
    fontWeight: "times new roman",
    color: "black",
    marginBottom: 30,
    borderRadius: 40,
    borderBottom: 2,
    borderBottomWidth: 30
    

  },

  input: {
    width: "90%",
    height: 50,
    backgroundColor: "#FFFF00",
    borderRadius: 30,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    background: "rgba(255, 255, 255, 0.98)",
  },

  botao: {
    width: "60%",
    height: 30,
    backgroundColor: "green",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }

});
