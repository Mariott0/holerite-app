import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

type Holerite = {
  id: number;
  mes: string;
  ano: string;
  salarioBruto: string;
  descontos: string;
  salarioLiquido: string;
};

export default function Holerite() {
  const router = useRouter();

  const [holerites, setHolerites] = useState<Holerite[]>([
    {
      id: 1,
      mes: 'Maio',
      ano: '2025',
      salarioBruto: 'R$ 3.500,00',
      descontos: 'R$ 500,00',
      salarioLiquido: 'R$ 3.000,00',
    },
    {
      id: 2,
      mes: 'Abril',
      ano: '2025',
      salarioBruto: 'R$ 3.500,00',
      descontos: 'R$ 450,00',
      salarioLiquido: 'R$ 3.050,00',
    },
    // ➕ Adicionar mais holerites se desejar
  ]);

  const renderItem = ({ item }: { item: Holerite }) => (
    <View style={styles.item}>
      <Text style={styles.date}>📄 {item.mes} / {item.ano}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Salário Bruto:</Text>
        <Text style={styles.value}>{item.salarioBruto}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Descontos:</Text>
        <Text style={styles.value}>{item.descontos}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Salário Líquido:</Text>
        <Text style={styles.value}>{item.salarioLiquido}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Holerite</Text>

      <FlatList
        data={holerites}
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
