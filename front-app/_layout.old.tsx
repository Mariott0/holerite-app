import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AuthProvider, useAuth } from '../contexts/authContext';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <RootNavigation />
    </AuthProvider>
  );
}

function RootNavigation() {
  const { user, loading } = useAuth();

  if (loading) {
    return null; // Ou um componente de Splash
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="/tabs/index" />
      ) : (
        <>
          <Stack.Screen name="auth/login" />
          <Stack.Screen name="auth/cadastro"/>
        </>
      )}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
