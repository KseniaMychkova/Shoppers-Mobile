import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';


export default function RootLayout() {

  return (
    <>
    <StatusBar style="light" translucent backgroundColor="transparent" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="/" />
        <Stack.Screen name="/login" />
        <Stack.Screen name="/signup" />
        <Stack.Screen name="/products" />
        <Stack.Screen name="/detail" />
        <Stack.Screen name="/(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
