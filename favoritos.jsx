import { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar, TouchableOpacity } from 'react-native';
// Importação atualizada aqui:
// Antes estava: import { MusicContext } from '../dados/musicfav';
import { MusicContext } from './musicfav';

export default function Favoritos({ navigation }) {
  const { faixas } = useContext(MusicContext);
  const musicasFavoritas = faixas.filter(faixa => faixa.favoritado);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      <Text style={styles.headerTitle}>Músicas Curtidas</Text>

      <FlatList 
        data={musicasFavoritas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma música curtida ainda. ⭐</Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.itemRow}
            onPress={() => navigation.navigate('Player', { trackId: item.id })}
          >
            <View style={styles.coverArtBlue}>
              <Text style={styles.avatarText}>💙</Text>
            </View>
            
            <View style={styles.infoContainer}>
              <Text style={styles.trackTitle} numberOfLines={1}>
                {item.titulo}
              </Text>
              <Text style={styles.artistName} numberOfLines={1}>
                {item.artista} • {item.album}
              </Text>
            </View>

            <Text style={styles.durationText}>{item.duracao}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', paddingTop: 20 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#FFFFFF', marginHorizontal: 16, marginBottom: 20, letterSpacing: -0.5 },
  listContainer: { paddingHorizontal: 16, paddingBottom: 20 },
  itemRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  coverArtBlue: { width: 56, height: 56, borderRadius: 4, backgroundColor: '#1374F222', justifyContent: 'center', alignItems: 'center', marginRight: 14, borderWidth: 1, borderColor: '#1374F2' },
  avatarText: { fontSize: 20 },
  infoContainer: { flex: 1, justifyContent: 'center' },
  trackTitle: { fontSize: 16, fontWeight: '600', color: '#FFFFFF', marginBottom: 4 },
  artistName: { fontSize: 13, color: '#A7A7A7' },
  durationText: { fontSize: 12, color: '#A7A7A7', paddingLeft: 8 },
  emptyText: { color: '#A7A7A7', fontSize: 14, textAlign: 'center', marginTop: 40 }
});