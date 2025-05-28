import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function CadastroCartaoPonto() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [entrada, setEntrada] = useState('');
  const [saida, setSaida] = useState('');

  const handleSalvar = () => {
    if (!nome || !data || !entrada || !saida) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    // 🔥 Aqui você pode integrar com seu backend futuramente.
    Alert.alert('Sucesso', 'Cartão ponto cadastrado com sucesso!');
    router.back(); // Volta para a tela anterior (index)
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Cartão Ponto</Text>

      <Input
        placeholder="Nome do Colaborador"
        value={nome}
        onChangeText={setNome}
      />

      <Input
        placeholder="Data (DD/MM/AAAA)"
        value={data}
        onChangeText={setData}
      />

      <Input
        placeholder="Horário de Entrada (HH:MM)"
        value={entrada}
        onChangeText={setEntrada}
      />

      <Input
        placeholder="Horário de Saída (HH:MM)"
        value={saida}
        onChangeText={setSaida}
      />

      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltarText}>← Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function Input({ placeholder, value, onChangeText }: {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#aaa"
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    backgroundColor: '#222',
    color: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 16,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  voltarText: {
    color: '#aaa',
    marginTop: 12,
    textDecorationLine: 'underline',
  },
});
