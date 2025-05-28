import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { api } from '../libs/axios';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    try {
      const response = await api.post('./(auth))/login', {
        email,
        senha,
      });

      console.log('Resposta:', response.data);

      Alert.alert('Sucesso', 'Login realizado!');
      router.push('./index'); // Altere para sua rota principal
    } catch (error: any) {
      console.log(error.response?.data || error.message);
      Alert.alert('Erro', 'Email ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <Button title="Entrar" onPress={handleLogin} />

      <Text style={styles.link} onPress={() => router.push('./(auth)/cadastro')}>
        Não tem conta? Cadastre-se
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
  link: { marginTop: 20, color: 'blue', textAlign: 'center' },
});
