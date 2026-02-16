import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavBar from './app/components/NavBar';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavBar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}