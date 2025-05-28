import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { api } from '../libs/axios';

enum Papel {
  RH = 'RH',
  COLABORADOR = 'COLABORADOR',
}

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [papel, setPapel] = useState<Papel | null>(null);

  const handleRegister = async () => {
    if (!nome || !email || !senha || !papel) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    try {
      await api.post('/usuario', {
        nome,
        email,
        senha,
        papel,
      });

      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      router.push('./(auth))/login');
    } catch (error: any) {
      console.log(error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível cadastrar.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
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

      <Text style={styles.label}>Selecione o papel:</Text>
      <View style={styles.papelContainer}>
        {Object.values(Papel).map((p) => (
          <TouchableOpacity
            key={p}
            style={[
              styles.papelButton,
              papel === p && styles.papelButtonSelected,
            ]}
            onPress={() => setPapel(p)}
          >
            <Text style={papel === p ? styles.papelTextSelected : styles.papelText}>{p}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="Cadastrar" onPress={handleRegister} />

      <Text style={styles.link} onPress={() => router.push('./(auth))/login')}>
        Já possui conta? Faça login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
  label: { marginBottom: 10, fontWeight: 'bold' },
  papelContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  papelButton: { padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, minWidth: 100, alignItems: 'center' },
  papelButtonSelected: { backgroundColor: '#007AFF', borderColor: '#007AFF' },
  papelText: { color: '#000' },
  papelTextSelected: { color: '#fff', fontWeight: 'bold' },
  link: { marginTop: 20, color: 'blue', textAlign: 'center' },
});
