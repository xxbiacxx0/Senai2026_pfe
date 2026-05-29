import { View, Text, StyleSheet, FlatList } from 'react-native';
import { atendimentos } from '../dados/profissionais';

export default function Atendimentos() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Agendamentos</Text>
      
      <FlatList 
        data={atendimentos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.petName}>🐾 {item.pet}</Text>
              <Text style={styles.timeBadge}>{item.horario}</Text>
            </View>
            <Text style={styles.serviceText}>Serviço: {item.servico}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#264653',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#2A9D8F', // Verde Sesi Pet
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#264653',
  },
  timeBadge: {
    backgroundColor: '#E76F51', // Laranja suave para o horário
    color: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: '600',
  },
  serviceText: {
    fontSize: 14,
    color: '#6C757D',
  },
});