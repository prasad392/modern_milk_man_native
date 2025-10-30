import { Stack } from "expo-router";

export default function RootLayout() {
  return (
     <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: true, title:'Login',headerTitleAlign:'center' }} />
      <Stack.Screen name="register" options={{ headerShown: true, title:'Register',headerTitleAlign:'center' }} />
    </Stack>
  )
}
