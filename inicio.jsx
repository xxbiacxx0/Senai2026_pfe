import { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar, TouchableOpacity } from 'react-native';
// Antes estava: import { MusicContext } from '../dados/musicfav';
import { MusicContext } from './musicfav';

export default function Inicio({ navigation }) {
  const { faixas } = useContext(MusicContext);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      <Text style={styles.headerTitle}>Tocadas Recentemente</Text>
      
      <FlatList 
        data={faixas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.itemRow}
            onPress={() => navigation.navigate('Player', { trackId: item.id })}
          >
            <View style={styles.coverArt}>
              <Text style={styles.avatarEmoji}>🎵</Text>
            </View>
            
            <View style={styles.textContainer}>
              <Text style={styles.trackTitle} numberOfLines={1}>
                {item.titulo}
              </Text>
              <Text style={styles.metaText} numberOfLines={1}>
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
  coverArt: { width: 56, height: 56, backgroundColor: '#242424', borderRadius: 4, justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  avatarEmoji: { fontSize: 22 },
  textContainer: { flex: 1, justifyContent: 'center' },
  trackTitle: { fontSize: 16, fontWeight: '600', color: '#FFFFFF', marginBottom: 4 },
  metaText: { fontSize: 13, color: '#A7A7A7' },
  durationText: { fontSize: 12, color: '#A7A7A7', paddingLeft: 8 },
});