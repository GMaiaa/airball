import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from '@components/TabBar'; // Importar TabBar
import CourtGames from "@screens/CourtGames";

type AppRoutes = {
    TabBar: undefined;  // Defina o TabBar como uma rota principal
    CourtGames: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="TabBar" component={TabBar} />
            <Screen name="CourtGames" component={CourtGames} />
        </Navigator>
    );
}
