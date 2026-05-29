import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IonIcons from '@expo/vector-icons/Ionicons';

// Importações sincronizadas
import Login from '../pages/login';
import Cadastro from '../pages/cadastros';
import Inicio from '../pages/inicio';
import Favoritos from '../pages/favoritos';
import Player from '../pages/player';
// Antes estava: import Musicprovider from '../dados/musicfav';
import { MusicProvider } from '../pages/musicfav'; // Importação do provider

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Draw = createDrawerNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#121212', borderTopWidth: 0, paddingBottom: 4 },
        tabBarActiveTintColor: '#1374F2',
        tabBarInactiveTintColor: '#A7A7A7',
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = 'ellipse-outline';

          if (route.name === 'Músicas') {
            iconName = focused ? 'musical-notes' : 'musical-notes-outline';
          }

          if (route.name === 'Favoritos') {
            iconName = focused ? 'star' : 'star-outline';
          }

          return <IonIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name='Músicas' component={Inicio}/>
      <Tab.Screen name='Favoritos' component={Favoritos}/>
    </Tab.Navigator>
  )
}

function MenuSuperior() {
  return (
    <Draw.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: { backgroundColor: '#121212', borderBottomWidth: 0, shadowColor: 'transparent' },
        headerTintColor: '#FFFFFF',
        drawerStyle: { backgroundColor: '#121212', width: 240 },
        drawerActiveTintColor: '#1374F2',
        drawerInactiveTintColor: '#A7A7A7',
        drawerIcon: ({ color, size, focused }) => {
          let iconName = 'ellipse-outline';
          if(route.name === "Início"){
            iconName = focused ? 'home' : 'home-outline';
          }
          if (route.name === 'Favoritos') {
            iconName = focused ? 'star' : 'star-outline';
          }
          return <IonIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Draw.Screen name='Início' component={Tabs}/>
      <Draw.Screen name='Favoritos' component={Favoritos}/>
    </Draw.Navigator>
  )
}

export default function Rotas(){
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Registro' component={Cadastro}/>
      <Stack.Screen name='Principal' component={MenuSuperior}/>
      <Stack.Screen name='Player' component={Player} options={{ presentation: 'modal' }}/>
    </Stack.Navigator>
  )
}