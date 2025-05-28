import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { AuthProvider, useAuth } from '../contexts/authContext';

export default function MeusDados() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Dados</Text>

      <View style={styles.card}>
        <Text style={styles.label}>👤 Nome:</Text>
        <Text style={styles.value}>{user?.name}</Text>

        <Text style={styles.label}>🆔 ID:</Text>
        <Text style={styles.value}>{user?.id}</Text>

        {/* Você pode adicionar mais dados aqui, como CPF, telefone, email, etc. */}
      </View>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  label: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 10,
  },
  value: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  voltar: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
