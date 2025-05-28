import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function CadastroFuncionario() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cargo, setCargo] = useState('');
  const [setor, setSetor] = useState('');
  const [senha, setSenha] = useState('');

  const handleSalvar = () => {
    if (!nome || !email || !cpf || !cargo || !setor || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    // 🔥 Aqui você pode integrar com seu backend futuramente.
    Alert.alert('Sucesso', 'Funcionário cadastrado com sucesso!');
    router.back(); // Volta para a tela anterior (index)
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Funcionário</Text>

      <Input
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />
      <Input
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <Input
        placeholder="Cargo"
        value={cargo}
        onChangeText={setCargo}
      />
      <Input
        placeholder="Setor (Ex.: RH, Financeiro)"
        value={setor}
        onChangeText={setSetor}
      />
      <Input
        placeholder="Senha de acesso"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
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

function Input({ placeholder, value, onChangeText, secureTextEntry = false }: {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#aaa"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
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
