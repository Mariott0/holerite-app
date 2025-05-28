import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

type RegistroPonto = {
  id: number;
  data: string;
  entrada: string;
  saidaAlmoco: string;
  retornoAlmoco: string;
  saida: string;
};

export default function CartaoPonto() {
  const router = useRouter();

  const [registros, setRegistros] = useState<RegistroPonto[]>([
    {
      id: 1,
      data: '2025-05-01',
      entrada: '08:00',
      saidaAlmoco: '12:00',
      retornoAlmoco: '13:00',
      saida: '18:00',
    },
    {
      id: 2,
      data: '2025-05-02',
      entrada: '08:05',
      saidaAlmoco: '12:00',
      retornoAlmoco: '13:00',
      saida: '18:02',
    },
    // ➕ Pode adicionar mais registros de exemplo
  ]);

  const renderItem = ({ item }: { item: RegistroPonto }) => (
    <View style={styles.item}>
      <Text style={styles.date}>📅 {item.data}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Entrada:</Text>
        <Text style={styles.value}>{item.entrada}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Saída Almoço:</Text>
        <Text style={styles.value}>{item.saidaAlmoco}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Retorno Almoço:</Text>
        <Text style={styles.value}>{item.retornoAlmoco}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Saída:</Text>
        <Text style={styles.value}>{item.saida}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cartão Ponto</Text>

      <FlatList
        data={registros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

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
  item: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 10,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#333',
  },
  date: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    color: '#aaa',
    fontSize: 14,
  },
  value: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  voltar: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 16,
    textDecorationLine: 'underline',
  },
});
