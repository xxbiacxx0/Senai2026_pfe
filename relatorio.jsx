import { View, Text, FlatList, StyleSheet } from 'react-native';

const medicoes = [
  { id: 1, temp: 30, hum: 50, vento: 20, mes: 'Jan' },
  { id: 2, temp: 32, hum: 58, vento: 24, mes: 'Fev' },
  { id: 3, temp: 28, hum: 60, vento: 25, mes: 'Mar' },
  { id: 4, temp: 23, hum: 70, vento: 22, mes: 'Abr' },
];

function ItemLista({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.mesTitle}>Mês: {item.mes}</Text>
      <View style={styles.row}>
        <View style={styles.itemBox}>
          <Text style={styles.label}>Temp</Text>
          <Text style={styles.value}>{item.temp}°C</Text>
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.label}>Hum</Text>
          <Text style={styles.value}>{item.hum}%</Text>
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.label}>Vento</Text>
          <Text style={styles.value}>{item.vento} km/h</Text>
        </View>
      </View>
    </View>
  );
}

export default function Relatorio() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Relatório Meteorológico</Text>
      <FlatList 
        data={medicoes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ItemLista item={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F7',
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#5D4045',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 0.5,
    borderColor: '#FFD1DA',
  },
  mesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5D4045',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemBox: {
    alignItems: 'center',
  },
  label: {
    fontSize: 11,
    color: '#A88D92',
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF8A9E',
    marginTop: 4,
  },
});