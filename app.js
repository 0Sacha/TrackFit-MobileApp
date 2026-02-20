import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';
import TabBar from './app/components/TabBar';

function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <TabBar />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default registerRootComponent(App);