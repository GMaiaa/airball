import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from '@components/TabBar';
import CourtGames from "@screens/CourtGames";
import MyProfile from "@screens/MyProfile";
import Menu from "@screens/Menu";
import Contact from "@screens/Contact";
import { Home } from "@screens/Home";
import { CourtForm } from "@screens/CourtForm";
import MatchDetails from "@screens/MatchDetails";


export type AppRoutes = {
    TabBar: undefined;  // Defina o TabBar como uma rota principal
    CourtGames: undefined;
    MyProfile: undefined;
    Menu: undefined;
    Contact: undefined;
    Home: undefined;
    CourtForm: undefined;
    MatchDetails:undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="TabBar" component={TabBar} />
            <Screen name="CourtGames" component={CourtGames} />
            <Screen name="MyProfile" component={MyProfile} />
            <Screen name="Menu" component= {Menu} />
            <Screen name="Contact" component= {Contact} />
            <Screen name="Home" component= {Home} />
            <Screen name="CourtForm" component={CourtForm} />
            <Screen name="MatchDetails" component={MatchDetails} />
        </Navigator>
    );
}
