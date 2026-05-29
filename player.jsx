import { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import IonIcons from '@expo/vector-icons/Ionicons';
// Importação atualizada aqui:
// Antes estava: import { MusicContext } from '../dados/musicfav';
import { MusicContext } from './musicfav';

export default function Player({ route, navigation }) {
  const { faixas, toggleFavorito } = useContext(MusicContext);
  const { trackId } = route.params || { trackId: '1' };
  const track = faixas.find(f => f.id === trackId) || faixas[0];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IonIcons name="chevron-down" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerSubtitle}>TOCANDO DO ÁLBUM</Text>
        <IonIcons name="ellipsis-horizontal" size={24} color="#FFFFFF" />
      </View>
      <Text style={styles.albumTitle} numberOfLines={1}>{track.album}</Text>

      <View style={styles.artworkContainer}>
        <View style={styles.giantCover}>
          <Text style={styles.giantEmoji}>🌟</Text>
        </View>
      </View>

      <View style={styles.metaContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.trackTitle} numberOfLines={1}>{track.titulo}</Text>
          <Text style={styles.artistName} numberOfLines={1}>{track.artista}</Text>
        </View>
        
        <TouchableOpacity onPress={() => toggleFavorito(track.id)}>
          <IonIcons 
            name={track.favoritado ? "heart" : "heart-outline"} 
            size={28} 
            color="#1374F2" 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarBg}>
          <View style={styles.progressBarActive} />
        </View>
        <View style={styles.timeRow}>
          <Text style={styles.timeText}>1:24</Text>
          <Text style={styles.timeText}>{track.duracao}</Text>
        </View>
      </View>

      <View style={styles.controlsRow}>
        <TouchableOpacity>
          <IonIcons name="shuffle" size={26} color="#A7A7A7" />
        </TouchableOpacity>
        <TouchableOpacity>
          <IonIcons name="play-skip-back" size={32} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton}>
          <IonIcons name="play" size={30} color="#FFFFFF" style={{ marginLeft: 4 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <IonIcons name="play-skip-forward" size={32} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <IonIcons name="repeat" size={26} color="#1374F2" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', paddingHorizontal: 24, paddingTop: 40 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerSubtitle: { color: '#A7A7A7', fontSize: 11, fontWeight: 'bold', letterSpacing: 1 },
  albumTitle: { color: '#FFFFFF', fontSize: 14, fontWeight: '600', textAlign: 'center', marginTop: -4, marginBottom: 20 },
  artworkContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 20 },
  giantCover: { width: '100%', aspectRatio: 1, backgroundColor: '#242424', borderRadius: 8, justifyContent: 'center', alignItems: 'center', elevation: 10 },
  giantEmoji: { fontSize: 80 },
  metaContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 25 },
  titleWrapper: { flex: 1, marginRight: 16 },
  trackTitle: { color: '#FFFFFF', fontSize: 22, fontWeight: 'bold' },
  artistName: { color: '#A7A7A7', fontSize: 16, marginTop: 4 },
  progressContainer: { marginBottom: 30 },
  progressBarBg: { height: 4, backgroundColor: '#404040', borderRadius: 2, width: '100%' },
  progressBarActive: { height: 4, backgroundColor: '#1374F2', borderRadius: 2, width: '40%' },
  timeRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  timeText: { color: '#A7A7A7', fontSize: 12 },
  controlsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 },
  playButton: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#1374F2', justifyContent: 'center', alignItems: 'center' },
});