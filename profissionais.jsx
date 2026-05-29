import { View, Text, StyleSheet, FlatList } from 'react-native';
import { profissionais } from '../dados/profissionais';

export default function Profissionais() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Nossos Profissionais</Text>

      <FlatList 
        data={profissionais}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>🩺</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.profName}>{item.nome}</Text>
              <Text style={styles.specialty}>{item.especialidade}</Text>
            </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EAF6F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 22,
  },
  infoContainer: {
    flex: 1,
  },
  profName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#264653',
    marginBottom: 2,
  },
  specialty: {
    fontSize: 14,
    color: '#2A9D8F',
    fontWeight: '500',
  },
});