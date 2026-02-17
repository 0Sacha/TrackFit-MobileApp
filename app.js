import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';
import NavBar from './app/components/NavBar';

function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <NavBar />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default registerRootComponent(App);