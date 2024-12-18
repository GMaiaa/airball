import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import theme from './src/theme';
import { Loading } from '@components/Loading';
import TabBar from '@components/TabBar';
import { CourtForm } from '@screens/CourtForm';
import CourtGames from '@screens/CourtGames';
import { SignIn } from '@screens/SignIn';
import { Routes } from '@routes/index';
import { AuthContextProvider } from '@contexts/AuthContext';



export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </ThemeProvider>
  );
}