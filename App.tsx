import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native'; 
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import theme from './src/theme';
import { Loading } from '@components/Loading';
import MyProfile from './src/screens/MyProfile';

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <MyProfile /> // Renderize apenas MyProfile
      ) : (
        <Loading />
      )}
    </ThemeProvider>
  );
}
