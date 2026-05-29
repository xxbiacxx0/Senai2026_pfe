import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      <View style={styles.headerContainer}>
        <Text style={styles.title}>Inscreva-se grátis</Text>
        <Text style={styles.subtitle}>Crie uma conta no ⭐ Star Music para começar a ouvir.</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Qual é o seu e-mail?</Text>
        <TextInput 
          style={styles.input}
          placeholder='Insira seu e-mail'
          placeholderTextColor='#7A7A7A'
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Crie uma senha</Text>
        <TextInput 
          style={styles.input}
          placeholder='Escolha uma senha forte'
          placeholderTextColor='#7A7A7A'
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <Text style={styles.label}>Confirme sua senha</Text>
        <TextInput 
          style={styles.input}
          placeholder='Repita a senha escolhida'
          placeholderTextColor='#7A7A7A'
          value={confSenha}
          onChangeText={setConfSenha}
          secureTextEntry
        />

        <TouchableOpacity 
          style={styles.buttonPrimary} 
          onPress={() => navigation.navigate('Login')}
        > 
          <Text style={styles.buttonPrimaryText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    padding: 24,
  },
  headerContainer: {
    marginBottom: 32,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: '#A7A7A7',
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#242424',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  buttonPrimary: {
    backgroundColor: '#1374F2', // Azul Identidade Star Music
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});