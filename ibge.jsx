import { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

// REMOVIDO: O import da baleia.png que dava erro foi removido daqui.

export default function Index() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [moradores, setMoradores] = useState('');

  function Cadastrar() {
    console.log('Dados da Pesquisa:');
    console.log({ nome, idade, localidade, moradores });
  }

  return (
    <View style={estilos.container}>
      {/* Detalhes azuis do fundo */}
      <View style={estilos.ondaTopo} />
      <View style={estilos.ondaBase} />

      <ScrollView contentContainerStyle={estilos.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Container do Logo com Sombra */}
        <View style={estilos.logoContainer}>
            <Image
            source={{ uri: 'https://fnp.org.br/media/k2/items/cache/6793dfaeaedce2b3d0e76a48b5f73adc_XL.jpg' }}
            style={{ width: 120, height: 120 }} // Tamanho definido direto na tag garante que ela apareça!
            resizeMode='contain'/>
         </View>

        <Text style={estilos.titulo}>Pesquisa</Text>

        <View style={estilos.form}>
          {/* Campo Nome */}
          <Text style={estilos.label}>Nome</Text>
          <TextInput
            style={estilos.input}
            placeholder="Seu nome"
            placeholderTextColor="#7fa1d1"
            value={nome}
            onChangeText={setNome}
          />

          {/* Campo Idade */}
          <Text style={estilos.label}>Idade</Text>
          <TextInput
            style={estilos.input}
            placeholder="30"
            placeholderTextColor="#7fa1d1"
            keyboardType='numeric'
            value={idade}
            onChangeText={setIdade}
          />

          {/* Campo Localidade */}
          <Text style={estilos.label}>Localidade</Text>
          <TextInput
            style={estilos.input}
            placeholder="Mirandopolis"
            placeholderTextColor="#7fa1d1"
            value={localidade}
            onChangeText={setLocalidade}
          />

          {/* Campo Quantidade de Pessoas */}
          <Text style={estilos.label}>Quantas pessoas vivem na sua casa?</Text>
          <TextInput
            style={estilos.input}
            placeholder="20"
            placeholderTextColor="#7fa1d1"
            keyboardType='numeric'
            value={moradores}
            onChangeText={setMoradores}
          />

          {/* Botão Cadastrar */}
          <TouchableOpacity style={estilos.botao} onPress={Cadastrar}>
            <Text style={estilos.botaoTexto}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 40,
  },
  ondaTopo: {
    position: 'absolute',
    top: -100,
    left: -100,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#90caf9',
    opacity: 0.5,
  },
  ondaBase: {
    position: 'absolute',
    bottom: -120,
    right: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#90caf9',
    opacity: 0.5,
  },
  logoContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 60,
  },
  titulo: {
    fontSize: 32,
    fontWeight: '500',
    color: '#385a7c',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  label: {
    color: '#3a5b7e',
    fontSize: 14,
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    borderWidth: 2,
    borderColor: '#63a4ff',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#333',
    backgroundColor: '#ffffff',
  },
  botao: {
    backgroundColor: '#1950a3',
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 35,
    elevation: 4,
  },
  botaoTexto: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});