import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router'; // ou useRouter do next/navigation se for Next.js Web

type User = {
  id: number;
  name: string;
  email: string;
  role: 'rh' | 'colaborador';
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (userData: User) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Carregar usuário do AsyncStorage quando o app inicia
  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('@user');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (userData: User) => {
    try {
      setUser(userData);
      await AsyncStorage.setItem('@user', JSON.stringify(userData));
      router.replace('/(tabs)'); // redireciona para a tela principal
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível fazer login');
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      await AsyncStorage.removeItem('@user');
      router.replace('/(auth)/login'); // redireciona para login
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível sair');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
