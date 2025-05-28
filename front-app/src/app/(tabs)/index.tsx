import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/src/contexts/authContext';

import { formToJSON } from 'axios';


export default function Index() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Carregando usuário...</Text>
      </View>
    );
  }

  const isRH = user.role === 'rh';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo, {user.name}</Text>

      {isRH ? (
        <>
          <MenuButton title="Cadastro de Funcionário" onPress={() => router.push('/cadastro-funcionario')} />
          <MenuButton title="Cadastro de Cartão Ponto" onPress={() => router.push('/cadastro-cartao-ponto')} />
          <MenuButton title="Cadastro de Holerite" onPress={() => router.push('/cadastro-holerite')} />
        </>
      ) : (
        <>
          <MenuButton title="Cartão Ponto" onPress={() => router.push('/cartao-ponto')} />
          <MenuButton title="Holerite" onPress={() => router.push('/holerite')} />
          <MenuButton title="Meus Dados" onPress={() => router.push('/meus-dados')} />
        </>
      )}

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function MenuButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
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
    fontSize: 24,
    color: '#fff',
    marginBottom: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 40,
  },
  logoutText: {
    color: '#FF3B30',
    fontSize: 16,
  },
  text: {
    color: '#fff',
  },
});
