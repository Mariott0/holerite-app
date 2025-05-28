import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function CadastroHolerite() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const [salario, setSalario] = useState('');
  const [descontos, setDescontos] = useState('');
  const [adicionais, setAdicionais] = useState('');

  const handleSalvar = () => {
    if (!nome || !mes || !ano || !salario) {
      Alert.alert('Erro', 'Preencha os campos obrigatórios');
      return;
    }

    // 🔥 Aqui você pode integrar com seu backend futuramente.
    Alert.alert('Sucesso', 'Holerite cadastrado com sucesso!');
    router.back(); // Volta para a tela anterior
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Holerite</Text>

      <Input
        placeholder="Nome do Funcionário"
        value={nome}
        onChangeText={setNome}
      />
      <Input
        placeholder="Mês (Ex.: Janeiro)"
        value={mes}
        onChangeText={setMes}
      />
      <Input
        placeholder="Ano (Ex.: 2025)"
        value={ano}
        onChangeText={setAno}
        keyboardType="numeric"
      />
      <Input
        placeholder="Salário Bruto"
        value={salario}
        onChangeText={setSalario}
        keyboardType="numeric"
      />
      <Input
        placeholder="Descontos (opcional)"
        value={descontos}
        onChangeText={setDescontos}
        keyboardType="numeric"
      />
      <Input
        placeholder="Adicionais (opcional)"
        value={adicionais}
        onChangeText={setAdicionais}
        keyboardType="numeric"
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

function Input({ placeholder, value, onChangeText, secureTextEntry = false, keyboardType = 'default' }: {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address';
}) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#aaa"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
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
    textAlign: 'center',
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
